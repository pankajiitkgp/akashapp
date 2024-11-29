import Image from '../Image'

interface Props {
  text: string,
  link: string,
  imgSrc: string
}

export const FigCaption = ({ text, link, imgSrc }: Props) => {
  return (
    <>
      <figure className="mt-8">
        <Image alt="" width={500} height={500} src={imgSrc} style={{ height: 'auto' }} className="aspect-video bg-gray-50 rounded-xl object-cover" />
        <figcaption className="flex gap-x-2 mt-4 text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-5 flex-none text-zinc-300">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
              clipRule="evenodd"
            ></path>
          </svg>
          {text}
          <a href={link}>{link}</a>
        </figcaption>
      </figure>
    </>
  )
}

export default FigCaption