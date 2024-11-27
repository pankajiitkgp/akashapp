import { Pages, allPages } from 'contentlayer/generated'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

import PageLayout from '@/layouts/PageLayout'

export const metadata = genPageMetadata({ title: 'Open Positions' })

export default function Page() {
  const data = allPages.find((p) => p.slug === 'openings') as Pages
  const mainContent = coreContent(data)

  return (
    <>
      <PageLayout content={mainContent} title={metadata.title}>
        <MDXLayoutRenderer code={data.body.code} components={components} />
      </PageLayout>
    </>
  )
}
