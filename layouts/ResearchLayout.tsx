import PageTitle from '@/components/PageTitle'
import Card from '@/components/ResearchCard'


export default function PageLayout({ title, posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 py-8 dark:divide-gray-700">
        <div className="space-y-2 md:space-y-5">
          <PageTitle >{title}</PageTitle>
        </div>
        <div className="items-start space-y-2">
          <div className="max-w-none p-6 px-0 dark:prose-invert xl:col-span-2">
            <ul className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:grid-cols-2'>
              <Card posts={posts} />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
