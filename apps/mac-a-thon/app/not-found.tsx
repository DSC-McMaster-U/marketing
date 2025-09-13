import Footer from '@/app/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './/icon.svg'

export default function NotFound() {
  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <main className='flex flex-grow flex-col items-center justify-center p-8 text-center'>
          <div className='max-w-2xl'>
            <h1 className='mb-12 text-4xl font-bold'>Page Not Found</h1>
            <p className='mb-12 text-lg text-gray-600'>
              Oops! The page you are looking for doesn’t exist or has been
              moved.
            </p>
            <div className='mb-20 flex justify-center'>
              <Image src={Logo} alt='' className='h-auto w-full max-w-md' />
            </div>
            <Link
              href='/'
              className='btn btn-primary rounded-2xl bg-slate-100 p-4'
            >
              Go to Main Page
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
