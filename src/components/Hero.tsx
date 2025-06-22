export default function Hero() {
  return (
    <section className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up-1">
              The Innovation Leader in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Global Crypto Mining
              </span>
            </h1>
            
            <p className="text-base sm:text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up-2">
              Bayminer.io delivers unrivaled results through automated cloud mining. 
              Start earning passive income from cryptocurrency mining with zero technical 
              experience required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up-3">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                CREATE AN ACCOUNT
              </button>
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25">
                VIEW CONTRACTS
              </button>
            </div>

            {/* Key Stats */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 py-8 transition-all duration-300 hover:scale-102 hover:shadow-2xl animate-fade-in-up-4">
              <div className="grid grid-cols-3 gap-6 sm:gap-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-2">$15</div>
                  <div className="text-sm text-gray-400">Sign-up Bonus</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 mb-2">10M+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400 mb-2">180+</div>
                  <div className="text-sm text-gray-400">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative z-10">
              <img 
                src="/images/HeroImage.png" 
                alt="Crypto Mining Technology"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-400/20 rounded-2xl"></div>
            </div>
            
            {/* Floating elements - hidden on mobile, shown on sm and up */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg shadow-lg z-20 animate-float">
              <div className="text-sm font-semibold">Daily Income</div>
              <div className="text-lg font-bold">$0.60+</div>
            </div>
            
            <div className="hidden sm:block absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-20 animate-float-delayed">
              <div className="text-sm font-semibold">Up to 5%</div>
              <div className="text-lg font-bold">Referral Commission</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}