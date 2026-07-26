import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
  <a
    href="https://wa.me/916305327731"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 group"
  >

    {/* Glow ring */}
    <div className="absolute inset-0 rounded-full bg-[#25D366]/30 blur-xl scale-110 opacity-70 animate-pulse"></div>

    {/* Button */}
    <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.4)] 
      hover:scale-110 active:scale-95 transition duration-300 flex items-center justify-center">

      {/* Icon */}
      <MessageCircle size={30} fill="currentColor" className="relative z-10" />

      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></span>
    </div>

    {/* Tooltip */}
    <span className="absolute right-full mr-5 top-1/2 -translate-y-1/2 
      backdrop-blur-xl bg-white/10 border border-white/10 
      text-white px-5 py-2 rounded-xl text-sm font-semibold 
      opacity-0 group-hover:opacity-100 transition duration-300 
      whitespace-nowrap shadow-lg">
      Chat with us
    </span>

  </a>
);
};

export default WhatsAppButton;
