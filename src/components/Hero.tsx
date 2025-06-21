const Hero = () => {
  return (
    <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The Innovation Leader in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Global Crypto Mining
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Bayminer.io delivers unrivaled results through automated cloud mining. 
              Start earning passive income from cryptocurrency mining with zero technical 
              experience required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                CREATE AN ACCOUNT
              </button>
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                VIEW CONTRACTS
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-slate-700">
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

          {/* Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <img 
                src="/images/blockchain_3d.jpg" 
                alt="Crypto Mining Technology"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-400/20 rounded-2xl"></div>
            </div>
            
            {/* Floating elements - hidden on mobile, shown on sm and up */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg shadow-lg z-20">
              <div className="text-sm font-semibold">Daily Income</div>
              <div className="text-lg font-bold">$0.60+</div>
            </div>
            
            <div className="hidden sm:block absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-20">
              <div className="text-sm font-semibold">Up to 5%</div>
              <div className="text-lg font-bold">Referral Commission</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
