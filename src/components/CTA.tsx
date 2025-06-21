import { CheckCircle, Gift, DollarSign, Shield } from 'lucide-react'

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
        <div className="bg-gray-100 rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
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
                  <div key={index} className="flex items-start space-x-3">
                    {benefit.icon}
                    <span className="text-gray-700 leading-relaxed">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Start Mining Today
                </button>
                <button className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-lg font-semibold transition-all duration-300">
                  View Contracts
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-300">
                <p className="text-base sm:text-lg text-cyan-600 font-semibold flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Be part of our growing company! →
                </p>
              </div>
            </div>

            {/* Visual/Stats */}
            <div className="space-y-8 mt-8 lg:mt-0">
              <div className="relative">
                <img 
                  src="/images/crypto_growth.jpeg" 
                  alt="Crypto Growth"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-400/20 rounded-2xl"></div>
              </div>

              {/* Bonus Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-200 border border-gray-300 rounded-xl p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">$15</div>
                  <div className="text-sm text-gray-700">Welcome Bonus</div>
                </div>
                <div className="bg-gray-200 border border-gray-300 rounded-xl p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">$0.60</div>
                  <div className="text-sm text-gray-700">Daily Check-in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA