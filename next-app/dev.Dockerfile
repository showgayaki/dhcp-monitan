FROM node:20-alpine AS builder

WORKDIR /tmp
RUN apk update && apk --no-cache add make gcc g++ \
&& wget -O dhcpd-pools.tar.xz https://sourceforge.net/projects/dhcpd-pools/files/latest/download \
&& mkdir dhcpd-pools && tar Jxfv dhcpd-pools.tar.xz -C dhcpd-pools --strip-components 1 \
&& wget https://github.com/troydhanson/uthash/archive/master.zip \
&& unzip master.zip

WORKDIR /tmp/dhcpd-pools
RUN ./configure --with-uthash=/tmp/uthash-master/include \
&& make && make install


FROM node:20-bookworm-slim AS runner

COPY --from=builder /usr/local/bin/dhcpd-pools /usr/local/bin/dhcpd-pools

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  # Allow install without lockfile, so example works even without Node.js installed locally
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

# Start Next.js in development mode based on the preferred package manager
CMD \
  if [ -f yarn.lock ]; then yarn dev; \
  elif [ -f package-lock.json ]; then npm run dev; \
  elif [ -f pnpm-lock.yaml ]; then pnpm dev; \
  else yarn dev; \
  fi
