'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 items-center'>
      <Separator />
      <div className='container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row'>
        <div className='flex flex-row gap-2'>
          <Button variant='secondary'>
            <Link
              href='https://mlh.io/privacy'
              target='_blank'
              rel='noopener noreferrer'
            >
              Privacy Policy
            </Link>
          </Button>
          <Button variant='secondary'>
            <Link
              href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md'
              target='_blank'
              rel='noopener noreferrer'
            >
              Code of Conduct{' '}
            </Link>
          </Button>
        </div>
        <div className='order-first w-full text-center sm:order-none sm:w-auto'>
          <p className='text-sm'>
            {' '}
            Made with<span className='text-google-mediumRed'>❤️</span>
            by{' '}
            <Button variant='link' className='px-0 text-sm font-normal' asChild>
              <Link
                href='https://gdgmcmaster.ca'
                target='_blank'
                rel='noopener noreferrer'
              >
                GDG McMasterU M&amp;B Team
              </Link>
            </Button>
          </p>
        </div>
        <p className='text-sm'>
          {' '}
          © {new Date().getFullYear()} GDG McMaster University{' '}
        </p>
      </div>
    </footer>
  )
}
export default Footer
