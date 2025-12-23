'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All Products')
  const [expandedProducts, setExpandedProducts] = useState([])

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
      fullDesc: 'Biotin, protein, soya, iso-flavours with grape seed extract,essential vitamins & minerals for hair, skin and nails. Contains 100% RDA of biotin which promotes healthy, long & shiny hair. Supports healthy, firmer, brighter & toned skin. Supports healthy nails.'
    },
    {
      id: 2,
      name: 'CREATINE MONOHYDRATE',
      category: ['All Products', 'SPORTS NUTRITION'],
      image: '/products/creatine.jpg',
      shortDesc: 'Helps increase protein synthesis. Enhance performance',
      fullDesc: 'Helps increase protein synthesis. Enhance performance and build lean body mass. Improves heart muscle strength. Also increases bone density. Supports in neurological and neurodegenerative diseases'
    },
    {
      id: 3,
      name: 'HY5 – ENERGY & FOCUS',
      category: ['All Products', 'ENERGY'],
      image: '/products/hy5.jpg',
      shortDesc: 'HY5, a carefully crafted supplement, boosts focus and',
      fullDesc: 'HY5, a carefully crafted supplement, boosts focus and concentration. Its natural blend includes caffeine, vitamins, amino acids, and nootropics, making it an ideal choice for sustained energy and sharp mental acuity during critical moments.'
    },
    {
      id: 4,
      name: 'HYDROLYZED COLLAGEN',
      category: ['All Products', 'COLLAGEN'],
      image: '/products/collagen.jpg',
      shortDesc: '100% pure collagen protein enriched with hyaluronic acid, vitamin C',
      fullDesc: '100% pure collagen protein enriched with hyaluronic acid, vitamin C & biotin.Aids in radiant & glowing skin. Promotes longer & thicker hair. Provides strength & flexibility. Supports joint health & flexibility. Available in 3 flavours; blueberry, orange & strawberry lemon.'
    },
    {
      id: 5,
      name: 'L-TYROSINE',
      category: ['All Products', 'HEALTH & WELLNESS'],
      image: '/products/l-tyrosine.jpg',
      shortDesc: 'Neuro Transmitter support for mental alertness.',
      fullDesc: 'Neuro Transmitter support for mental alertness. Memory and thinking skills (cognitive function). Improve mental performance under stressful conditions. Healthy glandular function.'
    },
    {
      id: 6,
      name: 'ALPHA GPC',
      category: ['All Products', 'HEALTH & WELLNESS'],
      image: '/products/alpha-gpc.jpg',
      shortDesc: 'High Quality Alpha Glycerophosphocholine (GPC).',
      fullDesc: 'High Quality Alpha Glycerophosphocholine (GPC). Healthy Cognitive Health Promoting Supplement. Rich in Choline. Gluten Free and Non-GMO. Supports Mental Activity.'
    },
    {
      id: 7,
      name: 'MILK THISTLE',
      category: ['All Products', 'LIVER SUPPORT'],
      image: '/products/milk-thistle.jpg',
      shortDesc: 'Helps in protecting the cells of liver by blocking harmful',
      fullDesc: 'Helps in protecting the cells of liver by blocking harmful toxins, protects from free radical damage & gives a boost of antioxidants. Helps in maintaining liver, kidney & gall bladder health. Powerful liver detoxifier, aids to maintain healthy blood sugar levels, good cholesterol levels & brain health. Optimises function of digestive tract.'
    },
    {
      id: 8,
      name: 'L-GLUTAMINE',
      category: ['All Products', 'SPORTS NUTRITION'],
      image: '/products/l-glutamine.jpg',
      shortDesc: 'Most abundant free amino acid. Normalize growth hormone.',
      fullDesc: 'Most abundant free amino acid. Normalize growth hormone. Promote glucose uptake after workouts. Enhance the hydration state of a muscle. Promotes synthesis of glucosamine.'
    },
    {
      id: 9,
      name: 'SUPER GREENS',
      category: ['All Products', 'HEALTH & WELLNESS'],
      image: '/products/super-greens.jpg',
      shortDesc: 'Helps in detoxification. Supports joint & bone health.',
      fullDesc: 'Helps in detoxification. Supports joint & bone health. Aids in digestive discomfort. Promotes weight loss & appetite control.'
    },
    {
      id: 10,
      name: 'SUPER REDS',
      category: ['All Products', 'HEALTH & WELLNESS'],
      image: '/products/super-reds.jpg',
      shortDesc: 'May slow the signs of ageing. Promotes healthy & glowing skin.',
      fullDesc: 'May slow the signs of ageing. Promotes healthy & glowing skin. Supports cardiovascular well-being. Benefits vision & eye health.'
    },
    {
      id: 11,
      name: 'L-CITRULLINE MALATE',
      category: ['All Products', 'SPORTS NUTRITION'],
      image: '/products/l-citrulline.jpg',
      shortDesc: 'Supports longer workouts, less soreness, better recovery.',
      fullDesc: 'Supports longer workouts, less soreness, better recovery. Alleviate the onset of fatigue during intense training. Aids blood flow to muscles during exercise. Helps improve urea cycle disorders. Helps improve erectile dysfunction.'
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
      
      <div className="pt-28">

        {/* Hero Banner */}
        <section className="relative h-96 md:h-[460px] overflow-hidden bg-white">
          <div className="grid md:grid-cols-2 h-full">
            <div className="hidden md:block relative">
              <img 
                src="/products-hero.jpg" 
                alt="Products" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative bg-white overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 transform -skew-x-12 origin-top-left scale-150"></div>
              <h1 className="relative z-10 text-6xl md:text-8xl font-black text-white uppercase tracking-wider">
                PRODUCTS
              </h1>
            </div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Explore our diverse range of nutraceutical products designed to enhance your health and vitality. From vitamins and supplements to specialized formulations for targeted health benefits, each product is crafted to empower you on your journey to better health.
            </p>
          </div>
        </section>

        {/* Category Tabs and Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            
            {/* Header with Title and Filters */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8">
                Our<br className="md:hidden" /> Products
              </h2>
              
              {/* Category Filter Buttons - Horizontal Layout */}
              <div className="flex flex-wrap gap-3 items-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                      activeCategory === cat
                        ? 'bg-yellow-400 text-gray-900 shadow-md'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-yellow-400 hover:text-yellow-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden hover:shadow-xl transition group"
                >
                  <div className="h-72 bg-gray-50 flex items-center justify-center p-6">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-700 mb-3">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {expandedProducts.includes(product.id) 
                        ? product.fullDesc 
                        : product.shortDesc}
                    </p>
                    <button 
                      onClick={() => toggleExpand(product.id)}
                      className="text-green-500 font-semibold hover:underline text-sm"
                    >
                      {expandedProducts.includes(product.id) ? 'Read less' : 'Read more'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-6 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
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
