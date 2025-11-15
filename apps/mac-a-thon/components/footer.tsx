'use client'

import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <Separator />

      <div className='container mx-auto flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row'>
        {/* Left: Privacy & Code of Conduct */}
        <div className='flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-4'>
          <Link
            href='https://mlh.io/privacy'
            target='_blank'
            rel='noopener noreferrer'
            className={cn(
              buttonVariants({ variant: 'link' }),
              'px-0 text-sm font-normal',
            )}
          >
            Privacy Policy
          </Link>

          <Link
            href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md'
            target='_blank'
            rel='noopener noreferrer'
            className={cn(
              buttonVariants({ variant: 'link' }),
              'px-0 text-sm font-normal',
            )}
          >
            Code of Conduct
          </Link>
        </div>

        {/* Center: Made with Love */}
        <div className='order-first w-full text-center sm:order-none sm:w-auto'>
          <p className='text-sm'>
            Made with <span className='text-pink-500'>❤️</span> by{' '}
            <Link
              href='https://gdgmcmaster.ca'
              target='_blank'
              rel='noopener noreferrer'
              className={cn(
                buttonVariants({ variant: 'link' }),
                'px-0 text-sm font-normal',
              )}
            >
              GDG McMasterU M&amp;B Team
            </Link>
          </p>
        </div>

        {/* Right: Copyright */}
        <p className='text-sm'>
          © {new Date().getFullYear()} GDG McMaster University
        </p>
      </div>
    </footer>
  )
}

export default Footer
