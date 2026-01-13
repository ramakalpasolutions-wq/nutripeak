'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact Us' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const isActive = (path) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Contact Bar */}
      <div 
        className={`text-black transition-all duration-500 ${
          isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
        }`}
        style={{ background: 'linear-gradient(to right, #73C7E3, #89FF9F)' }}
      >
        <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-1.5 sm:py-2 flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm">
          <a 
            href="mailto:info@nutripeak.in" 
            className="flex items-center gap-1 sm:gap-2 hover:text-white transition-all duration-300 hover:scale-105 group"
          >
            <span className="group-hover:rotate-12 transition-transform duration-300">✉</span>
            <span className="truncate">info@nutripeak.in</span>
          </a>
          <a 
            href="tel:+917675040885" 
            className="flex items-center gap-1 sm:gap-2 hover:text-white transition-all duration-300 hover:scale-105 group"
          >
            <span className="group-hover:rotate-12 transition-transform duration-300">📞</span>
            <span>+91 7675040885</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-xl' : 'bg-white shadow-md'}`}>
        <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="Nutripeak" 
                className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto transition-transform duration-500 group-hover:scale-110" 
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex lg:gap-6 xl:gap-8 2xl:gap-10 items-center">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-all duration-300 relative text-sm lg:text-base xl:text-lg group hover:scale-110 ${
                    isActive(link.href) ? 'scale-110' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  style={isActive(link.href) ? { color: '#89FF9F' } : {}}
                >
                  {link.label}
                  {/* Active underline */}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ backgroundColor: isActive(link.href) ? '#89FF9F' : '#73C7E3' }}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - Animated Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
              aria-label="Toggle menu"
            >
              <span 
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-8'
                }`}
              ></span>
              <span 
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'group-hover:w-5'
                }`}
              ></span>
              <span 
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-7'
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pb-4 sm:pb-6 border-t border-gray-200 pt-4 space-y-1">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 sm:py-3 px-4 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base transform hover:translate-x-2 hover:bg-gray-50 ${
                    isActive(link.href) ? 'bg-gray-50' : 'text-gray-700 hover:text-gray-900'
                  }`}
                  style={isActive(link.href) ? { 
                    color: '#89FF9F',
                    borderLeft: '4px solid #89FF9F'
                  } : {}}
                >
                  <span className="flex items-center gap-2">
                    <span className={`transform transition-transform duration-300 ${
                      isActive(link.href) ? 'translate-x-2' : ''
                    }`}>
                      {isActive(link.href) ? '→' : ''}
                    </span>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  )
}
