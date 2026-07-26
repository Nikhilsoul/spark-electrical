import React from 'react';
import { PhoneCall } from 'lucide-react';

const CallButton = () => {
  return (
    <a
      href="tel:+916305327731"
      className="fixed bottom-8 left-8 z-50 group"
    >

      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl scale-110 opacity-70 animate-pulse"></div>

      {/* Button */}
      <div className="relative bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-4 rounded-full 
        shadow-[0_10px_40px_rgba(0,0,0,0.4)]
        hover:scale-110 active:scale-95 transition duration-300 flex items-center justify-center">

        {/* Icon */}
        <PhoneCall size={28} className="relative z-10" />

        {/* Ripple */}
        <span className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></span>
      </div>

      {/* Tooltip (RIGHT side now) */}
      <span className="absolute left-full ml-5 top-1/2 -translate-y-1/2 
  backdrop-blur-xl bg-white/10 border border-white/10 
  text-white px-5 py-3 rounded-xl text-sm font-semibold 
  opacity-0 group-hover:opacity-100 transition duration-300 
  whitespace-nowrap shadow-lg flex flex-col">

  <span>Call Now</span>
  <span className="text-cyan-300 text-xs font-medium">
    +91 63053 27731
  </span>

</span>

    </a>
  );
};

export default CallButton;