import { UserPlus, CreditCard, DollarSign } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-16 h-16 text-blue-400" />,
      title: "Sign Up",
      description: "Create your free account and receive a $15 welcome bonus to start mining immediately.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <CreditCard className="w-16 h-16 text-green-400" />,
      title: "Choose Your Contract",
      description: "Select from our range of mining contracts, from 1-day trials to 53-day ultra plans.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <DollarSign className="w-16 h-16 text-orange-400" />,
      title: "Start Earning",
      description: "Watch your daily profits accumulate automatically with transparent income tracking.",
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start earning passive income from cryptocurrency mining in three simple steps. 
            No technical knowledge required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-slate-600 to-transparent z-0 transform translate-x-4"></div>
              )}
              
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${step.color} mb-6 mx-auto`}>
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
