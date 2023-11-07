const path = require('path')
const fs = require('fs')


const pageList = (dir) => {
    // ログインが必要なページリストを作成
    // middlewareで使用する
    const allDirents = fs.readdirSync(dir, { withFileTypes: true })

    // 再帰的に取得
    const files = []
    for (const dirent of allDirents) {
        if (dirent.isDirectory()) {
            const fp = path.join(dir, dirent.name)
            files.push(pageList(fp))
        } else if (dirent.isFile() && ['.ts', '.tsx'].includes(path.extname(dirent.name))) {
            const page = path.join(dir, dirent.name).replace('src/pages', '').split('.')[0]
            if (page.includes('mock') ||
                page.includes('_app') ||
                page.includes('_document') ||
                page.includes('login') ||
                page.includes('register')
            ) {
                ;
            } else if (page.includes('index')) {
                files.push('/')
            } else {
                files.push(page)
            }
        }
    }

    return files.flat()
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        NEXT_PUBLIC_PAGE_LIST: pageList('src/pages')
    },
    output: 'standalone',
}

module.exports = nextConfig
