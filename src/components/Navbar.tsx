import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ FIXED LINKS
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Gallery", href: "/gallery" }, // separate page
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      {/* Glow line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* 🔥 LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-20 h-16 relative">
            <img
              src="/logo1.png"
              alt="Logo"
              className="object-contain group-hover:scale-110 transition"
            />
            <div className="absolute inset-0 bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold text-[rgb(255,153,51)] font-[BellMT] tracking-wide">
  THE SPARK
</span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-[BellMT] text-[rgb(255,153,51)]">
              Electrical Work & Services
            </span>
          </div>
        </Link>

        {/* 🔥 DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="relative text-sm font-medium text-slate-300 hover:text-white transition group"
            >
              {link.name}

              {/* underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* 🔥 MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-50 md:hidden"
          >
            <div className="flex justify-between px-6 py-5 border-b border-white/10">
              <span className="text-white font-bold">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-8 px-8 py-12 text-xl">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-300 hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;