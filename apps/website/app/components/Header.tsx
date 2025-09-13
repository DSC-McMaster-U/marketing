'use client'
import Accordion, { AccordionItem } from '@/app/components/Accordion'
import Dropdown, { DropdownItem } from '@/app/components/Dropdown'
import { socialMedia } from '@/app/constants/socialMedia'
import Icon from '@/app/icon.svg'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiCalendar, FiMenu, FiStar, FiX } from 'react-icons/fi'

interface DropdownMenuProps {
  name: string
  links: {
    href: string
    label: string
    description: string
    icon: JSX.Element
  }[]
}

const DropdownMenu = ({ name, links }: DropdownMenuProps) => (
  <Dropdown name={name}>
    <ul className='flex flex-col'>
      {links.map((link, index) => (
        <li key={index}>
          <DropdownItem
            href={link.href}
            label={link.label}
            icon={link.icon}
            description={link.description}
          />
        </li>
      ))}
    </ul>
  </Dropdown>
)

interface AccordionMenuProps {
  name: string
  links: { href: string; label: string; icon: JSX.Element }[]
}

const AccordionMenu = ({ name, links }: AccordionMenuProps) => (
  <Accordion title={name}>
    {links.map((link, index) => (
      <AccordionItem
        key={index}
        href={link.href}
        label={link.label}
        icon={link.icon}
      />
    ))}
  </Accordion>
)

const SocialMediaIcons = () => (
  <div className='mx-auto flex flex-row items-center space-x-2 md:space-x-4'>
    {socialMedia.map((social, index) => (
      <Link
        key={index}
        href={social.href}
        target='_blank'
        className='text-black-00 hover:text-grey-700 dark:text-white-00 dark:bg-black-02 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white p-2 transition-colors duration-200 md:h-12 md:w-12 md:p-3'
      >
        {social.icon}
      </Link>
    ))}
  </div>
)

const Header = () => {
  const pathname = usePathname()
  const [isPopupOpen, setPopupOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? 'hidden' : ''
  }, [isPopupOpen])

  const navLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Events',
      links: [
        {
          href: '/events',
          label: 'All Events',
          description: 'Workshops, socials, and more',
          icon: <FiCalendar />,
        },
        {
          href: 'https://mac-a-thon.gdscmcmasteru.ca/',
          label: 'Mac-a-thon',
          description: 'Test your skills',
          icon: <FiStar />,
        },
      ],
    },
    { name: 'Newsletters', href: '/newsletters' },
    { name: 'Team', href: '/team' },
  ]

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className='flex w-full items-center justify-between p-1'>
        <div className='flex h-full flex-row items-center gap-x-8'>
          <Link href='/'>
            <Image
              src='/images/headerIcon.png'
              width={25}
              height={25}
              alt='Icon'
              className='h-6 w-auto'
            />
          </Link>
        </div>
        <div className='absolute left-1/2 hidden -translate-x-1/2 transform xl:flex'>
          <SocialMediaIcons />
        </div>
        <nav className='hidden flex-row text-base xl:flex'>
          <ul className='flex flex-row items-center justify-start'>
            {navLinks.map((navLink, index) => (
              <li
                key={index}
                className='text-black-00 dark:text-white-00 group relative cursor-default'
              >
                {navLink.links ? (
                  <div
                    className={`${pathname === '/events' ? 'dark:bg-black-03 rounded-2xl bg-white' : ''}`}
                  >
                    <DropdownMenu name={navLink.name} links={navLink.links} />
                  </div>
                ) : (
                  <Link
                    href={navLink.href}
                    className={`hover:text-grey-700 flex cursor-pointer items-center px-3 py-1 transition-colors duration-200 ${pathname === navLink.href ? 'dark:bg-black-03 rounded-2xl bg-white' : ''} `}
                  >
                    {navLink.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button
          tabIndex={0}
          role='button'
          aria-label='Close popup'
          onClick={() => setPopupOpen(true)}
          className='dark:text-white-00 hover:text-google-grey cursor-pointer transition-colors duration-200 xl:hidden'
        >
          <FiMenu className='h-6 w-6' />
        </button>
        {isPopupOpen && (
          <div className='bg-black-00 fixed inset-0 z-50 flex items-center justify-center bg-opacity-50'>
            <div className='bg-white-01 dark:bg-black-01 flex max-h-screen min-h-screen w-full flex-col gap-y-8 overflow-auto rounded-lg p-4'>
              <div className='flex items-center justify-between'>
                <Link href='/' onClick={() => setPopupOpen(false)}>
                  <Image src={Icon} alt='Icon' className='h-6 w-auto' />
                </Link>
                <button
                  role='button'
                  aria-label='Close popup'
                  onClick={() => setPopupOpen(false)}
                  className='text-black-00 dark:text-white-00 hover:text-grey-700 cursor-pointer transition-colors duration-200'
                >
                  <FiX className='h-6 w-6' />
                </button>
              </div>
              <nav>
                <ul className='flex flex-col'>
                  {navLinks.map((navLink, index) => (
                    <li key={index} className='group'>
                      {navLink.links ? (
                        <AccordionMenu
                          name={navLink.name}
                          links={navLink.links}
                        />
                      ) : (
                        navLink.href && (
                          <Link
                            href={navLink.href}
                            className='hover:text-grey-700 flex cursor-pointer items-center py-1 transition-colors duration-200'
                          >
                            {navLink.name}
                          </Link>
                        )
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <SocialMediaIcons />
            </div>
          </div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
