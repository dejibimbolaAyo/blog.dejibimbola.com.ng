// DAISY-UI: Hamburger Menu
import React from 'react'
import { MenuItems } from '../models/MenuItem'

interface NavbarMenuProps {
  menuItems: MenuItems
}

const HamburgerMenu: React.FC<NavbarMenuProps> = ({ menuItems }) => {
  return (
    <div className="md:hidden dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-gray-100 w-52">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              target={item.external ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="menu-title text-gray-700 hover:bg-neutral-200 transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HamburgerMenu
