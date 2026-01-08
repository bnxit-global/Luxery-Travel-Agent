import React from 'react';
import PageHeader from '../components/PageHeader';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Card } from '../components/ui/Card';

const posts = [
  {
    category: "Travel Tips",
    date: "Oct 12, 2024",
    title: "How to Pack for a Safari",
    excerpt: "The essential guide to looking chic while spotting the Big Five in the Serengeti.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1471&auto=format&fit=crop"
  },
  {
    category: "Destinations",
    date: "Sep 28, 2024",
    title: "Hidden Gems of the Amalfi Coast",
    excerpt: "Beyond Positano: The villages you've never heard of but need to visit immediately.",
    image: "https://images.unsplash.com/photo-1533104821537-975d06c6412f?q=80&w=1287&auto=format&fit=crop"
  },
  {
    category: "Cruising",
    date: "Sep 15, 2024",
    title: "Why River Cruising is the New Luxury",
    excerpt: "Intimate ships, heart-of-city docking, and cultural immersion without the crowds.",
    image: "https://images.unsplash.com/photo-1520038410233-7141dd7e6f97?q=80&w=1471&auto=format&fit=crop"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="bg-luxury-black min-h-screen text-gray-200">
      <PageHeader 
        title="The Journal" 
        subtitle="Stories, tips, and inspiration from the road less traveled."
        image="https://images.unsplash.com/photo-1455620611406-966ca6889d80?q=80&w=2162&auto=format&fit=crop" 
      />
      
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <Card key={i} className="group cursor-pointer bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-colors">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-luxury-black/80 backdrop-blur text-luxury-gold border border-luxury-gold/30 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-gray-500 text-xs uppercase tracking-widest mb-4">
                  <Calendar className="w-3 h-3 mr-2" /> {post.date}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-luxury-gold transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-luxury-gold font-semibold uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;