import { genPageMetadata } from 'app/seo'
import PageTitle from '@/components/PageTitle'
//import LeafletMap from "@/components/Map";

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-zinc-200 dark:divide-zinc-700">
        <div className="space-y-2 md:space-y-5">
          <PageTitle >Contact</PageTitle>
        </div>
        <div className="container py-12">
          <div className="flex-wrap">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden border-2">
                Map will be here.
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Address</h3>
                    <p className="mt-1 text-zinc-600">123 Main St, San Francisco, CA 94105</p>
                  </div>
                  <div className="border-t border-zinc-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Hours</h3>
                    <p className="mt-1 text-zinc-600">Monday - Friday: 9am - 5pm</p>
                    <p className="mt-1 text-zinc-600">Saturday: 10am - 4pm</p>
                    <p className="mt-1 text-zinc-600">Sunday: Closed</p>
                  </div>
                  <div className="border-t border-zinc-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Contact</h3>
                    <p className="mt-1 text-zinc-600">Email: akash.koppa@epfl.ch</p>
                    <p className="mt-1 text-zinc-600">Phone: +1 23494 34993</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
