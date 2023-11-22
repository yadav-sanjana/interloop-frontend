import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/landingPage/NavBar'
import NavMenu from './components/landingPage/NavMenu'
import Footer from './components/footer'
import Preloader from './components/Preloader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interloop',
  description: 'Application that caters all consultings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mx-auto'>
          <Preloader />
          <NavBar />
          <NavMenu />
          {children}
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
