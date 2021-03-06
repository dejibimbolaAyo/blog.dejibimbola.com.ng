import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.jpg'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Home() {
  return (
    <div className="divide-y divide-gray-200">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dejibimbola" />
        <meta name="twitter:creator" content="@dejibimbola" />
        <meta name="twitter:title" content="Blog - Dejibimbola" />
        <meta name="twitter:description" content="Development journey for a full stack developer." />
        <meta name="twitter:image" content={`https://blog.dejibimbola.com.ng${twitterCard}`} />
        <meta property="og:url" content="https://blog.dejibimbola.com.ng" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog – Dejibimbola" />
        <meta property="og:description" content="Development journey for a full stack developer." />
        <meta property="og:image" content={`https://blog.dejibimbola.com.ng${twitterCard}`} />
        <title>Blog – Dejibimbola</title>
        <meta name="description" content="Development journey for a full stack developer." />
      </Head>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Journey
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          My journey as a developer, chronicled in a blog.
        </p>
      </div>
      <ul className="divide-y divide-gray-200">
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link} className="py-12">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500">
                    <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={link}>
                        <a className="text-gray-900">{meta.title}</a>
                      </Link>
                    </h2>
                    <div className="prose text-gray-500 max-w-none">
                      <Component />
                    </div>
                  </div>
                  <div className="text-base font-medium leading-6">
                    <Link href={link}>
                      <a
                        className="text-yellow-400 hover:text-yellow-500"
                        aria-label={`Read "${meta.title}"`}
                      >
                        Read more &rarr;
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
