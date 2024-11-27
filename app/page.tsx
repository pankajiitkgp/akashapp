import { Pages, allPages } from 'contentlayer/generated'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import PageLayout from '@/layouts/HomeLayout'
import { coreContent } from 'pliny/utils/contentlayer'

export default function Page() {
  const data = allPages.find((p) => p.slug === 'home') as Pages
  const mainContent = coreContent(data)

  return (
    <>
      <PageLayout content={mainContent}>
        <MDXLayoutRenderer code={data.body.code} components={components} />
      </PageLayout>
    </>
  )
}