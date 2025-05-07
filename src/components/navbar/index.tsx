'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white py-4 px-6 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="cookedindoors Logo"
            width={50}
            height={50}
            // className='w-auto'
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="#" 
            className="text-primary"
          >
            Buy a Meal Plan
          </Link>
          <Link 
            href="#" 
            className="text-primary border border-primary rounded-md px-6 py-2 hover:bg-primary/10"
          >
            Consult a Dietitian
          </Link>
          <Link 
            href="https://cookedindoors.bumpa.shop" 
            className="bg-primary text-white rounded-md px-6 py-2 hover:bg-primary/90"
          >
            Order a Meal Kit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="blue" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="blue" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white p-6 shadow-lg md:hidden flex flex-col gap-4">
            <Link 
              href="#" 
              className="text-primary font-medium py-2"
            >
              Buy a Meal Plan
            </Link>
            <Link 
              href="#" 
              className="text-primary border border-primary rounded-md px-6 py-2 hover:bg-primary/10"
            >
              Consult a Dietitian
            </Link>
            <Link 
              href="https://cookedindoors.bumpa.shop" 
              className="bg-primary text-white rounded-md px-6 py-2 hover:bg-primary/90"
            >
              Order a Meal Kit
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}