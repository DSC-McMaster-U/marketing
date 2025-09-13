import { SiDiscord, SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

export interface SocialMedia {
  name: string
  href: string
  icon: JSX.Element
}

export const socialMedia = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/gdscmcmasteru/',
    icon: <SiInstagram className='h-full min-h-6 w-full' />,
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/gdscmcmasteru',
    icon: <SiDiscord className='h-full min-h-6 w-full' />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/gdscmcmasteru/',
    icon: <SiLinkedin className='h-full min-h-6 w-full' />,
  },
  {
    name: 'Github',
    href: 'https://github.com/DSC-McMaster-U/',
    icon: <SiGithub className='h-full min-h-6 w-full' />,
  },
]
