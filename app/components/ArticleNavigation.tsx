import { PostFromFile } from '../models/Post'
import Link from 'next/link'

interface ArticleNavigationProps {
  previous?: PostFromFile
  next?: PostFromFile
}

const ArticleNavigation: React.FC<ArticleNavigationProps> = ({ previous, next }) => (
  <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 dark:divide-gray-800 xl:col-start-1 xl:row-start-2">
    {(next || previous) && (
      <div className="py-8 space-y-8">
        {next && (
          <div>
            <h2 className="text-xs tracking-wide text-gray-500 uppercase">Next Article</h2>
            <div className="text-yellow-400 dark:text-yellow-600 hover:text-yellow-500">
              <Link href={next.slug}>{next.module.meta.title}</Link>
            </div>
          </div>
        )}
        {previous && (
          <div>
            <h2 className="text-xs tracking-wide text-gray-500 uppercase">Previous Article</h2>
            <div className="text-yellow-400 dark:text-yellow-600 hover:text-yellow-500">
              <Link href={previous.slug}>{previous.module.meta.title}</Link>
            </div>
          </div>
        )}
      </div>
    )}
    <div className="pt-8">
      <Link className="text-yellow-400 dark:text-yellow-600 hover:text-yellow-500" href="/">
        &larr; Back to post list
      </Link>
    </div>
  </footer>
)

export default ArticleNavigation
