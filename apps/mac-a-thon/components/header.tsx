'use client'

import BracketIcon from '@/components/assets/bracket-icon'
import MLHTrustBadge from '@/components/assets/mlh-trust-badge'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { SiIconFromName } from '@/utils/icon'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const pageSections = [
    { title: 'About', href: '#about' },
    // { title: 'Speakers', href: '#speakers' },
    { title: 'Statistics', href: '#statistics' },
    { title: 'Sponsors', href: '#sponsors' },
    { title: 'FAQ', href: '#faq' },
  ]

  const socialMedia = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/gdgmcmaster/',
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
        className='fixed top-4 z-50 hidden w-full px-4 md:block'
        data-testid='header'
      >
        <div className='bg-[#e0e0e0] border-border/40 bg-background/70 relative mx-auto flex h-12 max-w-7xl items-center justify-between gap-x-10 rounded-full border border-black/80 px-4 py-3 sm:px-6 lg:px-8'>
          {/* Nav Menu */}
          <NavigationMenu>
            <NavigationMenuList className='flex gap-x-6'>
              <NavigationMenuItem key={'#home'} className='pr-4'>
                <NavigationMenuLink asChild>
                  <Link href='#hero' className='flex items-center'>
                    <BracketIcon className='h-5 w-auto' />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {pageSections.map((section) => (
                <NavigationMenuItem key={section.href}>
                  <NavigationMenuLink asChild>
                    <Link href={section.href}>{section.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Social Links */}
          <div
            className='header-desktop-mlh-margin flex items-center gap-x-3 pr-4'
            aria-label='Social Media'
          >
            {socialMedia.map((media) => (
              <Link
                key={media.name}
                href={media.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={media.name}
              >
                <SiIconFromName icon={media.icon} className='h-5 w-5' />
              </Link>
            ))}
            <div className='absolute -top-4 right-4 flex w-[10%] min-w-[60px] max-w-[100px] items-start justify-start'>
              <MLHTrustBadge />
            </div>
          </div>
        </div>
      </header>

      {/* ---------------- MOBILE HEADER (SHADCN SHEET) ---------------- */}
      <header className='fixed z-50 w-full p-4 md:hidden'>
        {/* Left: Menu Button */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <button
              aria-label='Open menu'
              className='border-border/30 bg-background/60 rounded-full border p-2 backdrop-blur-sm'
              onClick={() => setMenuOpen(true)}
            >
              <MdMenu size={24} />
            </button>
          </SheetTrigger>

          <SheetContent side='left' className='w-72 px-6'>
            {/* Logo */}
            <Link
              href='#hero'
              onClick={() => setMenuOpen(false)}
              className='mb-6 flex items-center'
            >
              <BracketIcon className='h-5 w-auto' />
            </Link>

            {/* Nav Links */}
            <nav className='flex flex-col gap-y-5'>
              {pageSections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  onClick={() => setMenuOpen(false)}
                  className='text-foreground/80 hover:text-primary text-base font-medium transition-colors'
                >
                  {section.title}
                </Link>
              ))}
            </nav>

            {/* Social Media */}
            <div className='mt-8 flex gap-x-4'>
              {socialMedia.map((media) => (
                <Link
                  key={media.name}
                  href={media.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={media.name}
                  onClick={() => setMenuOpen(false)}
                  className='text-foreground/70 hover:text-primary transition-colors'
                >
                  <SiIconFromName icon={media.icon} className='h-6 w-6' />
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className='fixed right-4 top-0 flex w-[10%] min-w-[60px] max-w-[100px]'>
          <MLHTrustBadge />
        </div>
      </header>
    </>
  )
}
