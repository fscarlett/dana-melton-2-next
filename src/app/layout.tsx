import type { Metadata } from 'next'
import { Work_Sans, Montserrat } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dana Melton Photography | A unique eye',
  description:
    'Photographic works with a timeless structure and beautifully minimal aesthetic',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={`${workSans.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
