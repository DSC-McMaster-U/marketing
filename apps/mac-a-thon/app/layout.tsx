import '@/app/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mac-a-thon | GDSC McMaster U',
  description: 'Mac-a-thon is an annual hackathon hosted by GDSC McMaster U.',
  icons: [
    {
      url: '/icon.svg',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
