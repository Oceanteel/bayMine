import { Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const Footer = () => {
  const paymentMethods = [
    { name: "Bitcoin", color: "text-orange-400" },
    { name: "Ethereum", color: "text-blue-400" },
    { name: "Bitcoin Cash", color: "text-blue-500" },
    { name: "Tether USDT", color: "text-green-500" },
    { name: "USDC Coin", color: "text-green-400" },
    { name: "Binance Coin", color: "text-red-400" }
  ]

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Mining Plans", href: "#plans" },
    { name: "Affiliate Program", href: "#affiliate" },
    { name: "FAQ", href: "#faq" },
    { name: "Support", href: "#support" }
  ]

  const accountLinks = [
    { name: "Sign In", href: "#signin" },
    { name: "Register", href: "#register" },
    { name: "User Guide", href: "#guide" },
    { name: "VIP Rewards", href: "#vip" },
    { name: "App Download", href: "#app" }
  ]

  return (
    <footer id="faq" style={{ backgroundColor: 'rgb(0, 5, 52)' }} className="border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <AnimateOnScroll animation="fade-up">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="/bayminer-logo.webp" 
                  alt="Bayminer.io" 
                  className="h-10 w-auto mb-4"
                />
                <p className="text-gray-300 text-sm leading-relaxed">
                  The innovation leader in global crypto mining, delivering unrivaled results 
                  through automated cloud mining solutions.
                </p>
              </div>
              
              {/* Company Credentials */}
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Registered in UK</span>
                </div>
                <div>
                  <strong className="text-white">BODIAM CAPITAL LTD</strong>
                </div>
                <div>Company #: 11950626</div>
                <div>Founded in 2017</div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Quick Links */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Account */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div>
              <h3 className="text-white font-semibold mb-4">Account</h3>
              <ul className="space-y-2">
                {accountLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Contact & Social */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>support@bayminer.io</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>24/7 Customer Support</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 mb-6">
                <a 
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Payment Methods */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="border-t border-slate-800 pt-6 mt-6 sm:pt-8 sm:mt-8">
            <h4 className="text-white font-semibold mb-4 text-center">Accepted Payment Methods</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {paymentMethods.map((method, index) => (
                <div 
                  key={index}
                  className={`px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 ${method.color} font-medium text-sm hover-lift transition-all duration-300`}
                >
                  {method.name}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Bottom Bar */}
        <AnimateOnScroll animation="fade-up" delay={500}>
          <div className="border-t border-slate-800 pt-6 mt-6 sm:pt-8 sm:mt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 Bayminer.io. All rights reserved.
              </div>
              <div className="flex flex-col space-y-2 text-sm sm:flex-row sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Risk Disclosure
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  )
}

export default Footer