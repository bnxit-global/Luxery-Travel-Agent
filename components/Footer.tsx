import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-3">
               <div className="w-8 h-8 bg-luxury-gold rounded flex items-center justify-center text-black">
                  <Globe className="w-5 h-5" />
               </div>
               <span className="font-serif text-xl font-bold">Lap of Luxury</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Platinum Concierge Luxury Travel Planning. Based in Apollo Beach, FL.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-luxury-gold hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-luxury-gold hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-luxury-gold hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-luxury-gold transition-colors">About</Link></li>
              <li><Link to="/corporate-travel" className="hover:text-luxury-gold transition-colors">Corporate Travel</Link></li>
              <li><Link to="/destinations" className="hover:text-luxury-gold transition-colors">Destinations</Link></li>
              <li><Link to="/offers" className="hover:text-luxury-gold transition-colors">Offers</Link></li>
              <li><Link to="/disney" className="hover:text-luxury-gold transition-colors">Disney</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/blog" className="hover:text-luxury-gold transition-colors">Blog</Link></li>
              <li><Link to="/forms" className="hover:text-luxury-gold transition-colors">Client Forms</Link></li>
              <li><Link to="/blank" className="hover:text-luxury-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/blank-2" className="hover:text-luxury-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/blank-3" className="hover:text-luxury-gold transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-luxury-gold flex-shrink-0" />
                <span>5413 Merritt Island Dr<br/>Apollo Beach, FL 33572</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-luxury-gold flex-shrink-0" />
                <a href="tel:8004626807" className="hover:text-white">1-800-462-6807</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-luxury-gold flex-shrink-0" />
                <a href="mailto:Bruce@lapofluxurytravel.com" className="hover:text-white">Bruce@lapofluxurytravel.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2035 by Lap of Luxury Travel. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Next Gen.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;