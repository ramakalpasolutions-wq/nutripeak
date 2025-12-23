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
      
      <div className="pt-28">

        {/* Hero Banner */}
        <section className="relative h-40 md:h-48 overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 via-orange-500 via-yellow-500 via-green-500 via-teal-500 to-blue-500">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-widest">
              CONTACT US
            </h1>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              
              {/* Left - Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 placeholder:text-gray-400"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none text-gray-900 placeholder:text-gray-400"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>

              {/* Right - Map & Contact Info */}
              <div className="space-y-8">
                
                {/* Map */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <h3 className="text-2xl font-bold text-yellow-500 text-center py-4 bg-gray-50">
                    Our Location
                  </h3>
                  <div className="h-72">
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

                {/* Contact Details */}
                <div className="space-y-6">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-700 mb-1">Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        4-14-142, Samrat Colony, West Marredpally, Secunderabad, TS - 26
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-700 mb-1">Mail Us</h4>
                      <a href="mailto:info@nutripeak.in" className="text-gray-600 hover:text-teal-500 transition">
                        info@nutripeak.in
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-700 mb-1">Telephone</h4>
                      <a href="tel:+917675040885" className="text-gray-600 hover:text-teal-500 transition">
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
