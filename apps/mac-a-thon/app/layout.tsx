import '@/app/globals.css'
import { TooltipProvider } from '@/components/ui/tooltip'
import type { Metadata } from 'next'
import { Original_Surfer, Work_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Mac-a-thon | GDG McMaster U',
  description: 'Mac-a-thon is an annual hackathon hosted by GDG McMaster U.',
  icons: {
    icon: [
      { url: '/assets/icon.ico' },
      { url: '/assets/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/assets/apple-icon.png', sizes: '180x180' }],
  },
}

// Load both fonts — Work Sans as default, Surfer as secondary
const worksans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-work-sans',
})

const surfer = Original_Surfer({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-original-surfer',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <TooltipProvider delayDuration={200}>
        {/* Work Sans applies globally; Surfer available via Tailwind */}
        <body className={`${worksans.variable} ${surfer.variable} font-body`}>
          {children}
        </body>
      </TooltipProvider>
    </html>
  )
}
