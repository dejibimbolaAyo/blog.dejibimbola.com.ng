'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { MenuItems } from '../models/MenuItem'
import HamburgerMenu from './HamburgerMenu'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(!isOpen)
  const menuItems: MenuItems = [
    { name: 'Home', link: '/' },
    { name: 'Portfolio', link: 'https://dejibimbola.com', external: true, icon: '→' },
  ]

  const menu = (
    <li>
      <details>
        <summary>Parent</summary>
        <ul className="p-2 bg-base-100 rounded-t-none">
          <li>
            <a>Link 1</a>
          </li>
          <li>
            <a>Link 2</a>
          </li>
        </ul>
      </details>
    </li>
  )

  return (
    <nav className="bg-white shadow-lg top-0 z-50">
      <div className="container mx-auto lg:px-16 px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <a href="/">
              <Image src="/images/dejibimbola-logo.png" height={32} width={200} alt="Logo" />
            </a>
          </div>
          <div className="hidden md:flex">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target={item.external ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 px-4 transition-colors"
              >
                {item.name} {item.icon}
              </a>
            ))}
          </div>
          <HamburgerMenu menuItems={menuItems} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
