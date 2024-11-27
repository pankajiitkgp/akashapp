import peopleData from '@/data/peopleData'
import Card from '@/components/ProfileCard'
import { genPageMetadata } from 'app/seo'
import PageTitle from '@/components/PageTitle'

export const metadata = genPageMetadata({ title: 'People' })

export default function People() {
  return (
    <>
      <div className="divide-y divide-gray-200 py-8 dark:divide-gray-700">
        <div className="space-y-2 md:space-y-5">
          <PageTitle >People</PageTitle>
        </div>
        <div className="container py-12">
          <div className="flex-wrap">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
              {peopleData.map((d) => (
                <Card
                  key={d.name}
                  name={d.name}
                  position={d.position}
                  avatar={d.avatar}
                  email={d.email}
                  github={d.github}
                  linkedin={d.linkedin}
                  twitter={d.twitter}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
