import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
  <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">

    {/* 🌌 Animated Background */}
    <div className="absolute inset-0 z-0">
      <img
        src="/bg-photo.avif"
        alt="Electrical Work"
        className="w-full h-full object-cover scale-105 opacity-60"
        referrerPolicy="no-referrer"
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent"></div>

      {/* Grid overlay (premium feel) */}
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]"></div>
    </div>

    {/* ✨ Floating glow lights */}
    <div className="absolute top-32 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >

        

        {/* 💣 Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          An Electrician You Can{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Trust
          </span>{" "}
          for All Your Needs
        </h1>

        {/* 🧠 Description */}
        <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-xl">
          At THE SPARK, we power commercial spaces with high-quality electrical solutions—
          delivered on time, within budget, and with unmatched expertise.
          Our skilled electricians ensure every project runs seamlessly from concept to completion.
        </p>

        {/* 🚀 Buttons */}
        <div className="flex flex-col sm:flex-row gap-5">

          {/* Premium CTA */}
          <a
            href="#contact"
            className="relative px-8 py-4 rounded-2xl overflow-hidden group flex items-center justify-center gap-2"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-90 group-hover:opacity-100 transition"></span>

            <span className="relative z-10 text-white font-semibold text-lg flex items-center gap-2">
              Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </span>

            {/* glow */}
            <span className="absolute inset-0 rounded-2xl blur-lg bg-cyan-400/40 opacity-0 group-hover:opacity-100 transition"></span>
          </a>

          {/* Secondary */}
          <a
            href="#services"
            className="px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition"
          >
            Our Services
          </a>
        </div>
      </motion.div>
    </div>

    {/* 🎯 Scroll indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <div className="w-[2px] h-10 bg-white/20 relative overflow-hidden">
        <div className="w-full h-1/2 bg-cyan-400 animate-bounce"></div>
      </div>
    </div>
  </section>
);
};

export default Hero;
