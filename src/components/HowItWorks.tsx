import { UserPlus, CreditCard, DollarSign } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-blue-400" />,
      title: "Sign Up",
      description: "Create your free account and receive a $15 welcome bonus to start mining immediately.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <CreditCard className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-green-400" />,
      title: "Choose Your Contract",
      description: "Select from our range of mining contracts, from 1-day trials to 53-day ultra plans.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-orange-400" />,
      title: "Start Earning",
      description: "Watch your daily profits accumulate automatically with transparent income tracking.",
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-dark-blue-bg">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Start earning passive income from cryptocurrency mining in three simple steps. 
              No technical knowledge required.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8">
          {steps.map((step, index) => (
            <AnimateOnScroll 
              key={index}
              animation="scale-up"
              delay={index * 200}
            >
              <div className="relative group">
                {/* Connector Line: Adjusted top position for smaller icon/circle */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-600 to-transparent z-0 transform translate-x-4"></div>
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step Number Circle */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r ${step.color} mb-4 sm:mb-6 mx-auto group-hover:animate-pulse-glow transition-all duration-300`}>
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4 sm:mb-6 group-hover:animate-float">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={600}>
          <div className="text-center mt-10 sm:mt-12 lg:mt-16">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-base sm:px-10 sm:py-4 sm:text-lg lg:px-12 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get Started Now
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

export default HowItWorks