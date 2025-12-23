'use client'

import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/link'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const productsScrollRef = useRef(null)

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
      const scrollAmount = 350 // Width of one card + gap
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
      
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-28">
        
        {/* Hero Section - Image Slider Only */}
        <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hero ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 flex items-center justify-center transition shadow-lg z-10"
            >
              <span className="text-3xl text-white font-bold">‹</span>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 flex items-center justify-center transition shadow-lg z-10"
            >
              <span className="text-3xl text-white font-bold">›</span>
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-12' : 'bg-white/50 w-3 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-20 bg-cyan-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-blue-900">
              Company Overview
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center max-w-6xl mx-auto">
              Welcome to Nutripeak, your trusted partner in health and wellness. Established with a passion for promoting holistic well-being, we specialize in creating premium nutraceutical products that harness the power of natural ingredients to support a healthier lifestyle.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 md:py-20 bg-cyan-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-blue-900">
              Who We Are
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center max-w-6xl mx-auto">
              At Nutripeak, we blend scientific innovation with the wisdom of nature to develop cutting-edge nutraceutical formulations. Our dedicated team of researchers, nutritionists, and health experts is committed to delivering products that meet the highest standards of quality, efficacy, and safety.
            </p>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Our Mission */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-700">Our mission</h2>
                  <span className="text-4xl">🚀</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At Nutripeak, our mission is to empower individuals to achieve optimal health and wellness through natural, science-backed nutraceutical solutions. We believe that everyone deserves access to high-quality, effective supplements that support a balanced lifestyle and enhance overall well-being. <Link href="/about" className="text-green-500 hover:underline">Read more</Link>
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">✓</span>
                    <span className="text-gray-700 font-medium">Quality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">✓</span>
                    <span className="text-gray-700 font-medium">Transparency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">✓</span>
                    <span className="text-gray-700 font-medium">Innovation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">✓</span>
                    <span className="text-gray-700 font-medium">Customer Care</span>
                  </div>
                </div>
              </div>

              {/* Our Vision */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-700">Our Vission</h2>
                  <span className="text-4xl">🏢</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At Nutripeak, our vision is to lead the nutraceutical industry by pioneering innovative health solutions that enhance the well-being of our customers worldwide. We envision a future where natural, science-backed supplements are integral to every individual's journey towards optimal health and vitality.<Link href="/about" className="text-green-500 hover:underline">Read more</Link>
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">✓</span>
                    <span className="text-gray-700 font-medium">Innovation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">✓</span>
                    <span className="text-gray-700 font-medium">Global Impact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">✓</span>
                    <span className="text-gray-700 font-medium">Education</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700">Our Values</h2>
              <span className="text-4xl">🤝</span>
            </div>
            <p className="text-gray-600 leading-relaxed text-center max-w-5xl mx-auto mb-8">
              At Nutripeak, our values are the cornerstone of everything we do. They guide our decisions, actions, and relationships as we strive to make a positive impact on the health and wellness of our customers and communities.<Link href="/about" className="text-green-500 hover:underline">Read more</Link>
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">✓</span>
                <span className="text-gray-700 font-medium">Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">✓</span>
                <span className="text-gray-700 font-medium">Transparency</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">✓</span>
                <span className="text-gray-700 font-medium">Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">✓</span>
                <span className="text-gray-700 font-medium">Customer Focus</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products - Scrollable Carousel */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 uppercase">Featured Products</h2>
              <div className="flex gap-3">
                <button 
                  onClick={() => scrollProducts('left')}
                  className="w-12 h-12 rounded-full border-2 border-teal-500 text-teal-500 flex items-center justify-center hover:bg-teal-50 transition"
                >
                  ←
                </button>
                <button 
                  onClick={() => scrollProducts('right')}
                  className="w-12 h-12 rounded-full border-2 border-teal-500 text-teal-500 flex items-center justify-center hover:bg-teal-50 transition"
                >
                  →
                </button>
              </div>
            </div>
            
            <div 
              ref={productsScrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredProducts.map((product, i) => (
                <div key={i} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-xl transition flex-shrink-0 w-80">
                  <div className="h-64 bg-gray-100 flex items-center justify-center p-6">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-700 mb-3">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{product.desc}</p>
                    <Link href="/products" className="text-green-500 font-semibold hover:underline text-sm">
                      check more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🚗', title: 'Free Shipping', desc: 'Free Shipping all over India' },
                { icon: '📦', title: 'Secure packaging', desc: 'Unbreakable & Spill Proof' },
                { icon: '🛡️', title: 'Secure Payment', desc: '100% secure payment' },
                { icon: '📞', title: 'Dedicated Support', desc: 'Support on Priority' }
              ].map((benefit, i) => (
                <div key={i} className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
                    <span className="text-4xl text-white">{benefit.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-700 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-6 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            <p className="text-center text-gray-600 text-sm leading-relaxed">
              <strong>Disclaimer:</strong> These products are not intended to diagnose, treat, or cure any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using this product.
            </p>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}
