import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      
      {/* Add padding for fixed navbar */}
      <div className="pt-28">

        {/* Hero Banner */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <div className="grid md:grid-cols-2 h-full">
            {/* Left - Cyan Background */}
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center px-12">
              <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wider">
                ABOUT US
              </h1>
            </div>
            {/* Right - Image */}
            <div className="hidden md:block">
              <img 
                src="/about-hero.jpg" 
                alt="About Us" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 inline-flex items-center gap-3 justify-center">
                Company Overview
                <span className="text-3xl">📋</span>
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
              Welcome to Nutripeak, your trusted partner in health and wellness. Established with a passion for promoting holistic well-being, we specialize in creating premium nutraceutical products that harness the power of natural ingredients to support a healthier lifestyle.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 inline-flex items-center gap-3 justify-center">
                Who We Are
                <span className="text-3xl">👥</span>
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
              At Nutripeak, we blend scientific innovation with the wisdom of nature to develop cutting-edge nutraceutical formulations. Our dedicated team of researchers, nutritionists, and health experts is committed to delivering products that meet the highest standards of quality, efficacy, and safety.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 inline-flex items-center gap-3 justify-center">
                Our mission
                <span className="text-3xl">🚀</span>
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center mb-12">
              At Nutripeak, our mission is to empower individuals to achieve optimal health and wellness through natural, science-backed nutraceutical solutions. We believe that everyone deserves access to high-quality, effective supplements that support a balanced lifestyle and enhance overall well-being.
            </p>

            {/* Mission Values Grid */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-yellow-500 text-2xl">✓</span>
                  <h3 className="text-xl font-bold text-gray-700">Quality</h3>
                </div>
                <p className="text-gray-600 pl-10">
                  We are committed to sourcing the finest ingredients and adhering to rigorous quality standards to ensure the purity and potency of our products.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-yellow-500 text-2xl">✓</span>
                  <h3 className="text-xl font-bold text-gray-700">Transparency</h3>
                </div>
                <p className="text-gray-600 pl-10">
                  Providing clear and honest information about our products, their ingredients, and their benefits, so our customers can make informed decisions.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-yellow-500 text-2xl">✓</span>
                  <h3 className="text-xl font-bold text-gray-700">Innovation</h3>
                </div>
                <p className="text-gray-600 pl-10">
                  Continuously researching and developing cutting-edge formulations based on the latest scientific discoveries in nutrition and health.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-yellow-500 text-2xl">✓</span>
                  <h3 className="text-xl font-bold text-gray-700">Customer Care</h3>
                </div>
                <p className="text-gray-600 pl-10">
                  Dedication to exceptional customer service, supporting our customers on their journey to better health every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-yellow-50 to-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 uppercase mb-4">
                OUR COMMITMENT
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Our supplements are meticulously formulated with a focus on quality, efficacy, and innovation, ensuring that you receive the best possible results.
              </p>
            </div>

            {/* Commitment Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-64">
                  <img src="/commitment-1.jpg" alt="Quality Assurance" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">QUALITY ASSURANCE</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We adhere to strict quality control processes from ingredient sourcing to manufacturing, ensuring that every product is pure, potent, and reliable.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-64">
                  <img src="/commitment-2.jpg" alt="Innovation" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">INNOVATION</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We continuously explore the latest advancements in nutritional science to create products that address diverse health needs and support optimal wellness.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-64">
                  <img src="/commitment-3.jpg" alt="Transparency" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">TRANSPARENCY</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in transparency. We provide clear, comprehensive information about our ingredients, formulations, and manufacturing practices so you can make informed choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Sections Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Quality & Compliance */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📋</span>
                  <h3 className="text-2xl font-bold text-gray-700">Quality & compliance</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  As the leading manufacturer of nutraceuticals, we consistently place a premium on quality control and regulatory compliance. We adhere to good manufacturing procedures (GMP) and have our goods approved by WHO, ISO, and other regulatory bodies.
                </p>
              </div>

              {/* Skilled & Competitive Staff */}
              <div className="bg-pink-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">👥</span>
                  <h3 className="text-2xl font-bold text-gray-700">Skilled & competitive staff</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We have a team of professional scientists, researchers, and professionals with nutraceutical knowledge in areas like formulation, testing, and quality assurance. They have a deep understanding of how to maintain the efficiency and quality of the things throughout time till they are supplied to the users.
                </p>
              </div>

              {/* Best Distribution Network */}
              <div className="bg-yellow-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📦</span>
                  <h3 className="text-2xl font-bold text-gray-700">Best distribution network</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  The best distribution network allows us to reach a wide client base swiftly and effectively. It enables us to deliver orders to our clients in Chennai and across India as quickly as possible.
                </p>
              </div>

              {/* Research & Development Team */}
              <div className="bg-purple-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🌐</span>
                  <h3 className="text-2xl font-bold text-gray-700">Research & development team</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We invest extensively in R&D to provide innovative solutions that address specific health issues. As a result, our company offers a varied product range with great formula.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 inline-flex items-center gap-3 justify-center mb-6">
                Our Values
                <span className="text-3xl">🤝</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                At Nutripeak, our values are the cornerstone of everything we do. They guide our decisions, actions, & relationships as we strive to make a positive impact on the health & wellness of our customers & communities.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-yellow-500 text-2xl">✓</span>
                  <h3 className="text-xl font-bold text-gray-700">Quality</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-10">
                  We are committed to excellence in every product we offer. From sourcing the finest raw materials to rigorous testing and quality control measures, we ensure that our products meet the highest standards of purity, potency, & safety.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-yellow-500 text-2xl">✓</span>
                  <h3 className="text-xl font-bold text-gray-700">Transparency</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-10">
                  We believe in transparency & honesty. We provide clear, accurate information about our products, ingredients, & manufacturing processes so that our customers can make informed choices for their health. benefits, so our customers can make informed decisions.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-yellow-500 text-2xl">✓</span>
                  <h3 className="text-xl font-bold text-gray-700">Innovation</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-10">
                  We embrace innovation as a driving force behind our mission. By staying at the forefront of nutraceutical research & development, we continually seek new ways to improve & enhance the efficacy of our products.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-yellow-500 text-2xl">✓</span>
                  <h3 className="text-xl font-bold text-gray-700">Customer Focus</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-10">
                  Our customers are at the heart of everything we do. We are dedicated to providing exceptional service, listening to feedback, & continually improving to meet their evolving needs & expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 inline-flex items-center gap-3 justify-center mb-6">
                Our Vision
                <span className="text-3xl">🏢</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                At Nutripeak, our vision is to lead the nutraceutical industry by pioneering innovative health solutions that enhance the well-being of our customers worldwide. We envision a future where natural, science-backed supplements are integral to every individual's journey towards optimal health and vitality.
              </p>
            </div>

            {/* Vision Grid */}
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <span className="text-yellow-500 text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-3">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Continuously pushing the boundaries of nutraceutical research and development to introduce ground-breaking products that address evolving health needs.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <span className="text-yellow-500 text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-3">Global Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Expanding our reach to positively impact communities globally, promoting wellness and contributing to a healthier planet.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <span className="text-yellow-500 text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-3">Education</h3>
                <p className="text-gray-600 leading-relaxed">
                  Empowering individuals with knowledge about the benefits of nutraceuticals and supporting informed choices for healthier lifestyles.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}
