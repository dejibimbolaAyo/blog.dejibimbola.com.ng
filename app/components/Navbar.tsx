'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(!isOpen)

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
            <a href="/" className="text-gray-700 hover:text-gray-900 px-4">
              Home
            </a>
            <a href="https://dejibimbola.com" className="text-gray-700 hover:text-gray-900 px-4">
              Portfolio &#8594;
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleIsOpen}>
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
            </button>
            {isOpen && <ul>{menu}</ul>}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
