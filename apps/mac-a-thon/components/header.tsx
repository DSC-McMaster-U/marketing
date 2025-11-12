'use client'

import BracketIcon from '@/assets/branding/BracketIcon.svg'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { SiIconFromName } from '@/utils/icon'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const pageSections = [
    { title: 'About', href: '#about' },
    { title: 'Speakers', href: '#speakers' },
    { title: 'Statistics', href: '#statistics' },
    { title: 'Sponsors', href: '#sponsors' },
    { title: 'FAQ', href: '#faq' },
  ]

  const socialMedia = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/gdgmcmasteru/',
      icon: 'SiInstagram',
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/XtYqWmJmh7',
      icon: 'SiDiscord',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/gdgmcmasteru/',
      icon: 'SiLinkedin',
    },
  ]

  // lock background scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  return (
    <>
      {/* ---------------- DESKTOP HEADER ---------------- */}
      <header
        className='fixed top-4 z-50 hidden w-full px-4 shadow-sm backdrop-blur-md md:block'
        data-testid='header'
      >
        <div className='border-border/40 bg-background/70 mx-auto flex max-w-7xl items-center justify-between gap-x-10 rounded-full border px-4 py-3 sm:px-6 lg:px-8'>
          {/* Logo */}
          <Link href='#hero' className='flex items-center'>
            <Image
              src={BracketIcon}
              alt='GDG McMaster Logo'
              className='h-5 w-auto'
              priority
            />
          </Link>

          {/* Nav Menu */}
          <NavigationMenu>
            <NavigationMenuList className='flex gap-x-6'>
              {pageSections.map((section) => (
                <NavigationMenuItem key={section.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={section.href}
                      className='text-foreground/80 hover:text-primary text-sm font-medium transition-colors'
                    >
                      {section.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Social Links */}
          <nav className='flex items-center gap-x-3' aria-label='Social Media'>
            {socialMedia.map((media) => (
              <Link
                key={media.name}
                href={media.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={media.name}
                className='text-foreground/70 hover:text-primary transition-colors'
              >
                <SiIconFromName icon={media.icon} className='h-5 w-5' />
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* ---------------- MOBILE HEADER ---------------- */}
      <header className='fixed inset-0 z-50 text-center md:hidden'>
        {menuOpen ? (
          <div
            className='bg-background text-foreground fixed inset-0 flex flex-col items-center justify-center'
            role='dialog'
            aria-modal='true'
          >
            <button
              onClick={() => setMenuOpen(false)}
              aria-label='Close menu'
              className='border-border/30 bg-background/60 absolute left-4 top-4 rounded-full border p-1 backdrop-blur-sm'
            >
              <MdClose size={24} />
            </button>

            <Link
              href='#hero'
              onClick={() => setMenuOpen(false)}
              className='mb-8 flex items-center'
            >
              <Image
                src={BracketIcon}
                alt='GDG McMaster Logo'
                className='h-6 w-auto'
              />
            </Link>

            <nav
              aria-label='Main Navigation'
              className='flex flex-col items-center gap-y-6'
            >
              {pageSections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  onClick={() => setMenuOpen(false)}
                  className='text-foreground/80 hover:text-primary text-lg font-medium transition-colors'
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
                  rel='noopener noreferrer'
                  aria-label={media.name}
                  className='text-foreground/70 hover:text-primary transition-colors'
                >
                  <SiIconFromName icon={media.icon} className='h-6 w-6' />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <button
            onClick={() => setMenuOpen(true)}
            aria-label='Open menu'
            className='border-border/30 bg-background/60 absolute left-4 top-4 rounded-full border p-1 backdrop-blur-sm'
          >
            <MdMenu size={24} />
          </button>
        )}
      </header>
    </>
  )
}
