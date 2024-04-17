import tinytime from 'tinytime'
import Link from 'next/link'
import { getAllPostPreviews } from '../utils/getAllPosts'
import openGraphMetadata from './data/metadata/opengraph'
import { PostPreview, PostPreviews } from '@/app/models/Post'
import { Metadata } from 'next'

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export const metadata: Metadata = {
  openGraph: {
    ...openGraphMetadata,
  },
  title: 'Journey',
}

const Home = async () => {
  const posts = await getPosts()

  return (
    <div className="container mx-auto px-4 py-8 lg:px-16 lg:py-12">
      <div className="divide-y divide-gray-200">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Journey
          </h1>
          <p className="text-lg leading-7 text-gray-500">
            My journey as a developer, chronicled in a blog.
          </p>
        </div>
        <ul className="divide-y divide-gray-200">
          {posts.map(({ slug, meta, preview }) => {
            return (
              <li key={slug} className="py-12">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500">
                      <time dateTime={meta.date}>
                        {postDateTemplate.render(new Date(meta.date))}
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={slug} className="text-gray-900">
                          {meta.title}
                        </Link>
                      </h2>
                      <div className="prose text-gray-500 max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: preview }} />
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={slug}
                        className="text-yellow-400 hover:text-yellow-500"
                        aria-label={`Read "${meta.title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

async function getPosts(): Promise<PostPreviews> {
  const ReactDOMServer = (await import('react-dom/server')).default

  const posts = (await getAllPostPreviews()).map(({ slug, module }) => {
    return {
      slug,
      meta: module.meta,
      preview: ReactDOMServer.renderToStaticMarkup(<module.default />),
    } as PostPreview
  })

  return posts as PostPreviews
}

export default Home
