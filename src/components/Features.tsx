import { Shield, Zap, Globe, TrendingUp } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: "Automated Mining",
      description: "State-of-the-art ASIC and GPU miners with fully automated operations"
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: "Secure Platform",
      description: "EV SSL encryption, DDoS protection, and McAfee security protocols"
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-400" />,
      title: "Global Reach",
      description: "Operating in 180+ countries with 24/7 customer support"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-cyan-400" />,
      title: "Proven Profitability",
      description: "Consistent daily returns with transparent income tracking"
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Why Bayminer?
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Bayminer has transformed into an institutional-grade cloud mining platform, 
              building profitable and secure mining solutions for cryptocurrency investors. 
              Our team blends time-tested mining expertise with cutting-edge technology 
              and renewable energy efficiency.
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              The Bayminer platform seamlessly allows today's investors to transition 
              into the digitally-powered global economy of the future, delivering 
              unrivaled results in crypto mining profitability.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              GET STARTED
            </button>
          </div>

          {/* Visual */}
          <div className="relative">
            <img 
              src="/images/mining_datacenter.jpg" 
              alt="Mining Data Center"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-green-400/10 rounded-2xl"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
