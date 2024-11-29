import { ReactNode } from 'react'
import type { Pages } from 'contentlayer/generated'
import Link from '@/components/Link'

const MAX_DISPLAY = 8

import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

interface Props {
  children: ReactNode
  content: Omit<Pages, '_id' | '_raw' | 'body'>
}

export default function HomeLayout({ children }: Props) {

  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  //const posts = allCoreContent(sortPosts(allBlogs.filter((post) => post.tags.includes(filter))))

  return (
    <>
      <div className="divide-y divide-gray-200 py-8 dark:divide-gray-700">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="prose max-w-none p-6 px-0 dark:prose-invert xl:col-span-2">
            {children}
          </div>
          <div className="flex flex-col my-4 p-6 text-sm border-l border-zinc-100 dark:border-zinc-900">
            <h1 className="text-xl font-semibold pb-5">Recent News {process.env.BASE_PATH}</h1>
            <ul className='list-outside list-disc px-2'>
              {!posts.length && 'No posts found.'}
              {posts.slice(0, MAX_DISPLAY).map((post) => {
                const { slug, title } = post
                return (
                  <li key={slug} className='py-1 prose text-sm'>
                    <a
                      href={`/news/${slug}`}
                    >
                      {title}
                    </a>
                  </li>
                )
              })}
            </ul>
            {posts.length > MAX_DISPLAY && (
              <div className="flex justify-end text-base font-medium leading-6">
                <Link
                  href="/news"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="All posts"
                >
                  All Posts &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
