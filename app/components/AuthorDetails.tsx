import React from 'react'
import { Authors } from '@/app/models/Authors'

interface AuthorDetailsProps {
  authors: Authors
}

const AuthorDetails: React.FC<AuthorDetailsProps> = ({ authors }) => {
  if (authors.length === 0) {
    return (
      <div className="pt-6 pb-10 xl:pt-11 flex">
        <div className="skeleton w-8 h-8 rounded-full mr-4 shrink-0 bg-gray-400"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-32 bg-gray-200"></div>
          <div className="skeleton h-4 w-28 bg-gray-200"></div>
        </div>
      </div>
    )
  }
  return (
    <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
      <dt className="sr-only">Authors</dt>
      <dd>
        <ul className="flex space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
          {authors.map((author) => (
            <li key={author.twitter} className="flex items-center space-x-2">
              <img src={author.avatar} alt="" className="w-10 h-10 rounded-full" />
              <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                <dt className="sr-only">Name</dt>
                <dd className="text-gray-900">{author.name}</dd>
                <dt className="sr-only">Twitter</dt>
                <dd>
                  <a
                    href={`https://twitter.com/${author.twitter}`}
                    className="text-yellow-400 hover:text-yellow-500"
                  >
                    {author.twitter}
                  </a>
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  )
}

export default AuthorDetails
