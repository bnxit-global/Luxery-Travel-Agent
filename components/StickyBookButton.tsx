import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck } from 'lucide-react';

const StickyBookButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 20% of the viewport height
      const threshold = window.innerHeight * 0.2;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-24 z-[59] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <Link to="/book-online">
        <button className="flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full shadow-2xl font-bold uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors border border-gray-300">
          <CalendarCheck className="w-4 h-4 text-luxury-gold" />
          <span>Book Now</span>
        </button>
      </Link>
    </div>
  );
};

export default StickyBookButton;