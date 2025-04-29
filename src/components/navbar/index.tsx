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
            src="/sito-logo.png"
            alt="Sito Logo"
            width={80}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/meal-plan" 
            className="text-gray-700 hover:text-gray-900"
          >
            Buy a Meal Plan
          </Link>
          <Link 
            href="/consultation" 
            className="text-orange-500 border border-orange-500 rounded-full px-6 py-2 hover:bg-orange-50"
          >
            Consult a Dietitian
          </Link>
          <Link 
            href="/meal-kit" 
            className="bg-orange-500 text-white rounded-full px-6 py-2 hover:bg-orange-600"
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white p-6 shadow-lg md:hidden flex flex-col gap-4">
            <Link 
              href="/meal-plan" 
              className="text-gray-700 hover:text-gray-900 py-2"
            >
              Buy a Meal Plan
            </Link>
            <Link 
              href="/consultation" 
              className="text-orange-500 border border-orange-500 rounded-full px-6 py-2 text-center hover:bg-orange-50"
            >
              Consult a Dietitian
            </Link>
            <Link 
              href="/meal-kit" 
              className="bg-orange-500 text-white rounded-full px-6 py-2 text-center hover:bg-orange-600"
            >
              Order a Meal Kit
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}