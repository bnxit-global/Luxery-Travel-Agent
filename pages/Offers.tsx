import React from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { Tag, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';

const offers = [
  {
    title: "The Royal Treatment in Dubai",
    description: "5 Nights at the Atlantis The Royal including First Class flights and private desert safari.",
    price: "From $4,500 pp",
    expiry: "Oct 31, 2024",
    image: "https://images.unsplash.com/photo-1696880406958-925cffcbcd68",
    tag: "Exclusive"
  },
  {
    title: "Mediterranean Yacht Week",
    description: "Private charter along the Croatian coast. Includes chef, crew, and port fees.",
    price: "From $2,800 pp",
    expiry: "Nov 15, 2024",
    image: "https://images.unsplash.com/photo-1611033488112-dc8b684fa387",
    tag: "Limited Time"
  },
  {
    title: "Maldives Overwater Bliss",
    description: "7 Nights All-Inclusive at Soneva Jani with seaplane transfers included.",
    price: "From $6,200 pp",
    expiry: "Dec 01, 2024",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1365&auto=format&fit=crop",
    tag: "Best Seller"
  }
];

const Offers: React.FC = () => {
  return (
    <div className="bg-luxury-black min-h-screen text-gray-200">
      <PageHeader
        title="Exclusive Access"
        subtitle="Hand-picked packages and negotiated rates available only to our clients."
        image="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=1974&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 gap-12">
          {offers.map((offer, idx) => (
            <Card key={idx} className="bg-white/5 border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row group hover:bg-white/10 transition-all duration-500">
              <div className="md:w-1/2 relative overflow-hidden">
                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur text-luxury-gold border border-luxury-gold/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center shadow-lg">
                  <Tag className="w-3 h-3 mr-2" /> {offer.tag}
                </div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Clock className="w-4 h-4 mr-2" /> Book by: {offer.expiry}
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4 leading-tight">{offer.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">{offer.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-2xl font-bold text-luxury-gold">{offer.price}</div>
                  <Button variant="outline" className="flex items-center gap-2 group-hover:bg-white group-hover:text-black">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
