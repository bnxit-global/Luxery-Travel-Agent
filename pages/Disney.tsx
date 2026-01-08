import React from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { Sparkles, Castle, Ship, Star } from 'lucide-react';

const Disney: React.FC = () => {
  return (
    <div className="bg-luxury-black min-h-screen text-gray-200">
      <PageHeader 
        title="The Magic Kingdom" 
        subtitle="Experience Disney with Platinum VIP Status"
        image="https://images.unsplash.com/photo-1596236561196-6d60064560b7?q=80&w=2072&auto=format&fit=crop" 
      />
      
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-20 animate-fade-in-up">
          <Sparkles className="w-16 h-16 text-luxury-gold mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Not Just A Vacation,<br/>A Fairytale</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Navigating Disney World or Disneyland can be overwhelming. We turn chaos into comfort. 
            From securing coveted dining reservations to organizing VIP tour guides who whisk you to the front of every line, 
            we handle the magic so you can enjoy the memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
           <div className="relative rounded-3xl overflow-hidden h-[500px] group border border-white/10 cursor-pointer">
             <img src="https://images.unsplash.com/photo-1628196656209-41f224424367?q=80&w=1335&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Parks" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-10">
               <div className="flex items-center text-luxury-gold mb-3"><Castle className="w-8 h-8 mr-3" /> <span className="text-2xl font-serif font-bold">Disney Parks</span></div>
               <p className="text-gray-300 text-lg">VIP Tours, Lightning Lanes, and exclusive Resort Stays.</p>
             </div>
           </div>
           <div className="relative rounded-3xl overflow-hidden h-[500px] group border border-white/10 cursor-pointer">
             <img src="https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Cruise" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-10">
               <div className="flex items-center text-luxury-gold mb-3"><Ship className="w-8 h-8 mr-3" /> <span className="text-2xl font-serif font-bold">Disney Cruise Line</span></div>
               <p className="text-gray-300 text-lg">Concierge Suites and private cabanas at Castaway Cay.</p>
             </div>
           </div>
        </div>

        <div className="bg-gradient-to-r from-luxury-charcoal to-black rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-serif text-white mb-6">Ready for Magic?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Disney planning requires specific expertise. Our specialists are certified graduates of the College of Disney Knowledge.</p>
            <Button variant="gold" size="lg">Start Planning Disney</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disney;