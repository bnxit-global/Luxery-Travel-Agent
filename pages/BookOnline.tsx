import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { Calendar, Users, MapPin } from 'lucide-react';

const BookOnline: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consultation');

  return (
    <div className="bg-luxury-black min-h-screen text-gray-200">
      <PageHeader 
        title="Start Your Journey" 
        subtitle="Book a consultation or inquire about a specific trip."
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop" 
      />
      
      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-20 pb-24">
        <div className="bg-[#111] rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 border border-white/10">
          
          <div className="flex justify-center space-x-6 mb-12 border-b border-white/10 pb-4">
            <button 
              onClick={() => setActiveTab('consultation')}
              className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors border-b-2 ${activeTab === 'consultation' ? 'border-luxury-gold text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
            >
              Consultation
            </button>
            <button 
               onClick={() => setActiveTab('trip')}
               className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors border-b-2 ${activeTab === 'trip' ? 'border-luxury-gold text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
            >
              Plan A Trip
            </button>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">First Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Last Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none transition-all" />
            </div>

            {activeTab === 'trip' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center"><MapPin className="w-3 h-3 mr-1"/> Destination</label>
                   <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-luxury-gold outline-none" placeholder="e.g. Italy" />
                </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center"><Calendar className="w-3 h-3 mr-1"/> Approx Dates</label>
                   <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-luxury-gold outline-none" />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Notes / Details</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none transition-all" placeholder="Tell us about your dream trip..."></textarea>
            </div>

            <Button size="lg" variant="gold" className="w-full">
              {activeTab === 'consultation' ? 'Schedule Consultation' : 'Start Planning'}
            </Button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookOnline;