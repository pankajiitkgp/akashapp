import { ReactNode } from 'react'
import type { Pages } from 'contentlayer/generated'
import PageTitle from '@/components/PageTitle'

interface Props {
  children: ReactNode
  content: Omit<Pages, '_id' | '_raw' | 'body'>
  title
}

export default function PageLayout({ children, title }: Props) {

  return (
    <>
      <div className="divide-y divide-gray-200 py-8 dark:divide-gray-700">
        <div className="space-y-2 md:space-y-5">
          <PageTitle >{title}</PageTitle>
        </div>
        <div className="items-start space-y-2">
          <div className="prose max-w-none p-6 px-0 dark:prose-invert xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}