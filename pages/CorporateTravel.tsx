import React from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { Briefcase, TrendingUp, Shield, Smartphone } from 'lucide-react';

const CorporateTravel: React.FC = () => {
  return (
    <div className="bg-luxury-black text-gray-300">
      <PageHeader 
        title="Corporate Services" 
        subtitle="Streamlined travel management for the modern enterprise."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Business, Upgraded.</h2>
          <p className="text-lg text-gray-400">
            We understand that in business, travel isn't a luxury—it's a necessity. 
            Our corporate program ensures your team gets where they need to be, efficiently, comfortably, and cost-effectively.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300">
             <TrendingUp className="w-10 h-10 text-luxury-gold mb-6" />
             <h3 className="text-2xl font-serif text-white mb-4">Cost Optimization</h3>
             <p className="text-gray-400 leading-relaxed mb-6">
               Access to negotiated rates on airfare and hotels that aren't available to the public. We manage your budget as if it were our own.
             </p>
             <ul className="text-sm text-gray-500 space-y-2">
               <li className="flex items-center"><div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></div>Volume discounts</li>
               <li className="flex items-center"><div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></div>Policy compliance monitoring</li>
             </ul>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300">
             <Shield className="w-10 h-10 text-luxury-gold mb-6" />
             <h3 className="text-2xl font-serif text-white mb-4">Risk Management</h3>
             <p className="text-gray-400 leading-relaxed mb-6">
               Duty of care is paramount. We provide 24/7 traveler tracking and emergency assistance, anywhere in the world.
             </p>
             <ul className="text-sm text-gray-500 space-y-2">
               <li className="flex items-center"><div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></div>Real-time alerts</li>
               <li className="flex items-center"><div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></div>Crisis support</li>
             </ul>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300">
             <Briefcase className="w-10 h-10 text-luxury-gold mb-6" />
             <h3 className="text-2xl font-serif text-white mb-4">Executive Leisure</h3>
             <p className="text-gray-400 leading-relaxed mb-6">
               Bleisure travel is on the rise. We seamlessly blend business trips with leisure extensions for your executives.
             </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300">
             <Smartphone className="w-10 h-10 text-luxury-gold mb-6" />
             <h3 className="text-2xl font-serif text-white mb-4">Tech-Forward</h3>
             <p className="text-gray-400 leading-relaxed mb-6">
               Integrated itineraries delivered straight to mobile devices, expense integration, and simplified booking tools.
             </p>
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-3xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Meeting" className="w-full h-[400px] object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/80 to-transparent flex flex-col justify-center p-12">
            <h3 className="text-4xl font-serif text-white mb-6">Partner With Us</h3>
            <p className="text-gray-300 max-w-lg mb-8">
              Transform your company's travel culture. Schedule a demo of our corporate capabilities today.
            </p>
            <div>
              <Button variant="gold">Schedule Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTravel;