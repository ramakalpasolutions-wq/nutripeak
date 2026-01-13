'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All Products')
  const [expandedProducts, setExpandedProducts] = useState([])
  const [isVisible, setIsVisible] = useState({})

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

  const categories = [
    'All Products',
    'ENERGY',
    'SPORTS NUTRITION',
    'LIVER SUPPORT',
    'HEALTH & WELLNESS',
    'COLLAGEN'
  ]

  const products = [
    {
      id: 1,
      name: 'BIOTIN+ KERATIN',
      category: ['All Products', 'HEALTH & WELLNESS'],
      image: '/products/biotin-keratin.jpg',
      shortDesc: 'Biotin, protein, soya, iso-flavours with grape seed extract,',
      fullDesc: 'Biotin, protein, soya, iso-flavours with grape seed extract,essential vitamins & minerals for hair, skin and nails. Contains 100% RDA of biotin which promotes healthy, long & shiny hair. Supports healthy, firmer, brighter & toned skin. Supports healthy nails.',
      marginTop: 'sm:mt-3 md:mt-4 lg:mt-0'
    },
    {
      id: 2,
      name: 'CREATINE MONOHYDRATE',
      category: ['All Products', 'SPORTS NUTRITION'],
      image: '/products/creatine.jpg',
      shortDesc: 'Helps increase protein synthesis. Enhance performance',
      fullDesc: 'Helps increase protein synthesis. Enhance performance and build lean body mass. Improves heart muscle strength. Also increases bone density. Supports in neurological and neurodegenerative diseases',
      marginTop: 'sm:mt-4 md:mt-5 lg:mt-0'
    },
    {
      id: 3,
      name: 'HY5 – ENERGY & FOCUS',
      category: ['All Products', 'ENERGY'],
      image: '/products/hy5.jpg',
      shortDesc: 'HY5, a carefully crafted supplement, boosts focus and',
      fullDesc: 'HY5, a carefully crafted supplement, boosts focus and concentration. Its natural blend includes caffeine, vitamins, amino acids, and nootropics, making it an ideal choice for sustained energy and sharp mental acuity during critical moments.',
      marginTop: 'sm:mt-3 md:mt-6 lg:mt-0'
    },
    {
      id: 4,
      name: 'HYDROLYZED COLLAGEN',
      category: ['All Products', 'COLLAGEN'],
      image: '/products/collagen.jpg',
      shortDesc: '100% pure collagen protein enriched with hyaluronic acid, vitamin C',
      fullDesc: '100% pure collagen protein enriched with hyaluronic acid, vitamin C & biotin.Aids in radiant & glowing skin. Promotes longer & thicker hair. Provides strength & flexibility. Supports joint health & flexibility. Available in 3 flavours; blueberry, orange & strawberry lemon.',
      marginTop: 'sm:mt-4 md:mt-4 lg:mt-0'
    },
    {
      id: 5,
      name: 'L-TYROSINE',
      category: ['All Products', 'ENERGY'],
      image: '/products/l-tyrosine.jpg',
      shortDesc: 'Neuro Transmitter support for mental alertness.',
      fullDesc: 'Neuro Transmitter support for mental alertness. Memory and thinking skills (cognitive function). Improve mental performance under stressful conditions. Healthy glandular function.',
      marginTop: 'sm:mt-5 md:mt-7 lg:mt-0'
    },
    {
      id: 6,
      name: 'ALPHA GPC',
      category: ['All Products', 'ENERGY'],
      image: '/products/alpha-gpc.jpg',
      shortDesc: 'High Quality Alpha Glycerophosphocholine (GPC).',
      fullDesc: 'High Quality Alpha Glycerophosphocholine (GPC). Healthy Cognitive Health Promoting Supplement. Rich in Choline. Gluten Free and Non-GMO. Supports Mental Activity.',
      marginTop: 'sm:mt-3 md:mt-5 lg:mt-0'
    },
    {
      id: 7,
      name: 'MILK THISTLE',
      category: ['All Products', 'LIVER SUPPORT'],
      image: '/products/milk-thistle.jpg',
      shortDesc: 'Helps in protecting the cells of liver by blocking harmful',
      fullDesc: 'Helps in protecting the cells of liver by blocking harmful toxins, protects from free radical damage & gives a boost of antioxidants. Helps in maintaining liver, kidney & gall bladder health. Powerful liver detoxifier, aids to maintain healthy blood sugar levels, good cholesterol levels & brain health. Optimises function of digestive tract.',
      marginTop: 'sm:mt-4 md:mt-6 lg:mt-0'
    },
    {
      id: 8,
      name: 'L-GLUTAMINE',
      category: ['All Products', 'HEALTH & WELLNESS'],
      image: '/products/l-glutamine.jpg',
      shortDesc: 'Most abundant free amino acid. Normalize growth hormone.',
      fullDesc: 'Most abundant free amino acid. Normalize growth hormone. Promote glucose uptake after workouts. Enhance the hydration state of a muscle. Promotes synthesis of glucosamine.',
      marginTop: 'sm:mt-3 md:mt-4 lg:mt-0'
    },
    {
      id: 9,
      name: 'SUPER GREENS',
      category: ['All Products', 'HEALTH & WELLNESS'],
      image: '/products/super-greens.jpg',
      shortDesc: 'Helps in detoxification. Supports joint & bone health.',
      fullDesc: 'Helps in detoxification. Supports joint & bone health. Aids in digestive discomfort. Promotes weight loss & appetite control.',
      marginTop: 'sm:mt-5 md:mt-7 lg:mt-0'
    },
    {
      id: 10,
      name: 'SUPER REDS',
      category: ['All Products', 'HEALTH & WELLNESS'],
      image: '/products/super-reds.jpg',
      shortDesc: 'May slow the signs of ageing. Promotes healthy & glowing skin.',
      fullDesc: 'May slow the signs of ageing. Promotes healthy & glowing skin. Supports cardiovascular well-being. Benefits vision & eye health.',
      marginTop: 'sm:mt-4 md:mt-5 lg:mt-0'
    },
    {
      id: 11,
      name: 'L-CITRULLINE MALATE',
      category: ['All Products', 'SPORTS NUTRITION'],
      image: '/products/l-citrulline.jpg',
      shortDesc: 'Supports longer workouts, less soreness, better recovery.',
      fullDesc: 'Supports longer workouts, less soreness, better recovery. Alleviate the onset of fatigue during intense training. Aids blood flow to muscles during exercise. Helps improve urea cycle disorders. Helps improve erectile dysfunction.',
      marginTop: 'sm:mt-3 md:mt-6 lg:mt-0'
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
            <div className="relative overflow-hidden flex items-center justify-center group" style={{ background: 'linear-gradient(135deg, #73C7E3, #89FF9F)' }}>
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
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:scale-105"
                  style={{ 
                    border: '2px solid #dbeafe',
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="h-56 sm:h-64 md:h-72 lg:h-80 bg-gray-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-2 sm:mb-3 group-hover:text-[#059669] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p 
                      className={`text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed transition-all duration-500 ${product.marginTop} ${
                        expandedProducts.includes(product.id) ? 'max-h-[500px] opacity-100' : 'max-h-[100px] opacity-90'
                      }`}
                    >
                      {expandedProducts.includes(product.id) 
                        ? product.fullDesc 
                        : product.shortDesc}
                    </p>
                    <button 
                      onClick={() => toggleExpand(product.id)}
                      className="font-semibold hover:underline text-xs sm:text-sm inline-flex items-center gap-2 group/btn hover:translate-x-2 transition-all duration-300"
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
