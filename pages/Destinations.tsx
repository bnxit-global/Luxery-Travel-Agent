import React from 'react';
import PageHeader from '../components/PageHeader';
import { MapPin, ArrowRight, Compass } from 'lucide-react';
import Button from '../components/Button';

const destinations = [
  { name: "Amalfi Coast", country: "Italy", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1287&auto=format&fit=crop", size: "col-span-1 md:col-span-2 row-span-2" },
  { name: "Santorini", country: "Greece", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2029&auto=format&fit=crop", size: "col-span-1" },
  { name: "Kyoto", country: "Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop", size: "col-span-1" },
  { name: "Bora Bora", country: "French Polynesia", img: "https://images.unsplash.com/photo-1532408840957-031d8034aeef?q=80&w=1332&auto=format&fit=crop", size: "col-span-1 md:col-span-2" },
  { name: "Reykjavik", country: "Iceland", img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1559&auto=format&fit=crop", size: "col-span-1" },
  { name: "Cape Town", country: "South Africa", img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1471&auto=format&fit=crop", size: "col-span-1 md:col-span-2" },
];

const Destinations: React.FC = () => {
  return (
    <div className="bg-luxury-black min-h-screen text-gray-200">
      <PageHeader 
        title="Destinations" 
        subtitle="Where will your story take you next?"
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
      />
      
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Intro */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-luxury-gold text-sm font-bold uppercase tracking-widest flex items-center mb-4"><Compass className="w-4 h-4 mr-2" /> The World Awaits</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">Curated locations for the discerning traveler.</h2>
          </div>
          <Button variant="outline">Download Guide</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {destinations.map((d, i) => (
            <div key={i} className={`relative group rounded-3xl overflow-hidden cursor-pointer ${d.size} border border-white/5`}>
              <img src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <div className="flex items-center text-luxury-gold text-xs font-bold uppercase tracking-widest mb-2">
                    <MapPin className="w-3 h-3 mr-1" /> {d.country}
                  </div>
                  <div className="flex justify-between items-end">
                    <h3 className="text-3xl font-serif text-white font-bold">{d.name}</h3>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transform translate-x-4 group-hover:translate-x-0">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-white/5 rounded-3xl p-12 border border-white/10">
          <h3 className="text-2xl font-serif text-white mb-4">Don't see your dream destination?</h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">We have partnerships in over 100 countries. Our network grants you access to the world's most exclusive properties.</p>
          <Button variant="gold">Inquire About A Custom Trip</Button>
        </div>
      </div>
    </div>
  );
};

export default Destinations;