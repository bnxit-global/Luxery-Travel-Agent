import React from 'react';

interface PageHeaderProps {
  title: string;
  image?: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  image = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
  subtitle
}) => {
  return (
    <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-luxury-black to-transparent"></div>
      
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-8xl font-serif text-white font-bold tracking-tight mb-4">{title}</h1>
        {subtitle && (
            <p className="text-xl text-gray-300 font-light tracking-wide">{subtitle}</p>
        )}
        <div className="w-24 h-1.5 bg-luxury-gold mx-auto mt-8 rounded-full"></div>
      </div>
    </div>
  );
};

export default PageHeader;