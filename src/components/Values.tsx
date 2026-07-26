import React from "react";
import {
  Award,
  ShieldCheck,
  Clock,
  Gem,
  Heart,
  Handshake,
} from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    title: "Excellence",
    icon: Award,
    desc: "We strive for exceptional performance in everything we do, continuously raising the bar to discover our full potential.",
  },
  {
    title: "Integrity",
    icon: ShieldCheck,
    desc: "We uphold the highest standards of honor, trust, and credibility in our words and actions.",
  },
  {
    title: "Reliability",
    icon: Clock,
    desc: "We take ownership of delivering results, following through on commitments, and exceeding expectations.",
  },
  {
    title: "Quality",
    icon: Gem,
    desc: "We provide effective solutions that meet the highest industry standards, ensuring our work is of the highest caliber.",
  },
  {
    title: "Safety",
    icon: Heart,
    desc: "We prioritize safety above all else, refusing to compromise on the well-being of our employees, customers, and communities.",
  },
  {
    title: "Flexibility",
    icon: Handshake,
    desc: "We respond positively to changes, embracing innovation and finding creative ways to improve our services.",
  },
];

const Values: React.FC = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-cyan-400 font-semibold uppercase tracking-[0.3em] text-xs mb-4">
            Why Choose Us
          </h2>

          <h3 className="text-5xl md:text-6xl font-bold text-white">
            Our Core{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Values
            </span>
          </h3>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, idx) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                {/* Card */}
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl transition duration-500 hover:scale-[1.04] hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                  
                  {/* Icon */}
                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      flex items-center justify-center
                      mb-6
                      bg-gradient-to-br
                      from-cyan-500/20
                      to-blue-500/20
                      border border-white/10
                      group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
                      transition
                    "
                  >
                    <Icon
                      size={30}
                      className="text-cyan-400 group-hover:text-white transition"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition">
                    {value.title}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {value.desc}
                  </p>

                  {/* Bottom Hover Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;