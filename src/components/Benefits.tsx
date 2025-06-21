import { CheckCircle, Leaf, Clock, Award } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import CountingNumber from './CountingNumber'

const Benefits = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: "Stable Daily Profits",
      description: "Guaranteed daily returns with transparent income tracking and reliable payouts."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-400" />,
      title: "Eco-Friendly Mining",
      description: "Powered by renewable energy sources, reducing environmental impact while maximizing efficiency."
    },
    {
      icon: <Clock className="w-8 h-8 text-green-400" />,
      title: "24/7 Operations",
      description: "Continuous mining operations with professional monitoring and maintenance."
    },
    {
      icon: <Award className="w-8 h-8 text-green-400" />,
      title: "Industry Leading",
      description: "Founded in 2017, registered in the UK as BODIAM CAPITAL LTD with proven track record."
    }
  ]

  const stats = [
    { value: 2017, label: "Founded", suffix: "" },
    { value: 10, label: "Users Worldwide", suffix: "M+" },
    { value: 180, label: "Countries", suffix: "+" },
    { value: 99.9, label: "Uptime", suffix: "%" }
  ]

  return (
    <section id="plans" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Bayminer?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the advantages of professional cloud mining with industry-leading 
              technology, security, and profitability.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Stats Section */}
        <AnimateOnScroll animation="scale-up" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center hover-lift">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-2">
                  <CountingNumber 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll 
              key={index}
              animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={index * 100}
            >
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-lg hover:border-green-400/50 transition-all duration-300 hover-lift">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mining Hardware Section */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200 hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  State-of-the-Art Mining Hardware
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-sm sm:text-base text-gray-700">Latest ASIC miners from Bitmain & Canaan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-sm sm:text-base text-gray-700">High-performance GPU miners from Nvidia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-sm sm:text-base text-gray-700">Partnerships with major mining pools</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-sm sm:text-base text-gray-700">Enterprise-grade security protocols</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 text-base sm:text-lg sm:px-8 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                  Explore Mining Plans
                </button>
              </div>
              <div className="relative mt-8 lg:mt-0">
                <img 
                  src="/images/mining_rigs.jpg" 
                  alt="Mining Hardware"
                  className="w-full h-auto rounded-2xl shadow-2xl hover-scale"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/10 to-blue-400/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

export default Benefits