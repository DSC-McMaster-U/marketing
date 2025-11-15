import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './icon.svg'

export default function NotFound() {
  return (
    <>
      <main className='flex min-h-screen items-center justify-center py-12'>
        <Card className='border-border/50 w-full max-w-lg shadow-sm'>
          <CardContent className='flex flex-col items-center gap-6 py-10'>
            <h1 className='text-3xl font-semibold tracking-tight'>
              Page Not Found
            </h1>
            <p className='text-muted-foreground max-w-md'>
              Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>

            <Separator className='my-4 w-1/2' />

            <Image
              src={Logo}
              alt='GDG McMaster Logo'
              className='h-auto w-40 opacity-90'
              priority
            />

            <Button asChild size='lg' className='mt-6'>
              <Link href='/'>Go to Main Page</Link>
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </>
  )
}
