'use client'
import BracketIcon from '@/assets/branding/BracketIcon.svg'
import { SiIconFromName } from '@/utils/icon'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const pageSections = [
    { title: 'About', href: 'about' },
    { title: 'Sponsors', href: 'sponsors' },
    { title: 'FAQ', href: 'faq' },
  ]

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

  // Disable background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.setAttribute('data-menu-open', 'true')
    } else {
      document.body.style.overflow = 'auto'
      document.body.removeAttribute('data-menu-open')
    }
    return () => {
      document.body.style.overflow = 'auto' // Cleanup on unmount
      document.body.removeAttribute('data-menu-open')
    }
  }, [menuOpen])

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <>
      {/* Desktop Header */}
      <header
        data-testid='header'
        className='bg-google-grey fixed left-0 right-0 top-8 z-50 hidden mx-8 flex-row items-center justify-between rounded-full border-opacity-10 bg-opacity-10 px-8 py-2 backdrop-blur md:flex'
      >
        <Link href='#hero' className='flex h-fit w-fit items-center'>
          <Image
            src={BracketIcon}
            alt='GDSC Bracket Icon'
            className='h-5 w-auto min-w-8'
          />
        </Link>

        {/* Main Navigation */}
        <nav aria-label='Main Navigation' className='flex flex-1 ml-8 md:ml-12 lg:ml-16'>
          <ul className='flex h-full flex-row items-center gap-x-8'>
            {pageSections.map((section) => (
              <li key={section.href}>
                <Link
                  href={`#${section.href}`}
                  className='hover:text-google-orange cursor-pointer whitespace-nowrap text-lg transition-colors duration-300'
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Links */}
        <nav aria-label='Social Media' className='flex h-fit w-fit gap-x-4'>
          <ul className='flex flex-row gap-x-4'>
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
        </nav>
      </header>

      {/* Mobile Header */}
      <header
        data-testid='header'
        className='fixed inset-0 z-50 h-fit text-center md:hidden'
      >
        {menuOpen ? (
          <div
            className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-white'
            aria-hidden={!menuOpen}
          >
            <button
              onClick={handleMenuToggle}
              aria-label='Close menu'
              className='bg-google-grey absolute left-4 top-4 rounded-full bg-opacity-10 p-1'
            >
              <MdClose size={24} />
            </button>
            <nav className='flex flex-col items-center gap-y-6'>
              <Link
                href='#hero'
                onClick={handleMenuToggle}
                className='flex h-fit w-fit items-center'
              >
                <Image
                  src={BracketIcon}
                  alt='GDSC Bracket Icon'
                  className='h-6 w-auto'
                />
              </Link>
              {pageSections.map((section) => (
                <Link
                  key={section.href}
                  href={`#${section.href}`}
                  onClick={handleMenuToggle}
                  className='hover:text-google-orange text-lg font-medium text-gray-800 transition-colors'
                >
                  {section.title}
                </Link>
              ))}
            </nav>
            <div className='mt-8 flex gap-x-4'>
              {socialMedia.map((media) => (
                <Link
                  key={media.name}
                  href={media.url}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-google-orange text-gray-800'
                >
                  <SiIconFromName icon={media.icon} className='h-6 w-6' />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <button
            onClick={handleMenuToggle}
            aria-label='Open menu'
            className='bg-google-grey absolute left-4 top-4 rounded-full bg-opacity-10 p-1'
          >
            <MdMenu size={24} />
          </button>
        )}
      </header>
    </>
  )
}

export default Header
