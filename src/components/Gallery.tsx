import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Maximize2 } from "lucide-react";

/* ================= TYPES ================= */

type GalleryItem = {
  type: "image" | "video";
  url: string;
  title: string;
  category: string;
};

/* ================= LANDSCAPE ITEMS ================= */

const landscapeItems: GalleryItem[] = [
  {
    type: "video",
    url: "/Spark_gal_video1.mp4",
    title: "Our Recent Work",
    category: "Completed Projects",
  },
  {
    type: "image",
    url: "/cp.jpeg",
    title: "Main Control Panels",
    category: "Industrial",
  },
  {
    type: "image",
    url: "/lightingroom.jpeg",
    title: "Designer Lighting",
    category: "Commercial",
  },
  {
    type: "image",
    url: "/mcb.avif",
    title: "Industrial Wiring",
    category: "Industrial",
  },
  {
    type: "video",
    url: "/Video1.mp4",
    title: "Installation Process",
    category: "Construction",
  },
  {
    type: "image",
    url: "/meeting.jpeg",
    title: "Conference Room Setup",
    category: "Corporate",
  },
  {
    type: "image",
    url: "/1-INDUSTRIAL-Power Distribution Panel.jpeg",
    title: "Power Distribution Panel",
    category: "Industrial",
  },
  {
    type: "image",
    url: "/mo.jpg",
    title: "Modern Office Lighting",
    category: "Commercial",
  },
];

/* ================= PORTRAIT ITEMS ================= */

const portraitItems: GalleryItem[] = [
  {
    type: "image",
    url: "/2-CORPORATE-Executive Boardroom.jpeg",
    title: "Executive Boardroom",
    category: "Corporate",
  },
  {
    type: "image",
    url: "/3-COMMERCIAL-Luxury-Lobby-Lighting.jpeg",
    title: "Luxury Lobby Lighting",
    category: "Commercial",
  },
  {
    type: "image",
    url: "/4-COMMERCIAL-Premium Corridor Lighting.jpeg",
    title: "Premium Corridor Lighting",
    category: "Commercial",
  },
  {
    type: "image",
    url: "/5-COMMERCIAL-Hospitality Lounge.jpeg",
    title: "Hospitality Lounge",
    category: "Commercial",
  },
  {
    type: "image",
    url: "/6-COMMERCIAL-Grand Atrium Lighting.jpeg",
    title: "Grand Atrium Lighting",
    category: "Commercial",
  },
];

