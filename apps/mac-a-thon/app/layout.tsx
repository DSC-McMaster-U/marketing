import '@/app/globals.css'
import type { Metadata } from 'next'
import { Original_Surfer, Work_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Mac-a-thon | GDSC McMaster U',
  description: 'Mac-a-thon is an annual hackathon hosted by GDSC McMaster U.',
  icons: [{ url: '/icon.svg' }],
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
      {/* Work Sans applies globally; Surfer available via Tailwind */}
      <body className={`${worksans.variable} ${surfer.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
