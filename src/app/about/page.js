import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function About() {
  return (
    <>
      <Navbar />

      {/* Add padding for fixed navbar - Responsive */}
      <div className="pt-20 sm:pt-24 md:pt-28">


        {/* Hero Banner - Fully Responsive */}
        <section className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {/* Left - Gradient Background */}
            <div className="flex items-center justify-center px-6 sm:px-8 md:px-12" style={{ background: 'linear-gradient(135deg, #73C7E3, #89FF9F)' }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-wider">
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


        {/* Company Overview - Responsive */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 inline-flex items-center gap-2 sm:gap-3 justify-center">
                Company Overview
                <span className="text-2xl sm:text-3xl">📋</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center">
              Welcome to Nutripeak, your trusted partner in health and wellness. Established with a passion for promoting holistic well-being, we specialize in creating premium nutraceutical products that harness the power of natural ingredients to support a healthier lifestyle.
            </p>
          </div>
        </section>


        {/* Who We Are - Responsive */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 inline-flex items-center gap-2 sm:gap-3 justify-center">
                Who We Are
                <span className="text-2xl sm:text-3xl">👥</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center">
              At Nutripeak, we blend scientific innovation with the wisdom of nature to develop cutting-edge nutraceutical formulations. Our dedicated team of researchers, nutritionists, and health experts is committed to delivering products that meet the highest standards of quality, efficacy, and safety.
            </p>
          </div>
        </section>


        {/* Our Mission - Responsive */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 inline-flex items-center gap-2 sm:gap-3 justify-center">
                Our mission
                <span className="text-2xl sm:text-3xl">🚀</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center mb-8 sm:mb-10 md:mb-12">
              At Nutripeak, our mission is to empower individuals to achieve optimal health and wellness through natural, science-backed nutraceutical solutions. We believe that everyone deserves access to high-quality, effective supplements that support a balanced lifestyle and enhance overall well-being.
            </p>


            {/* Mission Values Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-x-16 md:gap-y-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Quality',
                  desc: 'We are committed to sourcing the finest ingredients and adhering to rigorous quality standards to ensure the purity and potency of our products.'
                },
                {
                  title: 'Transparency',
                  desc: 'Providing clear and honest information about our products, their ingredients, and their benefits, so our customers can make informed decisions.'
                },
                {
                  title: 'Innovation',
                  desc: 'Continuously researching and developing cutting-edge formulations based on the latest scientific discoveries in nutrition and health.'
                },
                {
                  title: 'Customer Care',
                  desc: 'Dedication to exceptional customer service, supporting our customers on their journey to better health every step of the way.'
                }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className="text-xl sm:text-2xl" style={{ color: '#89FF9F' }}>✓</span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 pl-8 sm:pl-10 text-sm sm:text-base mt-2 sm:mt-3">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Our Commitment - Responsive */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ background: 'linear-gradient(to bottom, #f0fdf4, #ffffff)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-3 sm:mb-4" style={{ color: '#059669' }}>
                OUR COMMITMENT
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Our supplements are meticulously formulated with a focus on quality, efficacy, and innovation, ensuring that you receive the best possible results.
              </p>
            </div>


            {/* Commitment Cards - Responsive */}
            {/* Commitment Cards - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  image: '/commitment-1.jpeg',
                  title: 'QUALITY ASSURANCE',
                  desc: 'We adhere to strict quality control processes from ingredient sourcing to manufacturing, ensuring that every product is pure, potent, and reliable.',
                  marginTop: 'mt-2 sm:mt-1'  // Individual margin for card 1
                },
                {
                  image: '/commitment-2.jpeg',
                  title: 'INNOVATION',
                  desc: 'We continuously explore the latest advancements in nutritional science to create products that address diverse health needs and support optimal wellness.',
                  marginTop: 'mt-3 sm:mt-10'  // Individual margin for card 2
                },
                {
                  image: '/commitment-3.jpeg',
                  title: 'TRANSPARENCY',
                  desc: 'We believe in transparency. We provide clear, comprehensive information about our ingredients, formulations, and manufacturing practices so you can make informed choices.',
                  marginTop: 'mt-4 sm:mt-9'  // Individual margin for card 3
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col">
                  <div className="h-48 sm:h-56 md:h-64 flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 text-center flex flex-col flex-grow">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">{item.title}</h3>
                    <p className={`text-gray-600 leading-relaxed text-sm sm:text-base flex-grow ${item.marginTop}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* Additional Sections Grid - Responsive */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-[2048px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

              {[
                {
                  icon: '📋',
                  title: 'Quality & compliance',
                  bg: '#dbeafe',
                  desc: 'As the leading manufacturer of nutraceuticals, we consistently place a premium on quality control and regulatory compliance. We adhere to good manufacturing procedures (GMP) and have our goods approved by WHO, ISO, and other regulatory bodies.'
                },
                {
                  icon: '👥',
                  title: 'Skilled & competitive staff',
                  bg: '#d1fae5',
                  desc: 'We have a team of professional scientists, researchers, and professionals with nutraceutical knowledge in areas like formulation, testing, and quality assurance. They have a deep understanding of how to maintain the efficiency and quality of the things throughout time till they are supplied to the users.'
                },
                {
                  icon: '📦',
                  title: 'Best distribution network',
                  bg: '#fef3c7',
                  desc: 'The best distribution network allows us to reach a wide client base swiftly and effectively. It enables us to deliver orders to our clients in Chennai and across India as quickly as possible.'
                },
                {
                  icon: '🌐',
                  title: 'Research & development team',
                  bg: '#e0e7ff',
                  desc: 'We invest extensively in R&D to provide innovative solutions that address specific health issues. As a result, our company offers a varied product range with great formula.'
                }
              ].map((item, i) => (
                <div key={i} className="rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8" style={{ backgroundColor: item.bg }}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl">{item.icon}</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-3 sm:mt-4">
                    {item.desc}
                  </p>
                </div>
              ))}


            </div>
          </div>
        </section>


        {/* Our Values - Responsive */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 inline-flex items-center gap-2 sm:gap-3 justify-center mb-4 sm:mb-6">
                Our Values
                <span className="text-2xl sm:text-3xl">🤝</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                At Nutripeak, our values are the cornerstone of everything we do. They guide our decisions, actions, & relationships as we strive to make a positive impact on the health & wellness of our customers & communities.
              </p>
            </div>


            {/* Values Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-x-16 md:gap-y-10 max-w-5xl mx-auto">
              {[
                {
                  title: 'Quality',
                  desc: 'We are committed to excellence in every product we offer. From sourcing the finest raw materials to rigorous testing and quality control measures, we ensure that our products meet the highest standards of purity, potency, & safety.'
                },
                {
                  title: 'Transparency',
                  desc: 'We believe in transparency & honesty. We provide clear, accurate information about our products, ingredients, & manufacturing processes so that our customers can make informed choices for their health. benefits, so our customers can make informed decisions.'
                },
                {
                  title: 'Innovation',
                  desc: 'We embrace innovation as a driving force behind our mission. By staying at the forefront of nutraceutical research & development, we continually seek new ways to improve & enhance the efficacy of our products.'
                },
                {
                  title: 'Customer Focus',
                  desc: 'Our customers are at the heart of everything we do. We are dedicated to providing exceptional service, listening to feedback, & continually improving to meet their evolving needs & expectations.'
                }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl" style={{ color: '#89FF9F' }}>✓</span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-8 sm:pl-10 text-sm sm:text-base mt-2 sm:mt-3">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Our Vision - Responsive */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 inline-flex items-center gap-2 sm:gap-3 justify-center mb-4 sm:mb-6">
                Our Vision
                <span className="text-2xl sm:text-3xl">🏢</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                At Nutripeak, our vision is to lead the nutraceutical industry by pioneering innovative health solutions that enhance the well-being of our customers worldwide. We envision a future where natural, science-backed supplements are integral to every individual's journey towards optimal health and vitality.
              </p>
            </div>


            {/* Vision Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto">
              {[
                {
                  title: 'Innovation',
                  desc: 'Continuously pushing the boundaries of nutraceutical research and development to introduce ground-breaking products that address evolving health needs.'
                },
                {
                  title: 'Global Impact',
                  desc: 'Expanding our reach to positively impact communities globally, promoting wellness and contributing to a healthier planet.'
                },
                {
                  title: 'Education',
                  desc: 'Empowering individuals with knowledge about the benefits of nutraceuticals and supporting informed choices for healthier lifestyles.'
                }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl" style={{ color: '#89FF9F' }}>✓</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-2 sm:mt-3">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


      </div>


      <Footer />
    </>
  )
}
