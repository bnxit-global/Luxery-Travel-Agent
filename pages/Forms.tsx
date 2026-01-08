import React from 'react';
import PageHeader from '../components/PageHeader';
import { FileText, Download, Search, Shield } from 'lucide-react';
import { Card } from '../components/ui/Card';

const forms = [
  { title: "New Client Intake Form", type: "Digital Form", size: "5 mins", desc: "Essential information for us to build your traveler profile." },
  { title: "Credit Card Authorization", type: "PDF Download", size: "1.2 MB", desc: "Securely authorize payments for your bookings." },
  { title: "Travel Insurance Waiver", type: "Digital Form", size: "2 mins", desc: "Required if you choose to decline travel protection." },
  { title: "Visa Request Application", type: "External Link", size: "N/A", desc: "Direct link to our preferred visa processing partner." },
  { title: "Group Travel Manifest", type: "Excel Template", size: "45 KB", desc: "Template for organizing large group guest lists." },
  { title: "Minor Travel Consent", type: "PDF Download", size: "0.8 MB", desc: "Required for children traveling with only one parent." },
];

const Forms: React.FC = () => {
  return (
    <div className="bg-luxury-black min-h-screen text-gray-200">
      <PageHeader 
        title="Travel Documents" 
        subtitle="Secure forms and resources for your upcoming journey."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Search / Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search documents..." 
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-luxury-gold outline-none shadow-sm transition-all"
            />
          </div>
          <div className="flex items-center text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full shadow-sm border border-white/10">
            <Shield className="w-4 h-4 text-luxury-green mr-2" />
            All submissions are encrypted and secure.
          </div>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {forms.map((form, i) => (
            <Card key={i} className="bg-white/5 p-8 rounded-2xl shadow-sm hover:bg-white/10 transition-all duration-300 border-white/10 group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-luxury-gold group-hover:text-black transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">{form.title}</h3>
              <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{form.desc}</p>
              
              <div className="flex justify-between items-center pt-6 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-gray-500 tracking-wider">Type</span>
                  <span className="text-sm font-medium text-gray-300">{form.type}</span>
                </div>
                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forms;