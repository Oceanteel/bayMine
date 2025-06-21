import { CheckCircle, Leaf, Clock, Award } from 'lucide-react'

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
    { value: "2017", label: "Founded" },
    { value: "10M+", label: "Users Worldwide" },
    { value: "180+", label: "Countries" },
    { value: "99.9%", label: "Uptime" }
  ]

  return (
    <section id="plans" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose Bayminer?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the advantages of professional cloud mining with industry-leading 
            technology, security, and profitability.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-lg hover:border-green-400/50 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mining Hardware Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-600">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                State-of-the-Art Mining Hardware
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-sm sm:text-base text-gray-300">Latest ASIC miners from Bitmain & Canaan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-sm sm:text-base text-gray-300">High-performance GPU miners from Nvidia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-sm sm:text-base text-gray-300">Partnerships with major mining pools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-sm sm:text-base text-gray-300">Enterprise-grade security protocols</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 text-base sm:text-lg sm:px-8 rounded-lg font-semibold transition-all duration-300">
                Explore Mining Plans
              </button>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img 
                src="/images/mining_rigs.jpg" 
                alt="Mining Hardware"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/10 to-blue-400/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
