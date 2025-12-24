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

  const isActive = (path) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Contact Bar - Responsive */}
      <div 
        className={`text-black transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
        }`}
        style={{ background: 'linear-gradient(to right, #73C7E3, #89FF9F)' }}
      >
        <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-1.5 sm:py-2 flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm">
          <a href="mailto:info@nutripeak.in" className="flex items-center gap-1 sm:gap-2 hover:text-black transition">
            <span>✉</span>
            <span className="truncate">info@nutripeak.in</span>
          </a>
          <a href="tel:+917675040885" className="flex items-center gap-1 sm:gap-2 hover:text-black transition">
            <span>📞</span>
            <span>+91 7675040885</span>
          </a>
        </div>
      </div>

      {/* Main Navigation - Responsive */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24">
            {/* Logo - Responsive */}
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Nutripeak" 
                className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto" 
              />
            </Link>

            {/* Desktop Menu - Hidden on mobile */}
            <div className="hidden md:flex lg:gap-6 xl:gap-8 2xl:gap-10 items-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors relative text-sm lg:text-base xl:text-lg ${
                    isActive(link.href) ? '' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  style={isActive(link.href) ? { color: '#89FF9F' } : {}}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5" style={{ backgroundColor: '#89FF9F' }}></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 z-50"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gray-800 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu - Responsive */}
          {isOpen && (
            <div className="md:hidden pb-4 sm:pb-6 border-t border-gray-200">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 sm:py-3 font-medium transition-colors text-sm sm:text-base ${
                    isActive(link.href) ? '' : 'text-gray-700 hover:text-gray-900'
                  }`}
                  style={isActive(link.href) ? { color: '#89FF9F' } : {}}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
