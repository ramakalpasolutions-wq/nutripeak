'use client'

import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/link'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const productsScrollRef = useRef(null)
  const [isVisible, setIsVisible] = useState({})

  const heroImages = [
    '/hero-1.png',
    '/hero-2.png',
    '/hero-3.png'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

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

  const featuredProducts = [
    {
      name: 'Triple Strength Salmon Omega-3',
      desc: 'High-potency salmon fish oil with 560 mg EPA and 400 mg DHA per softgel to support heart, brain and joint health.',
      image: '/products/Omega 3.jpg.jpeg'
    },
    {
      name: 'Vitamin D3 + K2 (MK7)',
      desc: 'Vegan D3 from lichen (600 IU) with bioactive K2‑MK7 (55 mcg) for comprehensive bone, vascular and immune support.',
      image: '/products/vitamin-d3-k2-60-capsules.jpg'
    },
    {
      name: 'Curcumin 95% + Piperine',
      desc: '500 mg curcumin standardized to 95% curcuminoids with piperine for enhanced absorption and joint resilience.',
      image: '/products/CURCUMIN 95 Piperine.jpg'
    },
    {
      name: 'Liver & Kidney Detox',
      desc: 'NAC, milk thistle (80% silymarin), dandelion, turmeric, CoQ10 and vitamins for structured liver and kidney support.',
      image: '/products/Liver & Kidney Detox.jpg'
    },
    {
      name: 'Liposomal Vitamin C',
      desc: 'Liposomal vitamin C for superior bioavailability, immune function, collagen formation and daily antioxidant defence.',
      image: '/products/LIPOSOMAL VITAMIN C.jpg'
    },
    {
      name: 'HY5 Micronized Creatine Monohydrate',
      desc: '3 g ultra-fine 200‑mesh creatine per serving for strength, power, mixability and high‑intensity workout recovery.',
      image: '/products/HY5 CREATINE POUCH MOCKUP Front v2.jpg'
    },
    {
      name: 'HY5 Micronized Creatine + Taurine',
      desc: 'Creatine with taurine for muscle strength, cellular hydration, electrolyte balance and advanced training performance.',
      image: '/products/HY5_+TAURINE_POUCH_MOCKUP_FRONT_v1.jpg'
    },
    {
      name: 'LIVPURE Gummies',
      desc: 'Milk thistle, dandelion and artichoke gummies for gentle everyday liver wellness and digestive comfort.',
      image: '/products/Front Side Mango.jpg'
    },
    {
      name: 'HY5 AfterParty',
      desc: 'Electrolytes, milk thistle, ginger and NAC drink mix for overnight hydration, liver support and morning recovery.',
      image: '/products/sachet with box.jpg.jpeg'
    }
  ]

  const scrollProducts = (direction) => {
    if (productsScrollRef.current) {
      const scrollAmount = 350
      const newScrollPosition = direction === 'left'
        ? productsScrollRef.current.scrollLeft - scrollAmount
        : productsScrollRef.current.scrollLeft + scrollAmount
      productsScrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <Navbar />

      <div className="pt-20 sm:pt-24 md:pt-28">

        {/* Hero Section */}
        <section className="relative w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] xl:h-[500px] 2xl:h-[580px] overflow-hidden bg-gray-100">

          {/* Slides */}
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: index === currentSlide ? 1 : 0 }}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Text overlay only on first slide */}
              {index === 0 && (
                <div className="absolute inset-0 flex items-center">
                  <div
                    className={`ml-8 sm:ml-12 md:ml-16 lg:ml-20 xl:ml-80 transition-opacity duration-700 ${
  currentSlide === 0 ? 'opacity-100' : 'opacity-0'
}`}

                  >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-gray-800 leading-tight text-left">
                      Your Trusted
                      <br />
                      <span style={{ color: '#059669' }}>Partner In Health</span>
                      <br />
                      And Wellness.
                    </h1>
                  </div>
                </div>
              )}
            </div>
          ))}

 {/* Navigation Arrows */}
<div className="absolute inset-0 flex items-center justify-between px-2 sm:px-3 pointer-events-none">
  <button
    onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
    className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 z-10 pointer-events-auto hover:scale-110 bg-white/70 hover:bg-white border border-gray-300 shadow-md"
  >
    <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-500">‹</span>
  </button>
  <button
    onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
    className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 z-10 pointer-events-auto hover:scale-110 bg-white/70 hover:bg-white border border-gray-300 shadow-md"
  >
    <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-500">›</span>
  </button>
