import tinytime from 'tinytime'

const postDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}')

interface PostDateProps {
  date: string
}

const PostDate: React.FC<PostDateProps> = ({ date }) => {
  if (!date) {
    return <div className="skeleton w-full h-8 mb-4 bg-gray-200 dark:bg-neutral-700 rounded-md" />
  }

  return (
    <div>
      <dt className="sr-only">Published on</dt>
      <dd className="text-base font-medium leading-6 text-gray-500">
        <time dateTime={date}>{postDateTemplate.render(new Date(date))}</time>
      </dd>
    </div>
  )
}

export default PostDate
