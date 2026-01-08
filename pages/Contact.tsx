import React from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-luxury-black min-h-screen">
      <PageHeader 
        title="Contact Us" 
        subtitle="Let's begin the conversation."
        image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <div className="max-w-7xl mx-auto px-4 py-24 -mt-32 relative z-20">
        <div className="glass-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-800">
          
          {/* Contact Info */}
          <div className="lg:w-2/5 p-12 bg-luxury-gold/10 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-luxury-gold/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl font-serif font-bold text-white mb-8 relative z-10">Get In Touch</h2>
            <p className="text-gray-300 mb-12 relative z-10 leading-relaxed">
              Whether you are ready to book or just exploring options, our concierge team is ready to assist.
            </p>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center text-luxury-gold mr-4 group-hover:bg-luxury-gold group-hover:text-black transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Visit Us</h4>
                  <p className="text-gray-400 text-sm">5413 Merritt Island Dr<br />Apollo Beach, FL 33572</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center text-luxury-gold mr-4 group-hover:bg-luxury-gold group-hover:text-black transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm"><a href="tel:8004626807" className="hover:text-white transition-colors">800-462-6807</a></p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center text-luxury-gold mr-4 group-hover:bg-luxury-gold group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm"><a href="mailto:Bruce@lapofluxurytravel.com" className="hover:text-white transition-colors">Bruce@lapofluxurytravel.com</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-3/5 p-12 bg-black/80">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Your Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none transition-all" placeholder="How can we help make your travel dreams reality?"></textarea>
              </div>
              
              <Button type="submit" variant="gold" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;