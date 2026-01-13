'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isVisible, setIsVisible] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <>
      <Navbar />
      
      <div className="pt-20 sm:pt-24 md:pt-28">

        {/* Hero Banner */}
        <section className="relative h-32 sm:h-36 md:h-40 lg:h-48 overflow-hidden" style={{ background: 'linear-gradient(to right, #89FF9F, #73C7E3)' }}>
          <div className="flex items-center justify-center h-full px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white uppercase tracking-widest hover:scale-110 transition-transform duration-500 animate-fade-in">
              CONTACT US
            </h1>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section 
          id="contact-section"
          data-animate
          className={`py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50 transition-all duration-700 ${
            isVisible['contact-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
              
              {/* Left - Contact Form */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-2 hover:text-[#059669] transition-colors duration-300">
                    Get In Touch
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We'd love to hear from you. Send us a message!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 transition-all duration-300 text-sm sm:text-base focus:border-[#89FF9F] focus:ring-4 focus:ring-[#89FF9F]/20 outline-none"
                    />
                  </div>
                  
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 transition-all duration-300 text-sm sm:text-base focus:border-[#89FF9F] focus:ring-4 focus:ring-[#89FF9F]/20 outline-none"
                    />
                  </div>
                  
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      rows="5"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg resize-none text-gray-900 placeholder:text-gray-400 transition-all duration-300 text-sm sm:text-base focus:border-[#89FF9F] focus:ring-4 focus:ring-[#89FF9F]/20 outline-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-white py-2.5 sm:py-3 rounded-lg font-bold transition-all duration-300 text-sm sm:text-base md:text-lg hover:scale-105 hover:shadow-xl active:scale-95 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    style={{ background: 'linear-gradient(135deg, #89FF9F, #73C7E3)' }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin">⏳</span>
                        SENDING...
                      </span>
                    ) : (
                      'SUBMIT'
                    )}
                  </button>
                </form>
              </div>

              {/* Right - Map & Contact Info */}
              <div className="space-y-6 sm:space-y-8">
                
                {/* Map */}
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center py-3 sm:py-4 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300" style={{ color: '#059669' }}>
                    Our Location 📍
                  </h3>
                  <div className="h-56 sm:h-64 md:h-72 overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2555805833286!2d78.49847!3d17.44629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1c6e8b8b8b%3A0x1c6e8b8b8b8b8b8b!2sWest%20Marredpally%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="group-hover:scale-105 transition-transform duration-700"
                    ></iframe>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-4 sm:space-y-6">
                  
                  {/* Address */}
                  <div className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #89FF9F, #73C7E3)' }}>
                      <span className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300">📍</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-1 group-hover:text-[#059669] transition-colors duration-300">Address</h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        4-14-142, Samrat Colony, West Marredpally, Secunderabad, TS - 26
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #89FF9F, #73C7E3)' }}>
                      <span className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300">✉️</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-1 group-hover:text-[#059669] transition-colors duration-300">Mail Us</h4>
                      <a 
                        href="mailto:info@nutripeak.in" 
                        className="text-gray-600 hover:text-[#89FF9F] transition-all duration-300 text-sm sm:text-base break-all inline-block hover:translate-x-2"
                      >
                        info@nutripeak.in
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #89FF9F, #73C7E3)' }}>
                      <span className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300">📞</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-1 group-hover:text-[#059669] transition-colors duration-300">Telephone</h4>
                      <a 
                        href="tel:+917675040885" 
                        className="text-gray-600 hover:text-[#89FF9F] transition-all duration-300 text-sm sm:text-base inline-block hover:translate-x-2"
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
