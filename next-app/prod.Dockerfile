FROM node:20-slim AS base

ENV NODE_ENV=production

ARG NEXT_PUBLIC_NEXTAUTH_URL
ENV NEXT_PUBLIC_NEXTAUTH_URL=${NEXT_PUBLIC_NEXTAUTH_URL}
ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL}
ARG NEXT_PUBLIC_API_RETRY_INTERVAL_IN_SECONDS
ENV NEXT_PUBLIC_API_RETRY_INTERVAL_IN_SECONDS=${NEXT_PUBLIC_API_RETRY_INTERVAL_IN_SECONDS}
ARG NEXT_PUBLIC_API_MAX_RETRY
ENV NEXT_PUBLIC_API_MAX_RETRY=${NEXT_PUBLIC_API_MAX_RETRY}
ARG NEXT_PUBLIC_DHCP_CONF_FILE_PATH
ENV NEXT_PUBLIC_DHCP_CONF_FILE_PATH=${NEXT_PUBLIC_DHCP_CONF_FILE_PATH}
ARG NEXT_PUBLIC_DHCP_LEASE_FILE_PATH
ENV NEXT_PUBLIC_DHCP_LEASE_FILE_PATH=${NEXT_PUBLIC_DHCP_LEASE_FILE_PATH}
ARG NEXT_PUBLIC_DHCP_LOG_FILE_PATH
ENV NEXT_PUBLIC_DHCP_LOG_FILE_PATH=${NEXT_PUBLIC_DHCP_LOG_FILE_PATH}
ARG NEXT_PUBLIC_API_TZ
ENV NEXT_PUBLIC_API_TZ=${NEXT_PUBLIC_API_TZ}
ARG NEXT_PUBLIC_API_LOCALE
ENV NEXT_PUBLIC_API_LOCALE=${NEXT_PUBLIC_API_LOCALE}


# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

RUN apt-get update \
&& apt-get -qq install -y --no-install-recommends dhcpd-pools \
&& rm -rf /var/lib/apt/lists/*

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# Omit --production flag for TypeScript devDependencies
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i && pnpm store prune; \
  # Allow install without lockfile, so example works even without Node.js installed locally
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .

# Build Next.js based on the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else yarn build; \
  fi


# Step 2. Production image, copy all the files and run next
FROM base AS runner

COPY --from=builder /usr/bin/dhcpd-pools /usr/bin/dhcpd-pools

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs \
&& adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

CMD ["node", "server.js"]
