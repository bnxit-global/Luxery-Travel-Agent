import { ChevronDown, Globe, Menu, Phone, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RoutePath } from '../types'
import Button from './Button'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setDropdownOpen(false)
  }, [location])

  const mainLinks = [
    { label: 'Home', path: RoutePath.HOME },
    { label: 'About', path: RoutePath.ABOUT },
    { label: 'Corporate Travel', path: RoutePath.CORPORATE },
    { label: 'Contact', path: RoutePath.CONTACT },
  ]

  const dropdownLinks = [
    { label: 'Destinations', path: RoutePath.DESTINATIONS },
    { label: 'Offers', path: RoutePath.OFFERS },
    { label: 'The Disney Page', path: RoutePath.DISNEY },
    { label: 'Forms', path: RoutePath.FORMS },
    { label: 'Blog', path: RoutePath.BLOG },
    { label: 'Book Online', path: RoutePath.BOOK_ONLINE },
    { label: 'My Subscriptions', path: RoutePath.SUBSCRIPTIONS },
    { label: 'Notifications', path: RoutePath.NOTIFICATIONS },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-white/10 py-3'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <Link
            to={RoutePath.HOME}
            className="flex-shrink-0 flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-luxury-gold to-yellow-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-luxury-gold/50 transition-all duration-500">
              <Globe className="text-black w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-luxury-gold transition-colors">
                LAP OF LUXURY
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Apollo Beach, FL
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-widest hover:text-luxury-gold transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? 'text-luxury-gold'
                    : 'text-gray-300'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.path ? 'w-full' : ''
                  }`}
                ></span>
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-luxury-gold transition-colors group py-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                More{' '}
                <ChevronDown className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <div className="absolute right-0 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl border border-white/10 w-64 p-2">
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-luxury-gold transition-colors rounded-lg"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:8004626807"
              className="text-white hover:text-luxury-gold transition-colors flex items-center text-sm font-medium"
            >
              <Phone className="w-4 h-4 mr-2" /> 800-462-6807
            </a>
            <Link to="/register">
              <Button size="sm" variant="gold" className="">
                Plan My Trip
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-luxury-gold focus:outline-none"
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-transform duration-500 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-10 overflow-y-auto">
          {mainLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block py-4 text-3xl font-serif text-white hover:text-luxury-gold border-b border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <h3 className="text-gray-500 uppercase text-xs tracking-widest mb-4">
              More Options
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {dropdownLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg text-gray-400 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-800">
                <Link to="/register">
                  <Button variant="gold" className="w-full">
                    Plan My Trip
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
