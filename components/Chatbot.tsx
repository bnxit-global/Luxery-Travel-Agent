import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { Card } from './ui/Card';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to Lap of Luxury Travel. I'm your AI Concierge. How can I assist you in planning your dream journey today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [
          { 
            role: 'user', 
            parts: [
              { text: `You are a luxury travel concierge for "Lap of Luxury Travel" in Apollo Beach, FL. You are helpful, sophisticated, and knowledgeable about high-end travel (Europe, Cruises, Exotics). Keep responses concise and elegant. User asked: ${userMessage}` }
            ] 
          }
        ],
      });

      const reply = response.text || "I apologize, I am currently consulting with our travel partners. Please try again in a moment.";
      
      setMessages(prev => [...prev, { role: 'model', text: reply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to our concierge network. Please call us directly at 800-462-6807." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <Card className="w-[350px] md:w-[400px] h-[500px] mb-4 flex flex-col overflow-hidden bg-black/90 backdrop-blur-xl border-luxury-gold/30 shadow-2xl animate-fade-in-up">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-luxury-gold/20 to-transparent border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-luxury-gold" />
              <div>
                <h3 className="font-serif text-white font-bold">AI Concierge</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-luxury-gold text-black font-medium rounded-tr-none' 
                    : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-luxury-gold animate-spin" />
                  <span className="text-xs text-gray-400">Consulting...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-black/50">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about destinations..."
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-luxury-gold/50 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="w-9 h-9 rounded-full bg-luxury-gold flex items-center justify-center text-black hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Card>
      )}

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-luxury-gold to-yellow-600 shadow-lg shadow-luxury-gold/20 flex items-center justify-center text-black hover:scale-110 transition-transform active:scale-95 group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />}
      </button>
    </div>
  );
};

export default Chatbot;