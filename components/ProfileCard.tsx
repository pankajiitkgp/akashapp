import Image from './Image'
import SocialIcon from '@/components/social-icons'

const ProfileCard = ({ name, position, avatar, email, linkedin, github, twitter }) => {
  return (
    <>
      <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center p-10">
          <div className="">
            <Image
              alt={name}
              src={avatar}
              width={200}
              height={200}
              className='w-24 h-24 mb-3 rounded-full shadow-lg'
            />
          </div>
          {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" /> */}
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{position}</span>

          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${email}`} size={6} />
            <SocialIcon kind="github" href={github} size={6} />
            <SocialIcon kind="linkedin" href={linkedin} size={6} />
            <SocialIcon kind="twitter" href={twitter} size={6} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard