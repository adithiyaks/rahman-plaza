import React from 'react';
import { motion } from 'motion/react';

interface TeamProps {
  theme?: 'light' | 'dark';
}

const Team: React.FC<TeamProps> = ({ theme = 'dark' }) => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-gold-accent tracking-[0.3em] text-xs md:text-sm uppercase font-semibold mb-4 block">
            Our Legacy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-8">
            BEHIND THE <span className="text-gold-accent font-serif italic font-normal">SUCCESS</span>
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-accent/50 to-transparent mx-auto mb-8"></div>

          <p className="text-text-secondary max-w-2xl mx-auto text-lg md:text-xl">
            The people, passion, and vision behind Raman Plaza.
          </p>
        </motion.div>

        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-5xl rounded-[2rem] overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm p-4 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] mb-20 relative group"
        >
          <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden relative shadow-inner">
            <img
              src="/team.jpeg"
              alt="Team at Raman Plaza"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => {
                // Fallback to jpg if png fails
                (e.target as HTMLImageElement).src = '/team.jpg';
              }}
            />
            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Quote & Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl text-center space-y-16"
        >
          <p className="text-text-secondary md:text-xl lg:text-2xl italic leading-relaxed font-serif tracking-wide px-4">
            "Since 1974, our journey has been defined by the hands that craft, the minds that inspire, and the collective passion that leads. A dedicated family of artisans, curators, and visionaries working in absolute harmony to elevate every detail into a timeless masterpiece."
          </p>

          <p className="text-gold-accent tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm uppercase font-bold">
            Crafting Trust, Elevating Heritage
          </p>
        </motion.div>

      </div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
    </section>
  );
};

export default Team;
