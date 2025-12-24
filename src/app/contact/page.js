'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <Navbar />
      
      <div className="pt-20 sm:pt-24 md:pt-28">

        {/* Hero Banner - Responsive */}
        <section className="relative h-32 sm:h-36 md:h-40 lg:h-48 overflow-hidden" style={{ background: 'linear-gradient(to right, #89FF9F, #73C7E3)' }}>
          <div className="flex items-center justify-center h-full px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white uppercase tracking-widest">
              CONTACT US
            </h1>
          </div>
        </section>

        {/* Contact Form & Map Section - Fully Responsive */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
              
              {/* Left - Contact Form - Responsive */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 transition text-sm sm:text-base"
                      style={{ outline: 'none' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#89FF9F'
                        e.target.style.boxShadow = '0 0 0 3px rgba(137, 255, 159, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 transition text-sm sm:text-base"
                      style={{ outline: 'none' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#89FF9F'
                        e.target.style.boxShadow = '0 0 0 3px rgba(137, 255, 159, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      rows="5"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg resize-none text-gray-900 placeholder:text-gray-400 transition text-sm sm:text-base"
                      style={{ outline: 'none' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#89FF9F'
                        e.target.style.boxShadow = '0 0 0 3px rgba(137, 255, 159, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db'
                        e.target.style.boxShadow = 'none'
                      }}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full text-white py-2.5 sm:py-3 rounded-lg font-bold transition text-sm sm:text-base md:text-lg"
                    style={{ background: 'linear-gradient(135deg, #89FF9F, #73C7E3)' }}
                    onMouseOver={(e) => {
                      e.target.style.opacity = '0.9'
                      e.target.style.transform = 'translateY(-2px)'
                      e.target.style.boxShadow = '0 4px 12px rgba(137, 255, 159, 0.3)'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.opacity = '1'
                      e.target.style.transform = 'translateY(0)'
                      e.target.style.boxShadow = 'none'
                    }}
                  >
                    SUBMIT
                  </button>
                </form>
              </div>

              {/* Right - Map & Contact Info - Responsive */}
              <div className="space-y-6 sm:space-y-8">
                
                {/* Map - Responsive */}
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center py-3 sm:py-4 bg-gray-50" style={{ color: '#059669' }}>
                    Our Location
                  </h3>
                  <div className="h-56 sm:h-64 md:h-72">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2555805833286!2d78.49847!3d17.44629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1c6e8b8b8b%3A0x1c6e8b8b8b8b8b8b!2sWest%20Marredpally%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                {/* Contact Details - Responsive */}
                <div className="space-y-4 sm:space-y-6">
                  
                  {/* Address */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #89FF9F, #73C7E3)' }}>
                      <span className="text-xl sm:text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-1">Address</h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        4-14-142, Samrat Colony, West Marredpally, Secunderabad, TS - 26
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #89FF9F, #73C7E3)' }}>
                      <span className="text-xl sm:text-2xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-1">Mail Us</h4>
                      <a href="mailto:info@nutripeak.in" className="text-gray-600 transition text-sm sm:text-base break-all"
                        onMouseOver={(e) => e.target.style.color = '#89FF9F'}
                        onMouseOut={(e) => e.target.style.color = '#4b5563'}
                      >
                        info@nutripeak.in
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #89FF9F, #73C7E3)' }}>
                      <span className="text-xl sm:text-2xl">📞</span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-1">Telephone</h4>
                      <a href="tel:+917675040885" className="text-gray-600 transition text-sm sm:text-base"
                        onMouseOver={(e) => e.target.style.color = '#89FF9F'}
                        onMouseOut={(e) => e.target.style.color = '#4b5563'}
                      >
                        +91 7675040885
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}
