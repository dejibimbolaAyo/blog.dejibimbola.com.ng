import type { MDXComponents } from 'mdx/types'
import Codeblock from '@/app/components/Codeblock'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children }) => <Codeblock>{children}</Codeblock>,
    p: ({ children }) => <p className="py-2 text-gray-900">{children}</p>,
    h2: (props) => (
      <h2 className="text-2xl text-gray-900 font-bold mt-8" {...props}>
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h2 className="text-lg text-gray-900 font-bold mt-4" {...props}>
        {props.children}
      </h2>
    ),
    ul: ({ children }) => <ul className="text-gray-900 list-disc list-inside">{children}</ul>,
    li: ({ children }) => <li className="list-item">{children}</li>,
    ...components,
  }
}
