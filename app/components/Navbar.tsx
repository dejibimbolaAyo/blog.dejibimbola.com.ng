'use client'

import Image from 'next/image'
import { MenuItems } from '../models/MenuItem'
import HamburgerMenu from './HamburgerMenu'
import DarkModeToggle from './DarkModeTogle'

const Navbar: React.FC = () => {
  const menuItems: MenuItems = [
    { name: 'Home', link: '/' },
    { name: 'Portfolio', link: 'https://dejibimbola.com', external: true, icon: '→' },
  ]

  return (
    <nav className="bg-white dark:bg-neutral-900 shadow-lg dark:shadow-neutral-950 dark:shadow-sm top-0 z-50">
      <div className="container mx-auto lg:px-16 px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <a href="/">
              <Image
                src="/images/dejibimbola_lg_black.png"
                height={32}
                width={150}
                alt="Logo"
                className="dark:hidden"
              />
              <Image
                src="/images/dejibimbola_lg_white.png"
                height={32}
                width={150}
                alt="Logo"
                className="hidden dark:block"
              />
            </a>
          </div>
          <div className="flex gap-4">
            <div className="hidden md:flex">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target={item.external ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-100 px-4 transition-colors"
                >
                  {item.name} {item.icon}
                </a>
              ))}
            </div>
            <DarkModeToggle />
            <HamburgerMenu menuItems={menuItems} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
