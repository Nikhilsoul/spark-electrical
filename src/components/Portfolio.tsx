import React from "react";
import { motion } from "motion/react";
import { MapPin, ChevronRight } from "lucide-react";

/* ================= PROJECT TYPES ================= */

type Project = {
  name: string;
  category: string;
  location?: string;
  area?: string;
};

/* ================= PROJECT DATA ================= */

const projects: Project[] = [
  {
    name: "MPL Bengaluru",
    category: "Commercial",
    location: "Bengaluru",
    area: "50k sq ft",
  },
  {
    name: "AUXIA Software India Pvt Ltd",
    category: "IT Infrastructure",
    location: "Bengaluru",
    area: "10k sq ft",
  },
  {
    name: "Tarz Mumbai",
    category: "Commercial",
    location: "Mumbai",
    area: "10k sq ft",
  },
  {
    name: "SBI Life Insurance",
    category: "Corporate",
    location: "Kerala (Kochi, Thrissur, Nedumangad)",
  },
  {
    name: "Digantara",
    category: "Commercial",
    location: "Bengaluru",
    area: "20k sq ft",
  },
  {
    name: "MGM Hospital",
    category: "Healthcare",
    location: "Chhatrapati Sambhaji Nagar",
    area: "100k sq ft",
  },
  {
    name: "ATGEIR Solution Pvt Ltd",
    category: "Commercial",
    location: "Pune",
    area: "7k sq ft",
  },
  {
    name: "NEOCUBE Space Pvt Ltd",
    category: "Commercial",
    location: "Bengaluru",
    area: "10k sq ft",
  },
  {
    name: "Maxis Motion Controls Pvt Ltd",
    category: "Industrial",
    location: "Pune",
    area: "10k sq ft",
  },
  {
    name: "True Blue Napa Valley",
    category: "Commercial",
    location: "Bengaluru",
  },
  {
    name: "Zudio",
    category: "Retail",
  },
  {
    name: "Prestige Raintree Park",
    category: "Residential",
    location: "Bengaluru",
  },
  {
    name: "Prestige Oakville",
    category: "Residential",
    location: "Bengaluru",
  },
  {
    name: "Honeywell Development Lab",
    category: "Industrial",
    location: "Hadapsar",
  },
  {
    name: "Honeywell Canteen",
    category: "Industrial",
    location: "Fulgaon",
  },
];

/* ================= PORTFOLIO COMPONENT ================= */

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="relative py-28 overflow-hidden"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">

          <div>
            <h2 className="text-cyan-400 font-semibold uppercase tracking-[0.3em] text-xs mb-4">
              Our Work
            </h2>

            <h3 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Featured{" "}

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h3>
          </div>

          <p className="text-slate-400 max-w-md text-lg">
            We have successfully completed over 30+ major projects across
            various sectors, delivering excellence in every spark.
          </p>

        </div>

        {/* ================= PROJECT GRID ================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.name}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.06,
                duration: 0.6,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="group relative"
            >

              {/* ================= GLOW BORDER ================= */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[2rem]
                  bg-gradient-to-br
                  from-cyan-500/20
                  to-blue-500/20
                  opacity-0
                  group-hover:opacity-100
                  blur-xl
                  transition
                  duration-500
                "
              />

              {/* ================= PROJECT CARD ================= */}

              <div
                className="
                  relative
                  h-full
                  backdrop-blur-xl
                  bg-white/5
                  border
                  border-white/10
                  p-8
                  rounded-[2rem]
                  transition
                  duration-500
                  hover:scale-[1.04]
                  hover:border-cyan-400/30
                  hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]
                  overflow-hidden
                "
              >

                {/* ================= FLOATING LOGO ================= */}

                <div
                  className="
                    absolute
                    -right-6
                    -top-6
                    opacity-0
                    group-hover:opacity-10
                    transition
                    duration-500
                    pointer-events-none
                  "
                >
                  <img
                    src="/logo1.png"
                    alt=""
                    loading="lazy"
                    className="w-28 h-28 object-contain"
                  />
                </div>

                {/* ================= CONTENT ================= */}

                <div className="relative z-10">

                  {/* CATEGORY */}

                  <div className="mb-6">
                    <span
                      className="
                        inline-block
                        bg-cyan-500/10
                        text-cyan-300
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-widest
                        px-3
                        py-1
                        rounded-full
                        border
                        border-cyan-400/20
                      "
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* PROJECT NAME */}

                  <h4 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition">
                    {project.name}
                  </h4>

                  {/* ================= LOCATION ================= */}

                  {project.location && (

                    <div className="flex items-start gap-2 text-slate-400 text-sm">

                      <MapPin
                        size={14}
                        className="text-cyan-400/60 flex-shrink-0 mt-0.5"
                      />

                      <span>
                        {project.location}
                      </span>

                    </div>

                  )}

                  {/* ================= AREA ================= */}

                  {project.area && (

                    <div className="text-slate-500 text-xs mt-2">
                      📐 {project.area}
                    </div>

                  )}

                </div>

                {/* ================= BOTTOM ANIMATED LINE ================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-[2px]
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>

        {/* ================= FOOTER CTA ================= */}

        <div className="mt-20 text-center">

          <p className="text-slate-500 font-medium mb-8">
            And many more successful installations across India...
          </p>

          <a
            href="/#contact"
            className="
              relative
              inline-flex
              items-center
              gap-2
              px-8
              py-4
              rounded-2xl
              overflow-hidden
              group
            "
          >

            {/* BUTTON BACKGROUND */}

            <span
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                opacity-90
                group-hover:opacity-100
                transition
              "
            />

            {/* BUTTON TEXT */}

            <span className="relative z-10 text-white font-semibold flex items-center gap-2">

              Partner with us for your next project

              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition"
              />

            </span>

            {/* BUTTON GLOW */}

            <span
              className="
                absolute
                inset-0
                rounded-2xl
                blur-lg
                bg-cyan-400/40
                opacity-0
                group-hover:opacity-100
                transition
              "
            />

          </a>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;