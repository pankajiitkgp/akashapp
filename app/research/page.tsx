import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

import ListLayout from '@/layouts/ResearchLayout'

const POSTS_PER_PAGE = 10

export const metadata = genPageMetadata({ title: 'Research Works' })

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs.filter((post) => post.tags.includes('research-page'))))

  return (
    <ListLayout
      posts={posts}
      title="Research Works"
    />
  )
}
