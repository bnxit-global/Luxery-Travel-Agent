import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { Bell, Mail, Check, X } from 'lucide-react';

const MySubscriptions: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const preferences = [
    { label: "Flash Sales & Limited Offers", active: true },
    { label: "European Destination Guides", active: true },
    { label: "Cruise Line Updates", active: false },
    { label: "Family Travel Inspiration", active: false },
    { label: "Luxury Hotel Openings", active: true },
    { label: "Wellness Retreats", active: false },
  ];

  return (
    <div className="bg-luxury-black min-h-screen text-gray-300">
      <PageHeader 
        title="My Travel DNA" 
        subtitle="Curate the inspiration that lands in your inbox."
        image="https://images.unsplash.com/photo-1484807353310-56b98cb92141?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <div className="max-w-4xl mx-auto px-4 py-24">
        
        {/* Main Sub Box */}
        <div className="glass-dark p-10 rounded-3xl border border-gray-800 mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-luxury-gold flex items-center justify-center text-black mr-4">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-white font-bold">The Inner Circle Newsletter</h3>
              <p className="text-gray-400">Weekly curated travel gems, sent every Friday.</p>
            </div>
          </div>
          
          {!subscribed ? (
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:ring-2 focus:ring-luxury-gold outline-none"
              />
              <Button onClick={() => setSubscribed(true)} variant="gold">Subscribe Now</Button>
            </div>
          ) : (
            <div className="bg-green-900/30 border border-green-800 rounded-xl p-4 flex items-center text-green-400">
              <Check className="w-5 h-5 mr-3" />
              You are subscribed with {email || "your email"}.
              <button onClick={() => setSubscribed(false)} className="ml-auto text-sm underline hover:text-white">Unsubscribe</button>
            </div>
          )}
        </div>

        {/* Preferences Grid */}
        <h3 className="text-xl font-serif text-white mb-8 flex items-center">
          <Bell className="w-5 h-5 mr-3 text-luxury-gold" />
          Content Preferences
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {preferences.map((pref, i) => (
            <div key={i} className="flex items-center justify-between bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
              <span className="font-medium text-gray-200">{pref.label}</span>
              <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ${pref.active ? 'bg-luxury-gold' : 'bg-gray-700'}`}>
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300 ${pref.active ? 'left-7' : 'left-1'}`}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <Button variant="outline">Save Preferences</Button>
        </div>

      </div>
    </div>
  );
};

export default MySubscriptions;