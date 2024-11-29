import Image from './Image'
import Link from './Link'

const ResearchCard = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        const { title, summary, images, path } = post
        return (
          <li className='h-full' key={title}>

            <div className="flex flex-col my-6 overflow-hidden shadow-sm rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <Link href={`/${path}`}>
                  <Image
                    alt={title}
                    src={images}
                    className="w-full"
                    fill={true}
                  />
                </Link>
              </div>
              <div className="p-4">
                <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                  <Link href={`/${path}`} aria-label={`Link to ${title}`} className='text-gray-900 dark:text-gray-100'>{title}</Link>
                </h2>
                <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                  {summary}
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link
                  href={`/${path}`}
                  className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" type="button"
                  aria-label={`Link to ${title}`}
                >
                  Learn more &rarr;
                </Link>
              </div>
            </div>
          </li>
        )
      })}
    </>
  )
}

export default ResearchCard