/* ================= GALLERY ================= */

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] =
    useState<GalleryItem | null>(null);

  /* ================= CLOSE WITH ESC ================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.addEventListener("keydown", handleKeyDown);

      // Stop background scrolling
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      // Restore scrolling
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  /* ================= OPEN ITEM ================= */

  const openItem = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  /* ================= CLOSE ITEM ================= */

  const closeItem = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <section
        id="gallery"
        className="relative py-28 overflow-hidden"
      >
        {/* ================= BACKGROUND GLOW ================= */}

        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ================= HEADING ================= */}

          <div className="text-center mb-20">
            <h2 className="text-cyan-400 font-semibold uppercase tracking-[0.3em] text-xs mb-4">
              Visual Showcase
            </h2>

            <h3 className="text-5xl md:text-6xl font-bold text-white">
              Our Work{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                in Action
              </span>
            </h3>
          </div>

          {/* ================================================= */}
          {/* LANDSCAPE GALLERY */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

            {landscapeItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                onClick={() => openItem(item)}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  cursor-pointer
                "
              >
                {/* Glow */}

                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                {/* ================= MEDIA ================= */}

                <div className="relative aspect-video overflow-hidden rounded-3xl bg-black/20">

                  {item.type === "video" ? (
                    <video
                      src={item.url}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="
                        w-full
                        h-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-110
                      "
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="
                        w-full
                        h-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-110
                      "
                    />
                  )}

                  {/* Expand icon */}

                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      w-10
                      h-10
                      rounded-full
                      bg-black/60
                      backdrop-blur-md
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                      text-white
                      opacity-0
                      group-hover:opacity-100
                      scale-75
                      group-hover:scale-100
                      transition-all
                      duration-300
                    "
                  >
                    <Maximize2 size={18} />
                  </div>

                </div>

                {/* ================= OVERLAY ================= */}

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    bg-gradient-to-t
                    from-black/90
                    via-black/30
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    flex
                    flex-col
                    justify-end
                    p-6
                  "
                >
                  <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">
                    {item.category}
                  </span>

                  <h4 className="text-white text-lg font-semibold translate-y-2 group-hover:translate-y-0 transition duration-300">
                    {item.title}
                  </h4>
                </div>

                {/* Shine */}

                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700">

                  <div
                    className="
                      absolute
                      -left-full
                      top-0
                      w-1/2
                      h-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      skew-x-12
                      group-hover:left-full
                      transition-all
                      duration-1000
                    "
                  />

                </div>

              </motion.div>
            ))}

          </div>

          {/* ================================================= */}
          {/* PORTRAIT GALLERY */}
          {/* ================================================= */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

            {portraitItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                onClick={() => openItem(item)}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  cursor-pointer
                "
              >
                {/* Glow */}

                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                {/* ================= IMAGE ================= */}

                <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-black/20">

                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Expand icon */}

                  <div
                    className="
                      absolute
                      top-3
                      right-3
                      sm:top-4
                      sm:right-4
                      w-9
                      h-9
                      sm:w-10
                      sm:h-10
                      rounded-full
                      bg-black/60
                      backdrop-blur-md
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                      text-white
                      opacity-0
                      group-hover:opacity-100
                      scale-75
                      group-hover:scale-100
                      transition-all
                      duration-300
                    "
                  >
                    <Maximize2 size={17} />
                  </div>

                </div>

                {/* ================= OVERLAY ================= */}

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    bg-gradient-to-t
                    from-black/90
                    via-black/30
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    flex
                    flex-col
                    justify-end
                    p-4
                    sm:p-6
                  "
                >
                  <span className="text-cyan-400 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2">
                    {item.category}
                  </span>

                  <h4 className="text-white text-sm sm:text-lg font-semibold translate-y-2 group-hover:translate-y-0 transition duration-300">
                    {item.title}
                  </h4>
                </div>

                {/* Shine */}

                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700">

                  <div
                    className="
                      absolute
                      -left-full
                      top-0
                      w-1/2
                      h-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      skew-x-12
                      group-hover:left-full
                      transition-all
                      duration-1000
                    "
                  />

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* FULLSCREEN IMAGE / VIDEO LIGHTBOX */}
      {/* ================================================= */}

      <AnimatePresence>

        {selectedItem && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeItem}
            className="
              fixed
              inset-0
              z-[9999]
              bg-black/95
              backdrop-blur-xl
              flex
              items-center
              justify-center
              p-4
              sm:p-8
              md:p-12
            "
          >

            {/* ================= CLOSE BUTTON ================= */}

            <motion.button
              type="button"
              aria-label="Close preview"
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={(event) => {
                event.stopPropagation();
                closeItem();
              }}
              className="
                fixed
                top-5
                right-5
                md:top-8
                md:right-8
                z-[10000]
                w-12
                h-12
                rounded-full
                bg-white/10
                hover:bg-white/20
                backdrop-blur-xl
                border
                border-white/20
                text-white
                flex
                items-center
                justify-center
                transition
                cursor-pointer
              "
            >
              <X size={28} />
            </motion.button>

            {/* ================= CONTENT ================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                flex
                flex-col
                items-center
                justify-center
                max-w-7xl
                w-full
                max-h-[90vh]
              "
            >

              {/* ================= BIG IMAGE / VIDEO ================= */}

              {selectedItem.type === "video" ? (

                <video
                  src={selectedItem.url}
                  autoPlay
                  controls
                  playsInline
                  className="
                    max-w-full
                    max-h-[80vh]
                    w-auto
                    h-auto
                    object-contain
                    rounded-2xl
                    shadow-2xl
                  "
                />

              ) : (

                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="
                    max-w-full
                    max-h-[80vh]
                    w-auto
                    h-auto
                    object-contain
                    rounded-2xl
                    shadow-2xl
                  "
                />

              )}

              {/* ================= IMAGE INFORMATION ================= */}

              <div className="text-center mt-5">

                <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
                  {selectedItem.category}
                </span>

                <h3 className="text-white text-xl md:text-2xl font-semibold mt-1">
                  {selectedItem.title}
                </h3>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Gallery;