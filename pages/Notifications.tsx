import React from 'react';
import PageHeader from '../components/PageHeader';
import { Bell, Plane, AlertTriangle, Tag, Info } from 'lucide-react';

const notifications = [
  { id: 1, type: 'alert', title: "Flight Schedule Change", msg: "Your flight UA456 on Oct 12 has shifted by 15 mins.", time: "2 hours ago", icon: <Plane className="w-5 h-5" />, color: "text-blue-400" },
  { id: 2, type: 'promo', title: "Limited Time Offer", msg: "Save 30% on Suites at The Ritz-Carlton Kyoto.", time: "1 day ago", icon: <Tag className="w-5 h-5" />, color: "text-luxury-gold" },
  { id: 3, type: 'info', title: "Trip Reminder", msg: "Online check-in for your Maldives trip opens in 24 hours.", time: "2 days ago", icon: <Info className="w-5 h-5" />, color: "text-purple-400" },
  { id: 4, type: 'warning', title: "Travel Advisory", msg: "Updated entry requirements for France regarding passports.", time: "1 week ago", icon: <AlertTriangle className="w-5 h-5" />, color: "text-red-400" },
];

const Notifications: React.FC = () => {
  return (
    <div className="bg-luxury-black min-h-screen text-gray-300">
      <PageHeader 
        title="Alerts Center" 
        subtitle="Real-time updates on your trips and world events."
        image="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <div className="max-w-3xl mx-auto px-4 py-24">
        <div className="space-y-6">
          {notifications.map((notif) => (
            <div key={notif.id} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex items-start gap-6 hover:bg-white/10 transition-colors group">
              <div className={`w-12 h-12 rounded-full bg-black/40 flex items-center justify-center shrink-0 ${notif.color} border border-white/5 group-hover:scale-110 transition-transform`}>
                {notif.icon}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-lg font-bold text-white">{notif.title}</h3>
                   <span className="text-xs text-gray-500">{notif.time}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{notif.msg}</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-luxury-gold shrink-0 mt-2"></div>
            </div>
          ))}
          
          <div className="text-center pt-8 text-gray-500 text-sm">
            End of notifications
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;