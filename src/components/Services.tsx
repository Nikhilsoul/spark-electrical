import React from "react";
import {
  GitFork,
  Zap,
  ShieldCheck,
  Lightbulb,
  Cable,
  Network,
  Layers,
  Plug,
  PlugZap,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";

type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
};

/* Custom Electrical Panel Icon */
const ElectricalPanel = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className,
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="3" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <rect x="3" y="9" width="6" height="3.5" rx="1" />
    <rect x="3" y="14" width="6" height="3.5" rx="1" />
    <rect x="3" y="19" width="6" height="3" rx="1" />
    <rect x="15" y="9" width="6" height="3.5" rx="1" />
    <rect x="15" y="14" width="6" height="3.5" rx="1" />
    <rect x="15" y="19" width="6" height="3" rx="1" />
    <line x1="12" y1="9" x2="12" y2="22" />
  </svg>
);

const services = [
  {
    title: "Electrical Panels",
    icon: ElectricalPanel,
    desc: "Expert design and installation of main electrical control panels.",
  },
  {
    title: "Distribution Panels",
    icon: GitFork,
    desc: "Efficient power distribution systems for complex facilities.",
  },
  {
    title: "Lighting Panels",
    icon: Zap,
    desc: "Specialized control systems for internal and external lighting.",
  },
  {
    title: "Chemical Earthing",
    icon: ShieldCheck,
    desc: "Advanced GI/Copper plate earthing for maximum safety.",
  },
  {
    title: "Internal & External Lighting",
    icon: Lightbulb,
    desc: "Comprehensive lighting solutions for all environments.",
  },
  {
    title: "Wiring Solutions",
    icon: Cable,
    desc: "Concealed, casing, and capping wiring for neat installations.",
  },
  {
    title: "Automation & Networking",
    icon: Network,
    desc: "Smart home and office automation and network cabling.",
  },
  {
    title: "Cable Management",
    icon: Layers,
    desc: "Professional tray and conduit systems for organized cabling.",
  },
  {
    title: "LT Cable Jointing",
    icon: Plug,
    desc: "High-quality jointing services for low tension power cables.",
  },
  {
    title: "LT PVC Cabling",
    icon: PlugZap,
    desc: "Armored, unarmored, and flexible LT PVC cabling solutions.",
  },
  {
    title: "General Installation",
    icon: CheckCircle2,
    desc: "Fans, lights, CCTV, bells, and other electrical fixtures.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-cyan-400 font-semibold uppercase tracking-[0.3em] text-xs mb-4">
            Our Expertise
          </h2>

          <h3 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Electrical Services
            </span>
          </h3>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Gradient Glow */}
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
                      className="text-cyan-400 group-hover:text-white transition duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {service.desc}
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

export default Services;