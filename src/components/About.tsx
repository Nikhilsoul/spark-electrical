import React from 'react';
import { ShieldCheck, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

const About = () => {
  return (
  <section id="about" className="relative py-28 overflow-hidden">
    
    {/* Background glow */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/frontpage.png"
                alt="About THE SPARK"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-8 -right-8 backdrop-blur-xl bg-white/10 border border-white/10 p-8 rounded-2xl shadow-2xl hidden md:block"
          >
            <div className="text-cyan-400 text-5xl font-black mb-1">30+</div>
            <div className="text-white/70 font-semibold text-xs uppercase tracking-widest">
              Projects Completed
            </div>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-cyan-400 font-semibold uppercase tracking-[0.3em] text-xs mb-4">
            About THE SPARK
          </h2>

          <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
            Powering Your Vision <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              with Excellence
            </span>
          </h3>

          <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
            THE SPARK Electrical Work and Services is a premier provider of electrical solutions.
            We specialize in complex commercial installations and detailed residential work,
            ensuring every project meets the highest standards of safety and efficiency.
          </p>

          {/* Features */}
          <div className="space-y-8">

            {/* Mission */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex gap-5 group"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition">
                <ShieldCheck className="text-cyan-400 w-6 h-6" />
              </div>

              <div>
                <h4 className="text-white font-semibold text-xl mb-2 group-hover:text-cyan-300 transition">
                  Our Mission
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  To deliver high-quality electrical solutions on time and within budget,
                  exceeding client expectations through innovation, precision, and technical excellence.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex gap-5 group"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition">
                <Lightbulb className="text-cyan-400 w-6 h-6" />
              </div>

              <div>
                <h4 className="text-white font-semibold text-xl mb-2 group-hover:text-cyan-300 transition">
                  Our Vision
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  To be a trusted and forward-thinking electrical partner that combines innovation
                  with a legacy of reliability, while delivering fair pricing, personalized service,
                  and a people-first approach.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  </section>
);
};

export default About;
