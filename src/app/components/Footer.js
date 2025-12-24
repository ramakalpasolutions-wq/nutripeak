'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(135deg, #73C7E3, #89FF9F)' }}>
      
      {/* Top Section - Fully Responsive */}
      <div className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* Logo - Responsive */}
            <div className="flex-shrink-0 order-1 lg:order-1">
              <img src="/logo.png" alt="Nutripeak" className="h-24 sm:h-32 md:h-36 lg:h-40 xl:h-48 w-auto brightness-0" />
            </div>

            {/* JOIN US Form - Responsive */}
            <div className="flex-1 w-full max-w-2xl order-3 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center" style={{ color: '#ffffff' }}>JOIN US</h2>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-full overflow-hidden shadow-xl">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  required
                  className="flex-1 px-6 sm:px-8 py-4 sm:py-5 text-gray-800 text-base sm:text-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-8 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg text-white transition"
                  style={{ background: 'linear-gradient(135deg, #89FF9F, #73C7E3)' }}
                  onMouseOver={(e) => e.target.style.opacity = '0.9'}
                  onMouseOut={(e) => e.target.style.opacity = '1'}
                >
                  Join Us
                </button>
              </form>
            </div>

            {/* Social Media Icons - Responsive */}
            <div className="flex gap-2 sm:gap-3 flex-shrink-0 order-2 lg:order-3">
              <a href="#" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black rounded-xl flex items-center justify-center hover:bg-gray-800 transition">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl flex items-center justify-center hover:opacity-90 transition">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Border Line */}
      <div className="border-t border-white/20"></div>

      {/* Main Footer Content - Responsive */}
      <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          
          {/* Left Column - Why People Like us */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Why People Like us!</h3>
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              We blend scientific innovation with the wisdom of nature to develop cutting-edge nutraceutical formulations.
            </p>
            <Link href="/about" className="inline-block text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base transition" style={{ backgroundColor: '#ffffff' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f0fdf4'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#ffffff'}
            >
              Read More
            </Link>
          </div>

          {/* Middle Column - Pages */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Pages</h3>
            <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg md:text-xl">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'Products' },
                { href: '/contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/90 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Contact</h3>
            <div className="space-y-3 sm:space-y-4 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                <strong className="block mb-1">Address:</strong>
                4-14-142, Samrat Colony, West Marredpally, Secunderabad, TS - 26
              </p>
              <p>
                <strong className="block mb-1">Email:</strong>
                <a href="mailto:info@nutripeak.in" className="hover:text-white transition break-all">
                  info@nutripeak.in
                </a>
              </p>
              <p>
                <strong className="block mb-1">Phone:</strong>
                <a href="tel:+917675040885" className="hover:text-white transition">
                  +91 7675040885
                </a>
              </p>
              
              {/* Payment Methods - Responsive */}
              <div className="pt-3 sm:pt-4">
                <p className="font-bold mb-2 sm:mb-3">Payment Accepted</p>
                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  <div className="w-14 h-10 sm:w-16 sm:h-11 bg-blue-700 rounded-md flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xs">VISA</span>
                  </div>
                  <div className="w-14 h-10 sm:w-16 sm:h-11 bg-orange-500 rounded-md flex items-center justify-center shadow-md">
                    <div className="flex gap-0.5">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                    </div>
                  </div>
                  <div className="w-14 h-10 sm:w-16 sm:h-11 bg-red-600 rounded-md flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xs">MAESTRO</span>
                  </div>
                  <div className="w-14 h-10 sm:w-16 sm:h-11 bg-blue-800 rounded-md flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xs">PayPal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Responsive */}
      <div className="border-t border-white/20 py-3 sm:py-4">
        <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <p className="text-white/80 text-xs sm:text-sm md:text-base">
            &copy; 2025 Nutripeak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
