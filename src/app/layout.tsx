import type { Metadata } from 'next'
import { Work_Sans, Montserrat } from 'next/font/google'
import './globals.css'

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dana Melton Photography',
  description: 'A unique eye',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={`${workSans.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
