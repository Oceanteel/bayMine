import { Shield, Zap, Globe, TrendingUp } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
      title: "Automated Mining",
      description: "State-of-the-art ASIC and GPU miners with fully automated operations"
    },
    {
      icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
      title: "Secure Platform",
      description: "EV SSL encryption, & DDoS protection by Cloudflare"
    },
    {
      icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
      title: "Global Reach",
      description: "Operating in 180+ countries with 24/7 customer support"
    },
    {
      icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
      title: "Proven Profitability",
      description: "Consistent daily returns with transparent income tracking"
    }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Content */}
          <AnimateOnScroll animation="slide-left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Bayminer?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Bayminer has transformed into an institutional-grade cloud mining platform, 
                building profitable and secure mining solutions for cryptocurrency investors. 
                Our team blends time-tested mining expertise with cutting-edge technology 
                and renewable energy efficiency.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The Bayminer platform seamlessly allows today's investors to transition 
                into the digitally-powered global economy of the future, delivering 
                unrivaled results in crypto mining profitability.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 text-base sm:text-lg sm:px-8 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                GET STARTED
              </button>
            </div>
          </AnimateOnScroll>

          {/* Visual */}
          <AnimateOnScroll animation="slide-right" delay={200}>
            <div className="relative mt-8 lg:mt-0">
              <img 
                src="/images/mining-rig.webp" 
                alt="Mining Hardware"
                className="w-full h-auto rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-green-400/10 rounded-2xl"></div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <AnimateOnScroll 
              key={index}
              animation="scale-up"
              delay={index * 100}
            >
              <div className="bg-gray-100 p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-cyan-400/50 transition-all duration-300 hover-lift group">
                <div className="mb-6 group-hover:animate-pulse">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features