import fs from 'node:fs'
import path from 'path'
import createMDX from '@next/mdx'
import { createLoader } from 'simple-functional-loader'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkToc from 'remark-toc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const options = {
  keepBackground: false,
  theme: JSON.parse(
    fs.readFileSync(new URL('./public/rehype/moonlight-ii.json', import.meta.url), 'utf-8')
  ),
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, options],
      [
        rehypeAutolinkHeadings,
        {
          behaviour: 'append',
          properties: {
            ariaHidden: true,
            tabIndex: -1,
          },
        },
      ],
    ],
  },
})

const nextConfig = {
  output: 'standalone',
  experimental: {
    mdxRs: false,
  },
  // Without `disableStaticImages`, the build fails with the following error:
  // Error: Image not a valid image file. The image may be corrupted or an unsupported format.
  images: {
    disableStaticImages: true,
  },
  // configure page extensions
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    let mdx = () => [
      createLoader(function (source) {
        let pathSegments = this.resourcePath.split(path.sep)
        let slug =
          pathSegments[pathSegments.length - 3] + '/' + pathSegments[pathSegments.length - 2]
        return source + `\n\nexport const slug = '${slug}'`
      }),

      createLoader(function (src) {
        const [preview] = src.split('{/* /excerpt */}')
        return preview.replace('{/* excerpt */}', '')
      }),
    ]

    config.module.rules.push({
      test: /\.mdx$/,
      resourceQuery: /preview/,
      use: [
        ...mdx([
          () => (tree) => {
            let firstParagraphIndex = tree.children.findIndex((child) => child.type === 'paragraph')

            if (firstParagraphIndex > -1) {
              tree.children = tree.children.filter((child, index) => {
                if (child.type === 'import' || child.type === 'export') {
                  return true
                }
                return index <= firstParagraphIndex
              })
            }
          },
        ]),
      ],
    })

    return config
  },
}

export default withMDX(nextConfig)
