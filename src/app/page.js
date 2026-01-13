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

  const featuredProducts = [
    {
      name: 'BIOTIN+ KERATIN',
      desc: 'Biotin, protein, soya, iso-flavours with grape seed extract, essential vitamins & minerals for hair, skin and nails.',
      image: '/products/biotin-keratin.jpg'
    },
    {
      name: 'CREATINE MONOHYDRATE',
      desc: 'Helps increase protein synthesis. Enhance performance and build lean body mass. Improves heart muscle strength.',
      image: '/products/creatine.jpg'
    },
    {
      name: 'HY5 – ENERGY & FOCUS',
      desc: 'HY5, a carefully crafted supplement, aims to boost your cognitive abilities by enhancing focus and endurance.',
      image: '/products/hy5.jpg'
    },
    {
      name: 'HYDROLYZED COLLAGEN',
      desc: '100% pure collagen protein enriched with hyaluronic acid, vitamin C & biotin. Aids in radiant & glowing skin.',
      image: '/products/collagen.jpg'
    },
    {
      name: 'L-TYROSINE',
      desc: 'Neuro Transmitter support for mental alertness. Memory and thinking skills. Improve mental performance under stress.',
      image: '/products/l-tyrosine.jpg'
    },
    {
      name: 'ALPHA GPC',
      desc: 'High Quality Alpha Glycerophosphocholine (GPC). Healthy Cognitive Health Promoting Supplement. Rich in Choline.',
      image: '/products/alpha-gpc.jpg'
    },
    {
      name: 'MILK THISTLE',
      desc: 'Helps in protecting the cells of liver by blocking harmful toxins, protects from free radical damage & gives a boost of antioxidants.',
      image: '/products/milk-thistle.jpg'
    },
    {
      name: 'L-GLUTAMINE',
      desc: 'Most abundant free amino acid. Normalize growth hormone. Promote glucose uptake after workouts.',
      image: '/products/l-glutamine.jpg'
    },
    {
      name: 'SUPER GREENS',
      desc: 'Helps in detoxification. Supports joint & bone health. Aids in digestive discomfort. Promotes weight loss & appetite control.',
      image: '/products/super-greens.jpg'
    },
    {
      name: 'SUPER REDS',
      desc: 'May slow the signs of ageing. Promotes healthy & glowing skin. Supports cardiovascular well-being. Benefits vision & eye health.',
      image: '/products/super-reds.jpg'
    },
    {
      name: 'L-CITRULLINE MALATE',
      desc: 'Supports longer workouts, less soreness, better recovery. Alleviate the onset of fatigue during intense training.',
      image: '/products/l-citrulline.jpg'
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
        <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] overflow-hidden bg-gray-100">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === currentSlide ? 1 : 0
              }}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-6 md:px-12">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg z-10"
            >
              <span className="text-xl sm:text-2xl md:text-3xl text-white font-bold">‹</span>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg z-10"
            >
              <span className="text-xl sm:text-2xl md:text-3xl text-white font-bold">›</span>
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
                  At Nutripeak, our mission is to empower individuals to achieve optimal health and wellness through natural, science-backed nutraceutical solutions. We believe that everyone deserves access to high-quality, effective supplements that support a balanced lifestyle and enhance overall well-being. <Link href="/about" style={{ color: '#73C7E3' }} className="hover:underline hover:scale-105 inline-block transition-transform duration-200">Read more</Link>
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
                  At Nutripeak, our vision is to lead the nutraceutical industry by pioneering innovative health solutions that enhance the well-being of our customers worldwide. We envision a future where natural, science-backed supplements are integral to every individual's journey towards optimal health and vitality. <Link href="/about" style={{ color: '#73C7E3' }} className="hover:underline hover:scale-105 inline-block transition-transform duration-200">Read more</Link>
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
              At Nutripeak, our values are the cornerstone of everything we do. They guide our decisions, actions, and relationships as we strive to make a positive impact on the health and wellness of our customers and communities. <Link href="/about" style={{ color: '#73C7E3' }} className="hover:underline hover:scale-105 inline-block transition-transform duration-200">Read more</Link>
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