</div>


          {/* Dots */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 hover:opacity-75 ${
                  index === currentSlide ? 'w-8 sm:w-12' : 'w-2 sm:w-3'
                }`}
                style={{
                  backgroundColor: index === currentSlide ? '#89FF9F' : 'rgba(255, 255, 255, 0.5)'
                }}
              />
            ))}
          </div>

        </section>

        {/* Company Overview */}
        <section
          id="company-overview"
          data-animate
          className={`py-8 sm:py-12 md:py-16 lg:py-20 transition-all duration-700 ${
            isVisible['company-overview'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ background: 'linear-gradient(to bottom, #e0f2fe, #f0fdf4)' }}
        >
          <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300" style={{ color: '#059669' }}>
              Company Overview
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center max-w-6xl mx-auto">
              Welcome to Nutripeak, your trusted partner in health and wellness. Established with a passion for promoting holistic well-being, we specialize in creating premium nutraceutical products that harness the power of natural ingredients to support a healthier lifestyle.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section
          id="who-we-are"
          data-animate
          className={`py-8 sm:py-12 md:py-16 lg:py-20 bg-white transition-all duration-700 delay-100 ${
            isVisible['who-we-are'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300" style={{ color: '#0284c7' }}>
              Who We Are
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center max-w-6xl mx-auto">
              At Nutripeak, we blend scientific innovation with the wisdom of nature to develop cutting-edge nutraceutical formulations. Our dedicated team of researchers, nutritionists, and health experts is committed to delivering products that meet the highest standards of quality, efficacy, and safety.
            </p>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section
          id="mission-vision"
          data-animate
          className={`py-8 sm:py-12 md:py-16 lg:py-20 transition-all duration-700 delay-200 ${
            isVisible['mission-vision'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ background: 'linear-gradient(to bottom, #f0fdf4, #ffffff)' }}
        >
          <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">

              {/* Our Mission */}
              <div className="hover:translate-y-[-8px] transition-transform duration-300">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700">Our mission</h2>
                  <span className="text-2xl sm:text-3xl md:text-4xl animate-bounce">🚀</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 text-left">
                  At Nutripeak, our mission is to empower individuals to achieve optimal health and wellness through natural, science-backed nutraceutical solutions. We believe that everyone deserves access to high-quality, effective supplements that support a balanced lifestyle and enhance overall well-being.{' '}
                  <Link href="/about" style={{ color: '#73C7E3' }} className="hover:underline hover:scale-105 inline-block transition-transform duration-200">Read more</Link>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {['Quality', 'Transparency', 'Innovation', 'Customer Care'].map((item, i) => (
                    <div key={item} className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200" style={{ animationDelay: `${i * 100}ms` }}>
                      <span style={{ color: '#73C7E3' }} className="text-lg sm:text-xl">✓</span>
                      <span className="text-sm sm:text-base text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Vision */}
              <div className="hover:translate-y-[-8px] transition-transform duration-300">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700">Our Vision</h2>
                  <span className="text-2xl sm:text-3xl md:text-4xl">🏢</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 text-left">
                  At Nutripeak, our vision is to lead the nutraceutical industry by pioneering innovative health solutions that enhance the well-being of our customers worldwide. We envision a future where natural, science-backed supplements are integral to every individual's journey towards optimal health and vitality.{' '}
                  <Link href="/about" style={{ color: '#73C7E3' }} className="hover:underline hover:scale-105 inline-block transition-transform duration-200">Read more</Link>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {['Innovation', 'Global Impact', 'Education'].map((item, i) => (
                    <div key={item} className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200" style={{ animationDelay: `${i * 100}ms` }}>
                      <span style={{ color: '#73C7E3' }} className="text-lg sm:text-xl">✓</span>
                      <span className="text-sm sm:text-base text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Values */}
        <section
          id="our-values"
          data-animate
          className={`py-8 sm:py-12 md:py-16 lg:py-20 bg-white transition-all duration-700 delay-300 ${
            isVisible['our-values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 hover:scale-105 transition-transform duration-300">Our Values</h2>
              <span className="text-2xl sm:text-3xl md:text-4xl">🤝</span>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-5xl mx-auto mb-6 sm:mb-8">
              At Nutripeak, our values are the cornerstone of everything we do. They guide our decisions, actions, and relationships as we strive to make a positive impact on the health and wellness of our customers and communities.{' '}
              <Link href="/about" style={{ color: '#73C7E3' }} className="hover:underline hover:scale-105 inline-block transition-transform duration-200">Read more</Link>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {['Quality', 'Transparency', 'Innovation', 'Customer Focus'].map((item, i) => (
                <div key={item} className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200" style={{ animationDelay: `${i * 100}ms` }}>
                  <span style={{ color: '#73C7E3' }} className="text-lg sm:text-xl">✓</span>
                  <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section
          id="featured-products"
          data-animate
          className={`py-8 sm:py-12 md:py-16 lg:py-20 transition-all duration-700 ${
            isVisible['featured-products'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ background: 'linear-gradient(to bottom, #ffffff, #e0f2fe)' }}
        >
          <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 uppercase hover:scale-105 transition-transform duration-300">Featured Products</h2>

              <div className="flex gap-2 sm:gap-3 lg:hidden">
                <button
                  onClick={() => scrollProducts('left')}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 text-sm sm:text-base md:text-lg hover:scale-110 hover:shadow-lg"
                  style={{ border: '2px solid #73C7E3', color: '#73C7E3', background: 'white' }}
                >
                  ←
                </button>
                <button
                  onClick={() => scrollProducts('right')}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 text-sm sm:text-base md:text-lg hover:scale-110 hover:shadow-lg"
                  style={{ border: '2px solid #73C7E3', color: '#73C7E3', background: 'white' }}
                >
                  →
                </button>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={() => scrollProducts('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 xl:-translate-x-8 w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-white flex items-center justify-center transition-all duration-300 z-10 hidden lg:flex shadow-lg hover:scale-110 hover:shadow-xl"
                style={{ border: '2px solid #73C7E3', color: '#73C7E3' }}
              >
                <span className="text-xl xl:text-2xl">←</span>
              </button>

              <button
                onClick={() => scrollProducts('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 xl:translate-x-8 w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-white flex items-center justify-center transition-all duration-300 z-10 hidden lg:flex shadow-lg hover:scale-110 hover:shadow-xl"
                style={{ border: '2px solid #73C7E3', color: '#73C7E3' }}
              >
                <span className="text-xl xl:text-2xl">→</span>
              </button>

              <div
                ref={productsScrollRef}
                className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
              >
                {featuredProducts.map((product, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 group"
                    style={{ border: '2px solid #d1fae5' }}
                  >
                    <div className="h-48 sm:h-56 md:h-64 bg-gray-100 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-2 sm:mb-3 group-hover:text-[#73C7E3] transition-colors duration-300">{product.name}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed line-clamp-3">{product.desc}</p>
                      <Link href="/products" className="font-semibold hover:underline text-xs sm:text-sm inline-block hover:translate-x-2 transition-transform duration-200" style={{ color: '#73C7E3' }}>
                        check more →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          data-animate
          className={`py-8 sm:py-12 md:py-16 lg:py-20 bg-white transition-all duration-700 ${
            isVisible['benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { icon: '🚗', title: 'Free Shipping', desc: 'Free Shipping all over India' },
                { icon: '📦', title: 'Secure packaging', desc: 'Unbreakable & Spill Proof' },
                { icon: '🛡️', title: 'Secure Payment', desc: '100% secure payment' },
                { icon: '📞', title: 'Dedicated Support', desc: 'Support on Priority' }
              ].map((benefit, i) => (
                <div key={i} className="text-center group hover:translate-y-[-8px] transition-transform duration-300">
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #89FF9F, #73C7E3)' }}
                  >
                    <span className="text-3xl sm:text-4xl lg:text-5xl text-white group-hover:scale-125 transition-transform duration-300">{benefit.icon}</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-1 sm:mb-2 group-hover:text-[#73C7E3] transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-4 sm:py-6 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <p className="text-center text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              <strong>Disclaimer:</strong> These products are not intended to diagnose, treat, or cure any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using this product.
            </p>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}
