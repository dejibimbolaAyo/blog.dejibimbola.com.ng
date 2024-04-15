import fs from 'fs'
import RSS from 'rss'
import getAllPostPreviews from '@/app/getAllPostPreviews'

const feed = new RSS({
  title: 'Blog – Dejibimbola',
  site_url: 'https://blog.dejibimbola.com.ng',
  feed_url: 'https://blog.dejibimbola.com.ng/feed.xml',
})

getAllPostPreviews().forEach(({ link, module: { meta } }) => {
  feed.item({
    title: meta.title,
    guid: link,
    url: `https://blog.dejibimbola.com.ng${link}`,
    date: meta.date,
    description: meta.description,
    custom_elements: [].concat(meta.authors.map((author) => ({ author: [{ name: author.name }] }))),
  })
})

fs.writeFileSync('./out/feed.xml', feed.xml({ indent: true }))
