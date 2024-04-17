import { Inter } from 'next/font/google'
import cx from 'classnames'
import './css/globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { ThemeProvider } from './providers/themeProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cx(inter.className, 'bg-white dark:bg-neutral-900')}>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
