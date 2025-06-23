import { CheckCircle, Gift, DollarSign, Shield } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const CTA = () => {
  const benefits = [
    {
      icon: <Gift className="w-6 h-6 text-green-400" />,
      text: "Interest starting from 0.6% up to 300% Daily"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      text: "Low $20 investment startup cost"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      text: "Low $20 Minimum withdrawal for USD and Low $20 minimum for crypto"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      text: "Guaranteed 24/7 Customer Support"
    }
  ]

  return (
    <section id="support" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <div className="bg-gray-100 rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200 hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <AnimateOnScroll animation="slide-left" delay={200}>
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Create Your Account Now!
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-700 mb-8">
                    Invest with us and take advantage of our unique mining offering. 
                    Start earning passive income from cryptocurrency mining today.
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <AnimateOnScroll 
                        key={index}
                        animation="slide-left"
                        delay={300 + index * 100}
                      >
                        <div className="flex items-start space-x-3 group">
                          <div className="group-hover:animate-pulse">
                            {benefit.icon}
                          </div>
                          <span className="text-gray-700 leading-relaxed">
                            {benefit.text}
                          </span>
                        </div>
                      </AnimateOnScroll>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://dash.bayminer.io/register"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-center"
                    >
                      Start Mining Today
                    </a>
                    <a
                      href="https://dash.bayminer.io/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center"
                    >
                      View Contracts
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-300">
                    <p className="text-base sm:text-lg text-cyan-600 font-semibold flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Be part of our growing company! →
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Visual/Stats */}
              <AnimateOnScroll animation="slide-right" delay={400}>
                <div className="space-y-8 mt-8 lg:mt-0">
                  <div className="relative">
                    <img 
                      src="/images/crypto_growth.jpeg" 
                      alt="Crypto Growth"
                      className="w-full h-auto rounded-2xl shadow-2xl hover-scale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-400/20 rounded-2xl"></div>
                  </div>

                  {/* Bonus Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-gray-200 border border-gray-300 rounded-xl p-4 sm:p-6 text-center hover-lift group">
                      <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2 group-hover:animate-pulse">$15</div>
                      <div className="text-sm text-gray-700">Welcome Bonus</div>
                    </div>
                    <div className="bg-gray-200 border border-gray-300 rounded-xl p-4 sm:p-6 text-center hover-lift group">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2 group-hover:animate-pulse">$0.60</div>
                      <div className="text-sm text-gray-700">Daily Check-in</div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

export default CTA