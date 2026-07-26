import React from "react";
import { Users, Layers } from "lucide-react";

/* ================= CLIENT LOGOS ================= */

const clientLogos = [
  {
    src: "/mpl+logo.png",
    alt: "MPL",
  },
  
  {
    src: "/asa.jpeg",
    alt: "Studio ASA",
  },
  {
    src: "/Aavishkar_Architects_Logo.svg",
    alt: "Aavishkar Architects",
  },
  {
    src: "/digantara-logo-dark.webp",
    alt: "Digantara",
  },
  {
    src: "/shakti+logo.png",
    alt: "Sakti Group",
  },

  
  {
    src: "/Eppitome-Group-White-Logo.svg",
    alt: "Eppitome Group",
  },

  {
    src: "/NeoCube-logo.jpg",
    alt: "NeoCube",
  },
  {
    src: "/maxismotion.svg",
    alt: "Client",
  },
  {
    src: "/honewell.svg",
    alt: "Honeywell",
  },
  {
    src: "/zudio.webp",
    alt: "Zudio",
  },
];

/* ================= BRAND LOGOS ================= */

const brandLogos = [
  {
    src: "/kei.png",
    alt: "KEI",
  },
  {
    src: "/lnt.svg",
    alt: "L&T",
  },
  {
    src: "/anchor.png",
    alt: "Anchor by Panasonic",
  },
  {
    src: "/legrand.webp",
    alt: "Legrand",
  },
  {
    src: "/Finolex.svg",
    alt: "Finolex",
  },
  {
    src: "/polycab.png",
    alt: "Polycab",
  },
];

/* ================= COMPONENT ================= */

const ClientsAndBrands: React.FC = () => {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">

        {/* ================= CLIENTS ================= */}

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex justify-center items-center gap-3">
          <Users className="text-cyan-400" />

          Our{" "}
          <span className="text-[rgb(255,153,51)]">
            Clientele
          </span>
        </h2>

        <p className="text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed text-base md:text-lg space-y-4">

          <span className="block">
            Meet the leaders who reimagined workplaces with us.
          </span>

          <span className="block">
            We are honoured to have partnered with visionary leaders
            from diverse professional fields.
          </span>

        </p>

        {/* ================= CLIENT SLIDER ================= */}

        <div className="marquee mb-20">

          <div className="marquee-track">

            {[...clientLogos, ...clientLogos].map(
              (logo, index) => (
                <div
                  key={`client-${index}`}
                  className="logo-item"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-img"
                    loading="lazy"
                  />
                </div>
              )
            )}

          </div>

        </div>

        {/* ================= BRANDS ================= */}

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 flex justify-center items-center gap-3">

          <Layers className="text-cyan-400" />

          Brands We{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Use
          </span>

        </h2>

        {/* ================= BRAND SLIDER ================= */}

        <div className="marquee">

          <div className="marquee-track-b">

            {[...brandLogos, ...brandLogos].map(
              (logo, index) => (
                <div
                  key={`brand-${index}`}
                  className="logo-item"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-img"
                    loading="lazy"
                  />
                </div>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ClientsAndBrands;