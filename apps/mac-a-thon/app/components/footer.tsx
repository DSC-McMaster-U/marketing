import BracketIcon from '@/assets/branding/BracketIcon.svg'
import { SiIconFromName } from '@/utils/icon'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const socialMedia = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/gdscmcmasteru/',
      icon: 'SiInstagram',
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/XtYqWmJmh7',
      icon: 'SiDiscord',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/gdscmcmasteru/',
      icon: 'SiLinkedin',
    },
  ]

  return (
    <footer data-testid='footer'>
      <div className='group flex cursor-default items-center justify-center py-4 text-center sm:py-8'>
        <p>
          Made with{' '}
          <span className='transition-colors duration-500 group-hover:text-pink-500'>
            ♥
          </span>{' '}
          by your GDSC McMaster Team
        </p>
      </div>
      <nav className='border-google-grey flex w-full flex-row items-center justify-between border-t-2 py-8'>
        <div className='flex flex-row'>
          <Link
            href='https://gdscmcmasteru.ca'
            className='flex h-fit w-fit min-w-10 items-center'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={BracketIcon}
              alt='GDSC Bracket Icon'
              className='h-5 w-auto'
            />
          </Link>
          <ul className='ml-3 flex flex-row gap-x-2 sm:ml-6 sm:gap-x-4'>
            {socialMedia.map((media) => (
              <li key={media.name}>
                <Link
                  href={media.url}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-google-orange flex items-center transition-colors duration-300'
                >
                  <SiIconFromName icon={media.icon} className='h-5 w-auto' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='pl-2 text-right sm:pl-0'>
          <p>© 2024 GDSC McMaster University</p>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
