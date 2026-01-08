import React from 'react';
import PageHeader from '../components/PageHeader';
import { Award, Globe, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-luxury-black text-gray-300">
      <PageHeader 
        title="Our Story" 
        subtitle="Redefining the art of travel management."
        image="https://images.unsplash.com/photo-1551632436-cbf8dd35477c?q=80&w=2071&auto=format&fit=crop" 
      />
      
      {/* Narrative Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Luxury is Personal.<br />
              <span className="text-luxury-gold italic">It's in the details.</span>
            </h2>
            <div className="h-1 w-20 bg-luxury-gold/50"></div>
            <p className="text-lg leading-relaxed">
              Founded in Apollo Beach, Florida, Lap of Luxury Travel was born from a simple belief: the most valuable commodity in the modern world is time. We don't just book tickets; we orchestrate experiences.
            </p>
            <p className="text-lg leading-relaxed">
              Our founder, Bruce, envisioned an agency where algorithms are replaced by empathy, and call centers are replaced by personal cell numbers. Today, we serve a global clientele who refuse to settle for the ordinary.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-3xl font-serif text-white">15+</h4>
                <p className="text-sm uppercase tracking-widest mt-2">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-white">98%</h4>
                <p className="text-sm uppercase tracking-widest mt-2">Client Retention</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="absolute inset-0 border border-luxury-gold/30 rounded-full scale-110 blur-sm"></div>
             <img 
               src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop" 
               alt="Luxury Beach" 
               className="rounded-t-full rounded-b-full w-full h-[600px] object-cover relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
             />
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-luxury-charcoal py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-bold">Our Philosophy</span>
            <h3 className="text-3xl md:text-4xl font-serif text-white mt-4">The Gold Standard</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="w-8 h-8" />, title: "Excellence", desc: "We accept nothing less than perfection in our planning." },
              { icon: <Globe className="w-8 h-8" />, title: "Access", desc: "Unlocking doors that remain closed to the public." },
              { icon: <Users className="w-8 h-8" />, title: "Personal", desc: "Your preferences are our blueprint." },
              { icon: <Clock className="w-8 h-8" />, title: "24/7 Care", desc: "We are with you, even when you're thousands of miles away." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 group">
                <div className="text-luxury-gold mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;