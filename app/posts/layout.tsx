'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { getPostMetadata } from '@/utils/getAllPosts'
import { PostMetadata } from '@/app/models/Post'
import PageTitle from '@/app/components/PageTitle'
import PostDate from '@/app/components/PostDate'
import ArticleNavigation from '../components/ArticleNavigation'
import AuthorDetails from '../components/AuthorDetails'

const PostLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const emptyPostMetadata: PostMetadata = {
    title: '',
    description: '',
    date: '',
    image: '',
    link: '',
    authors: [],
  }
  const [postMetadata, setPostMetadata] = useState(emptyPostMetadata)
  const pathname = usePathname()

  useEffect(() => {
    const fetchData = async () => {
      const postMetadata = await getPostMetadata(pathname)

      setPostMetadata(postMetadata)
    }

    fetchData()
  }, [pathname])
  return (
    <div className="container bg-white my-4 p-4 lg:my-16 lg:p-16 mx-auto">
      <div className="space-y-1 text-center">
        <dl className="space-y-10">
          <PostDate date={postMetadata.date} />
        </dl>
      </div>
      <PageTitle>{postMetadata.title}</PageTitle>
      <div className="border-b-2 border-gray-200 mb-8" />
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex-none md:w-64 md:pr-16 mt-4 md:mt-0">
          <AuthorDetails authors={postMetadata.authors} />
          <ArticleNavigation previous={postMetadata.previous} next={postMetadata.next} />
        </div>
        <article className="flex-auto prose max-w-none">{children}</article>
      </div>
    </div>
  )
}

export default PostLayout
