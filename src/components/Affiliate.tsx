import { Users, TrendingUp, Award } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const Affiliate = () => {
  const commissionLevels = [
    { level: 1, percentage: "3%", color: "from-blue-600 to-blue-700" },
    { level: 2, percentage: "1.5%", color: "from-green-600 to-green-700" },
    { level: 3, percentage: "0.5%", color: "from-orange-600 to-orange-700" }
  ]

  const benefits = [
    {
      icon: <Users className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
      title: "Multi-Level Commissions",
      description: "Earn from three levels of referrals with lifetime commissions"
    },
    {
      icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
      title: "Monthly Bonuses",
      description: "Additional salary tiers based on number of active referrals"
    },
    {
      icon: <Award className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
      title: "Social Media Rewards",
      description: "Extra bounties for promoting Bayminer on social platforms"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Invite and Build Your Team to Earn More
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Join our profitable affiliate program and earn lifetime commissions 
              from your referral network. Start building your passive income stream today.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Commission Levels */}
        <AnimateOnScroll animation="scale-up" delay={200}>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 lg:space-x-8 gap-8 sm:gap-0 mb-10 sm:mb-12 lg:mb-16">
            {commissionLevels.map((level, index) => (
              <div key={index} className="relative group">
                {/* Connector Line - Visible only on sm screens and up */}
                {index < commissionLevels.length - 1 && (
                  <div className="hidden sm:block absolute top-1/2 left-full w-12 lg:w-16 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500 transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center mb-4 mx-auto shadow-2xl border-4 border-slate-700 hover-lift group-hover:animate-pulse-glow transition-all duration-300`}>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                        {level.percentage}
                      </div>
                      <div className="text-sm text-gray-200">
                        Level {level.level}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <p className="text-lg text-gray-300 mb-8">
              You'll receive <span className="text-green-400 font-semibold">5%</span> of each deposit 
              from the first-level participants. Moreover, you can earn commissions from referral earnings across
              <span className="text-blue-400 font-semibold"> three levels</span>:
              <span className="text-blue-400 font-semibold">3%</span> (Level 1),
              <span className="text-green-400 font-semibold">1.5%</span> (Level 2), and
              <span className="text-orange-400 font-semibold">0.5%</span> (Level 3).
            </p>
            
            <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 text-base sm:px-10 sm:py-4 sm:text-lg lg:px-12 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
              Start Building
            </button>
          </div>
        </AnimateOnScroll>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll 
              key={index}
              animation="scale-up"
              delay={index * 150}
            >
              <div className="text-center p-6 sm:p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover-lift group">
                <div className="flex justify-center mb-6 group-hover:animate-float">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Affiliate