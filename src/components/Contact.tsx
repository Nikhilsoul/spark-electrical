import React, { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Contact: React.FC = () => {
  /* ================= STATES ================= */

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  /* ================= TIMER REF ================= */

  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ================= CLEANUP ================= */

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  /* ================= FORM SUBMIT ================= */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    /* Prevent multiple submissions */
    if (loading) return;

    const form = e.currentTarget;

    setLoading(true);
    setError("");

    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xnjrovpr",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      /* ================= SUCCESS ================= */

      if (response.ok) {
        form.reset();

        setSubmitted(true);

        /* Clear previous timer if one exists */
        if (successTimerRef.current) {
          clearTimeout(successTimerRef.current);
        }

        /* Hide success screen after 5 seconds */
        successTimerRef.current = setTimeout(() => {
          setSubmitted(false);
          successTimerRef.current = null;
        }, 5000);

        return;
      }

      /* ================= FORMSPREE ERROR ================= */

      let errorMessage =
        "Unable to send your message. Please try again.";

      try {
        const data = await response.json();

        if (
          data?.errors &&
          Array.isArray(data.errors) &&
          data.errors.length > 0
        ) {
          errorMessage =
            data.errors[0]?.message || errorMessage;
        }
      } catch {
        // Keep default error message
      }

      setError(errorMessage);
    } catch (err) {
      console.error("Contact form submission failed:", err);

      setError(
        "Something went wrong. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* ================================================= */}
          {/* LEFT SIDE — CONTACT INFORMATION */}
          {/* ================================================= */}

          <div>

            {/* Small Heading */}

            <h2 className="text-cyan-400 font-semibold uppercase tracking-[0.3em] text-xs mb-4">
              Contact Us
            </h2>

            {/* Main Heading */}

            <h3 className="text-5xl font-bold text-white mb-10 leading-tight">
              Let&apos;s Discuss Your{" "}

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Project
              </span>
            </h3>

            <div className="space-y-10">

              {/* ================= LOCATION ================= */}

              <div className="flex gap-5">

                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10">

                  <MapPin className="text-cyan-400" />

                </div>

                <div>

                  <h4 className="text-white font-semibold text-lg mb-1">
                    Our Locations
                  </h4>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    Serving Clients Across India
                  </p>

                </div>

              </div>

              {/* ================= PHONE ================= */}

              <div className="flex gap-5">

                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10">

                  <Phone className="text-cyan-400" />

                </div>

                <div>

                  <h4 className="text-white font-semibold text-lg mb-1">
                    Call Us
                  </h4>

                  <a
                    href="tel:+916305327731"
                    className="text-slate-400 hover:text-cyan-400 transition"
                  >
                    +91 6305327731
                  </a>

                </div>

              </div>

              {/* ================= EMAIL ================= */}

              <div className="flex gap-5">

                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10">

                  <Mail className="text-cyan-400" />

                </div>

                <div>

                  <h4 className="text-white font-semibold text-lg mb-1">
                    Email Us
                  </h4>

                  <a
                    href="mailto:thesparkservice@gmail.com"
                    className="text-slate-400 hover:text-cyan-400 transition break-all"
                  >
                    thesparkservice@gmail.com
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE — CONTACT FORM */}
          {/* ================================================= */}

          <div className="relative">

            {/* ================= SUCCESS OVERLAY ================= */}

            <AnimatePresence>

              {submitted && (

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    absolute
                    inset-0
                    z-50
                    rounded-[2.5rem]
                    backdrop-blur-2xl
                    bg-black/90
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    p-8
                    md:p-10
                  "
                >

                  {/* Success Icon */}

                  <motion.div
                    initial={{
                      scale: 0,
                      rotate: -20,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 12,
                    }}
                    className="mb-6"
                  >

                    <CheckCircle2
                      size={90}
                      className="text-green-400"
                    />

                  </motion.div>

                  {/* Success Heading */}

                  <motion.h2
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15,
                    }}
                    className="text-4xl md:text-5xl font-bold text-white mb-5"
                  >
                    Thank You!
                  </motion.h2>

                  {/* Success Message */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.25,
                    }}
                    className="text-slate-300 text-base md:text-lg leading-relaxed max-w-md"
                  >
                    Your message has been sent successfully.

                    <br />

                    We will connect with you soon.
                  </motion.p>

                </motion.div>

              )}

            </AnimatePresence>

            {/* ================================================= */}
            {/* FORM CARD */}
            {/* ================================================= */}

            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-6 sm:p-8 md:p-12 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.3)]">

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* ================= NAME + PHONE ================= */}

                <div className="grid md:grid-cols-2 gap-6">

                  {/* NAME */}

                  <div>

                    <label
                      htmlFor="contact-name"
                      className="text-xs font-semibold text-slate-400 uppercase tracking-widest"
                    >
                      Full Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="John Doe"
                      className="
                        w-full
                        mt-2
                        bg-black/40
                        border
                        border-white/10
                        rounded-xl
                        px-5
                        py-4
                        text-white
                        placeholder-slate-500
                        focus:border-cyan-400
                        focus:ring-1
                        focus:ring-cyan-400/50
                        outline-none
                      "
                    />

                  </div>

                  {/* PHONE */}

                  <div>

                    <label
                      htmlFor="contact-phone"
                      className="text-xs font-semibold text-slate-400 uppercase tracking-widest"
                    >
                      Phone
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+91 00000 00000"
                      className="
                        w-full
                        mt-2
                        bg-black/40
                        border
                        border-white/10
                        rounded-xl
                        px-5
                        py-4
                        text-white
                        placeholder-slate-500
                        focus:border-cyan-400
                        focus:ring-1
                        focus:ring-cyan-400/50
                        outline-none
                      "
                    />

                  </div>

                </div>

                {/* ================= EMAIL ================= */}

                <div>

                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="
                      w-full
                      mt-2
                      bg-black/40
                      border
                      border-white/10
                      rounded-xl
                      px-5
                      py-4
                      text-white
                      placeholder-slate-500
                      focus:border-cyan-400
                      focus:ring-1
                      focus:ring-cyan-400/50
                      outline-none
                    "
                  />

                </div>

                {/* ================= SERVICE ================= */}

                <div>

                  <label
                    htmlFor="contact-service"
                    className="text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  >
                    Service Required
                  </label>

                  <input
                    id="contact-service"
                    type="text"
                    name="service"
                    placeholder="Enter required service"
                    className="
                      w-full
                      mt-2
                      bg-black/40
                      border
                      border-white/10
                      rounded-xl
                      px-5
                      py-4
                      text-white
                      placeholder-slate-500
                      focus:border-cyan-400
                      focus:ring-1
                      focus:ring-cyan-400/50
                      outline-none
                    "
                  />

                </div>

                {/* ================= MESSAGE ================= */}

                <div>

                  <label
                    htmlFor="contact-message"
                    className="text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project..."
                    className="
                      w-full
                      mt-2
                      bg-black/40
                      border
                      border-white/10
                      rounded-xl
                      px-5
                      py-4
                      text-white
                      placeholder-slate-500
                      focus:border-cyan-400
                      focus:ring-1
                      focus:ring-cyan-400/50
                      outline-none
                      resize-none
                    "
                  />

                </div>

                {/* ================= ERROR MESSAGE ================= */}

                <AnimatePresence>

                  {error && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      role="alert"
                      className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                    >

                      <AlertCircle
                        size={20}
                        className="text-red-400 flex-shrink-0 mt-0.5"
                      />

                      <p className="text-red-300 text-sm">
                        {error}
                      </p>

                    </motion.div>

                  )}

                </AnimatePresence>

                {/* ================= SUBMIT BUTTON ================= */}

                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="
                    relative
                    w-full
                    py-4
                    rounded-2xl
                    overflow-hidden
                    group
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >

                  {/* Gradient */}

                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500" />

                  {/* Button Text */}

                  <span className="relative z-10 text-white font-semibold text-lg flex items-center justify-center gap-3">

                    {loading && (
                      <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    )}

                    {loading
                      ? "Sending..."
                      : "Send Message"}

                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;