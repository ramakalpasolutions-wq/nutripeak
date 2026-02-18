'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All Products')
  const [expandedProducts, setExpandedProducts] = useState([])
  const [isVisible, setIsVisible] = useState({})

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

  const categories = [
    'All Products',
    'OMEGA & VITAMINS',
    'SPORTS NUTRITION',
    'LIVER SUPPORT',
    'HEALTH & WELLNESS'
  ]

  const products = [
    {
      id: 1,
      name: 'Triple Strength Salmon Omega-3',
      subName: '560 mg EPA + 400 mg DHA',
      category: ['All Products', 'OMEGA & VITAMINS'],
      image: '/products/Omega 3.jpg.jpeg',
      shortDesc: 'High-potency salmon fish oil with 560 mg EPA and 400 mg DHA per softgel to support heart, brain and joint health.',
      fullDesc: 'This high-potency salmon fish oil delivers a concentrated 560 mg EPA and 400 mg DHA per softgel to support heart, brain and joint health. The clinically relevant omega‑3 ratio helps maintain healthy triglyceride levels and circulatory function, while also supporting cognitive performance and visual health. Its carefully selected fish oil and lemon flavour are designed for superior palatability and daily compliance. An ideal choice for those seeking a premium, science‑backed omega‑3 supplement.',
      marginTop: 'mt-0'
    },
    {
      id: 2,
      name: 'Vitamin D3 + K2 (MK7)',
      subName: 'Veg D3 (Lichen) · 600 IU D3 · 55 mcg K2‑MK7',
      category: ['All Products', 'OMEGA & VITAMINS'],
      image: '/products/Vitamin D3 + K2 60 Capsules.jpg',
      shortDesc: 'Vegan D3 from lichen (600 IU) with bioactive K2‑MK7 (55 mcg) for comprehensive bone, vascular and immune support.',
      fullDesc: 'Each capsule combines vegan vitamin D3 from lichen (600 IU) with bioactive vitamin K2‑MK7 (55 mcg) for comprehensive bone and calcium support. This synergistic pairing helps optimise calcium absorption and its proper deposition into bones, while also supporting vascular and immune health. The formula is designed for individuals with limited sun exposure or increased bone health needs. A clean, vegetarian-friendly option for long‑term skeletal and overall wellness support.',
      marginTop: 'mt-0'
    },
    {
      id: 3,
      name: 'Curcumin 95% + Piperine',
      subName: '500 mg Curcumin · 10 mg Piperine',
      category: ['All Products', 'HEALTH & WELLNESS'],
      image: '/products/CURCUMIN 95 Piperine.jpg',
      shortDesc: '500 mg curcumin (95% curcuminoids) with piperine for enhanced absorption, antioxidant defence and joint support.',
      fullDesc: 'Formulated with 500 mg curcumin standardized to 95% curcuminoids and 10 mg piperine (95%), this blend offers targeted support for a healthy inflammatory response. Piperine is included to help enhance curcumin absorption, improving its bioefficacy at a clinical-strength dose. The formula provides robust antioxidant defence, helping protect cells from oxidative stress. Ideal for individuals seeking daily wellness support for joints, mobility and overall resilience.',
      marginTop: 'mt-0'
    },
    {
      id: 4,
      name: 'Liver & Kidney Detox',
      subName: 'Milk Thistle · NAC · CoQ10',
      category: ['All Products', 'LIVER SUPPORT'],
      image: '/products/Liver & Kidney Detox.jpg',
      shortDesc: 'Advanced multi-ingredient matrix with NAC, milk thistle (80% silymarin), CoQ10 and vitamins for liver and kidney detox.',
      fullDesc: 'This advanced formula combines N‑acetyl L‑cysteine, milk thistle extract (80% silymarin), dandelion, turmeric, CoQ10 and key vitamins to support natural liver and kidney detox pathways. The multi-ingredient matrix helps maintain glutathione levels, supports healthy enzyme function and provides strong antioxidant protection. Added vitamin C, vitamin E and B‑complex vitamins further aid energy metabolism and cellular defence. Designed for adults seeking structured support for liver function, kidney health and recovery from routine lifestyle stressors.',
      marginTop: 'mt-0'
    },
    {
      id: 5,
      name: 'Liposomal Vitamin C',
      subName: 'Higher Absorption · Collagen Boost · Iron Absorption',
      category: ['All Products', 'OMEGA & VITAMINS'],
      image: '/products/LIPOSOMAL VITAMIN C.jpg',
      shortDesc: 'Liposomal vitamin C (80 mg) for superior absorption, immune function, collagen support and antioxidant defence.',
      fullDesc: 'Each capsule delivers 80 mg of vitamin C with liposomal technology, formulated to support superior absorption and bioavailability. Vitamin C helps maintain normal immune function, supports collagen formation for skin and joint health, and contributes to the reduction of everyday tiredness and fatigue. It also aids iron absorption and provides antioxidant defence against oxidative stress. A modern, premium format for those who want reliable daily vitamin C support in a convenient capsule.',
      marginTop: 'mt-0'
    },
    {
      id: 6,
      name: 'HY5 Micronized Creatine Monohydrate',
      subName: 'HyperPure · 200 Mesh · Unflavoured · 3g per serving',
      category: ['All Products', 'SPORTS NUTRITION'],
      image: '/products/HY5 CREATINE POUCH MOCKUP Front v2.jpg',
      shortDesc: '3 g ultra-fine 200‑mesh creatine per serving for strength, power, mixability and high‑intensity workout recovery.',
      fullDesc: 'HY5 Micronized Creatine Monohydrate provides 3 g of ultra-fine, 200‑mesh creatine per serving to support strength, power and high‑intensity performance. The micronized form is designed for excellent mixability and absorption, making it suitable for pre‑ or post‑workout use. Regular use helps support lean muscle strength, training volume and faster workout recovery when combined with resistance exercise. A clean, unflavoured creatine for serious athletes and fitness enthusiasts.',
      marginTop: 'mt-0'
    },
    {
      id: 7,
      name: 'HY5 Micronized Creatine + Taurine',
      subName: 'HyperPure · 200 Mesh · Unflavoured · 2500mg Creatine + 500mg Taurine',
      category: ['All Products', 'SPORTS NUTRITION'],
      image: '/products/HY5_+TAURINE_POUCH_MOCKUP_FRONT_v1.jpg',
      shortDesc: 'Creatine monohydrate with taurine for enhanced muscle strength, cellular hydration and faster recovery.',
      fullDesc: 'This performance stack combines creatine monohydrate with taurine to support enhanced muscle strength, power output and cellular hydration. Creatine helps fuel high‑intensity efforts, while taurine supports electrolyte balance and neuromuscular performance. Together, they are designed to aid faster recovery, sustained training intensity and improved workout quality when used alongside a structured exercise programme. A science‑driven formula tailored for advanced lifters and endurance athletes seeking an edge in performance.',
      marginTop: 'mt-0'
    },
    {
      id: 8,
      name: 'LIVPURE Gummies',
      subName: 'Milk Thistle · Dandelion · Artichoke · Inulin',
      category: ['All Products', 'LIVER SUPPORT'],
      image: '/products/Front Side Mango.jpg',
      
      shortDesc: 'Natural liver support gummies with milk thistle, dandelion, artichoke and inulin. Sugar free, Vegan, Gluten free.',
      fullDesc: 'LIVPURE Gummies bring together milk thistle, dandelion and artichoke extracts in a convenient, great‑tasting format to support everyday liver wellness. The botanicals are selected for their traditional use in aiding natural detox pathways and digestive comfort, while added fibre helps support gut health. Each gummy offers a measured, consistent dose, making it easy to build a simple, sustainable liver‑support routine. Ideal for adults looking for a gentle, plant‑based way to support protection from routine lifestyle stress, in a format that feels more like a treat than a supplement.',
      marginTop: 'mt-0'
    },
    {
      id: 9,
      name: 'HY5 AfterParty',
      subName: 'Milk Thistle · Ginger · NAC · Electrolytes · Citrus Fusion',
      category: ['All Products', 'LIVER SUPPORT'],
      image: '/products/sachet with box.jpg.jpeg',
      shortDesc: 'Hydration and liver‑support drink mix with electrolytes, milk thistle, ginger and NAC for overnight recovery.',
      fullDesc: 'HY5 AfterParty is a specialized hydration and liver‑support drink mix designed for late‑night occasions and busy social schedules. The formula combines premium electrolytes with milk thistle, ginger and N‑acetyl cysteine (NAC) to support fluid balance, natural detox processes and digestive comfort. Taken with water before bed, it helps you wake up feeling more refreshed, recharged and ready for the day ahead. A clinically inspired blend for those who want structured recovery, hydration and liver support without compromising their lifestyle.',
      marginTop: 'mt-0'
    }
  ]

  const filteredProducts = activeCategory === 'All Products'
    ? products
    : products.filter(p => p.category.includes(activeCategory))

  const toggleExpand = (productId) => {
    setExpandedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  return (
    <>
      <Navbar />

      <div className="pt-20 sm:pt-24 md:pt-28">

        {/* Hero Banner */}
        <section className="relative h-64 sm:h-80 md:h-96 lg:h-[460px] overflow-hidden bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="hidden md:block relative overflow-hidden group">
              <img
                src="/products-hero.jpg"
                alt="Products"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div
              className="relative overflow-hidden flex items-center justify-center group"
              style={{ background: 'linear-gradient(135deg, #73C7E3, #89FF9F)' }}
            >
              <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-wider px-4 group-hover:scale-110 transition-transform duration-500">
                PRODUCTS
              </h1>
            </div>
          </div>
        </section>

        {/* Intro Text */}
        <section
          id="intro-text"
          data-animate
          className={`py-8 sm:py-10 md:py-12 bg-gray-50 transition-all duration-700 ${
            isVisible['intro-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Explore our diverse range of nutraceutical products designed to enhance your health and vitality. From vitamins and supplements to specialized formulations for targeted health benefits, each product is crafted to empower you on your journey to better health.
            </p>
          </div>
        </section>

        {/* Category Tabs and Products */}
        <section
          id="products-section"
          data-animate
          className={`py-8 sm:py-12 md:py-16 bg-white transition-all duration-700 ${
            isVisible['products-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

            {/* Header with Title and Filters */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-6 sm:mb-8 hover:text-[#059669] transition-colors duration-300">
                Our<br className="md:hidden" /> Products
              </h2>

              {/* Category Filter Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap hover:scale-105 active:scale-95 ${
                      activeCategory === cat
                        ? 'text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#89FF9F] hover:text-[#059669] hover:shadow-md'
                    }`}
                    style={activeCategory === cat ? { background: 'linear-gradient(135deg, #89FF9F, #73C7E3)' } : {}}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:scale-105 flex flex-col"
                  style={{
                    border: '2px solid #dbeafe',
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Product Image */}
                  <div className="h-56 sm:h-64 md:h-72 lg:h-80 bg-gray-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Show second image badge for LIVPURE gummies that have two variants */}
                    {product.image2 && (
                      <div className="absolute bottom-2 right-2 w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border-2 border-white shadow-md">
                        <img
                          src={product.image2}
                          alt={`${product.name} variant`}
                          className="w-full h-full object-contain bg-white"
                        />
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-1 group-hover:text-[#059669] transition-colors duration-300">
                      {product.name}
                    </h3>
                    {product.subName && (
                      <p className="text-xs sm:text-sm text-[#059669] font-medium mb-2 leading-snug">
                        {product.subName}
                      </p>
                    )}
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed flex-1">
                      {expandedProducts.includes(product.id)
                        ? product.fullDesc
                        : product.shortDesc}
                    </p>
                    <button
                      onClick={() => toggleExpand(product.id)}
                      className="font-semibold hover:underline text-xs sm:text-sm inline-flex items-center gap-2 group/btn hover:translate-x-2 transition-all duration-300 mt-auto"
                      style={{ color: '#73C7E3' }}
                    >
                      {expandedProducts.includes(product.id) ? (
                        <>
                          Read less
                          <span className="transform group-hover/btn:rotate-180 transition-transform duration-300">↑</span>
                        </>
                      ) : (
                        <>
                          Read more
                          <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                        </>
                      )}
                    </button>
                  </div>
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
