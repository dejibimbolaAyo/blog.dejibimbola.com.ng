import { ReactNode } from 'react'

interface PageTitleProps {
  children: ReactNode
  className?: string
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  if (!children) {
    return <div className="skeleton w-full h-14 mb-4 bg-gray-200 dark:bg-neutral-700 rounded-md" />
  }

  return (
    <h1 className="text-center text-3xl mt-4 mb-8 leading-9 font-extrabold text-gray-900 dark:text-gray-200 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}

export default PageTitle
