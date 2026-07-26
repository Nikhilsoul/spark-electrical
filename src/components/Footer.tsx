import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

/* ================= SOCIAL LINKS ================= */

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/the-spark-electrical-work-and-services-482139263/recent-activity/all/",
  },
  {
    icon: Facebook,
    name: "Facebook",
    link: "https://www.facebook.com/dnyaneshwar.tagare.9",
  },
  {
    icon: Instagram,
    name: "Instagram",
    link: "https://www.instagram.com/thesparkelectrical/",
  },
];

const Footer: React.FC = () => {
  /* ================= STATES ================= */

  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  /* ================= NEWSLETTER SUBMIT ================= */

  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setError("");
    setSubscribed(false);

    try {
      const response = await fetch(
        "https://formspree.io/f/mvzvdbay",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Newsletter subscription failed");
      }

      /* SUCCESS */

      form.reset();
      setSubscribed(true);
    } catch (err) {
      console.error("Newsletter submission failed:", err);

      setError(
        "Unable to subscribe right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-white/10">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= GRID ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 mb-20">

          {/* ================================================= */}
          {/* BRAND */}
          {/* ================================================= */}

          <div className="space-y-6">

            <div className="flex items-center gap-3 group">

              {/* LOGO */}

              <div className="w-14 h-10 flex items-center justify-center relative">

                <img
                  src="/logo1.png"
                  alt="THE SPARK"
                  className="w-full h-full object-contain group-hover:scale-110 transition duration-300"
                />

                {/* Logo Glow */}

                <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              </div>

              {/* BRAND NAME */}

              <span className="text-xl font-bold font-[BellMT] text-[rgb(255,153,51)]">
                THE SPARK
              </span>

            </div>

            {/* DESCRIPTION */}

            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              Your trusted partner for all electrical needs.
              Delivering quality, safety, and reliability across
              every project.
            </p>

          </div>

          {/* ================================================= */}
          {/* SOCIAL LINKS */}
          {/* ================================================= */}

          <div>

            <h4 className="text-white font-semibold text-lg mb-6">
              Connect With Us
            </h4>

            <ul className="space-y-4">

              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.name}>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${item.name}`}
                      className="
                        flex
                        items-center
                        gap-3
                        text-slate-400
                        hover:text-cyan-300
                        transition
                        group
                        w-fit
                      "
                    >

                      <Icon
                        size={16}
                        className="group-hover:scale-110 transition"
                      />

                      <span>
                        {item.name}
                      </span>

                    </a>

                  </li>
                );
              })}

            </ul>

          </div>

          {/* ================================================= */}
          {/* NEWSLETTER */}
          {/* ================================================= */}

          <div>

            <h4 className="text-white font-semibold text-lg mb-6">
              Newsletter
            </h4>

            <p className="text-slate-400 mb-6 text-sm">
              Subscribe to get the latest updates and electrical tips.
            </p>

            {/* ================= SUBSCRIPTION FORM ================= */}

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex gap-2"
            >

              <label
                htmlFor="newsletter-email"
                className="sr-only"
              >
                Email address
              </label>

              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                disabled={loading}
                placeholder="Email address"
                className="
                  w-full
                  min-w-0
                  bg-black/40
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  placeholder-slate-500
                  focus:border-cyan-400
                  focus:ring-1
                  focus:ring-cyan-400/50
                  outline-none
                  transition
                  disabled:opacity-60
                "
              />

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                disabled={loading}
                aria-label={
                  loading
                    ? "Subscribing"
                    : "Subscribe to newsletter"
                }
                className="
                  relative
                  flex-shrink-0
                  w-12
                  rounded-xl
                  overflow-hidden
                  group
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >

                {/* Gradient Background */}

                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500" />

                {/* Icon */}

                <span className="relative z-10 h-full flex items-center justify-center text-white">

                  {loading ? (

                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />

                  ) : (

                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />

                  )}

                </span>

                {/* Button Glow */}

                <span className="absolute inset-0 rounded-xl blur-lg bg-cyan-400/40 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              </button>

            </form>

            {/* ================= SUCCESS MESSAGE ================= */}

            {subscribed && (

              <div
                role="status"
                className="flex items-center gap-2 mt-4 text-green-400 text-sm"
              >

                <CheckCircle2
                  size={17}
                  className="flex-shrink-0"
                />

                <span>
                  Thank you! You&apos;re subscribed.
                </span>

              </div>

            )}

            {/* ================= ERROR MESSAGE ================= */}

            {error && (

              <div
                role="alert"
                className="flex items-start gap-2 mt-4 text-red-400 text-sm"
              >

                <AlertCircle
                  size={17}
                  className="flex-shrink-0 mt-0.5"
                />

                <span>
                  {error}
                </span>

              </div>

            )}

          </div>

        </div>

        {/* ================================================= */}
        {/* BOTTOM FOOTER */}
        {/* ================================================= */}

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* COPYRIGHT */}

          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} THE SPARK Electrical Work and Services.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;