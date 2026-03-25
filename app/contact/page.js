'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] });


export default function ContactPage() {
  const mapQuery = "75. YIL MAH. EOSB 5.CAD. NO:8 ODUNPAZARI / ESKİŞEHİR";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 0.2s delay between columns
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <main className={`w-full min-h-screen bg-[#FFFFFF] text-[#0F0F10] ${inter.className} pt-40 pb-20 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-start w-full gap-24">

        {/* --- HERO HEADER --- */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-none whitespace-nowrap">
            CONNECT <br className="md:hidden" /> WITH US.
          </h1>
          {/* Thin red horizontal line */}
          <div className="h-[2px] w-full max-w-sm bg-[#C61F25] mt-12 md:mt-16 origin-left transform" />
        </motion.header>


        {/* --- INFO GRID (3 COLUMNS) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12"
        >
          {/* Column 1: Reach Out (Email) */}
          <motion.address variants={itemVariants} className="flex flex-col not-italic">
            <h2 className="text-[#0F0F10] font-bold tracking-[0.2em] text-sm uppercase mb-8">
              Email
            </h2>
            <a
              href="mailto:info@aerosem.com.tr"
              className="text-2xl md:text-3xl font-light text-[#0F0F10] hover:text-[#C61F25] transition-colors duration-300 relative group inline-block py-2"
            >
              info@aerosem.com.tr
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#C61F25] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.address>

          {/* Column 2: Call Us (Phone) */}
          <motion.address variants={itemVariants} className="flex flex-col not-italic">
            <h2 className="text-[#0F0F10] font-bold tracking-[0.2em] text-sm uppercase mb-8">
              Phone
            </h2>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+902222362793"
                className="text-2xl md:text-3xl font-light text-[#0F0F10] hover:text-[#C61F25] transition-colors duration-300 inline-block py-1"
              >
                0222 - 236 27 93
              </a>
              <a
                href="tel:+902222280353"
                className="text-2xl md:text-3xl font-light text-[#0F0F10] hover:text-[#C61F25] transition-colors duration-300 inline-block py-1"
              >
                0222 - 228 03 53
              </a>
            </div>
          </motion.address>

          {/* Column 3: Visit Us (Headquarters) */}
          <motion.address variants={itemVariants} className="flex flex-col not-italic">
            <h2 className="text-[#0F0F10] font-bold tracking-[0.2em] text-sm uppercase mb-8">
              Headquarters
            </h2>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer block"
            >
              <p className="text-xl md:text-2xl font-light text-[#0F0F10] leading-relaxed group-hover:text-[#C61F25] transition-colors duration-300">
                75. YIL MAH. EOSB 5.CAD.<br />
                NO:8 ODUNPAZARI / ESKİŞEHİR<br />
                Turkey
              </p>
            </a>
          </motion.address>
        </motion.div>

        {/* --- INTERACTIVE MAP SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full mt-4 flex flex-col items-center gap-16"
        >
          {/* Elegant Map Indicator */}
          <div
            className="flex flex-col items-center gap-6 cursor-pointer group"
            onClick={() => {
              window.scrollBy({ top: 500, behavior: 'smooth' });
            }}
          >
            <span className="text-[#0F0F10] text-[10px] sm:text-xs tracking-[0.5em] uppercase font-bold opacity-40 group-hover:opacity-100 group-hover:text-[#C61F25] transition-all duration-500">
              Locate Us
            </span>
            <div className="w-[1px] h-20 sm:h-28 bg-gray-200 overflow-hidden relative">
              <motion.div
                className="w-full h-1/3 bg-[#C61F25] absolute top-0 left-0"
                animate={{
                  y: ["-100%", "300%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
              />
            </div>
          </div>

          <div className="w-full h-[500px] md:h-[650px] rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-500 bg-gray-100">
            {/* 
               Applying CSS filters directly on the iframe wrap. 
               grayscale(1) brightens and creates a minimalist b/w map. 
               contrast(1.2) adds back sharpness. 
            */}
            <iframe
              src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(mapQuery)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'grayscale(1) contrast(1.1) brightness(1.05)',
                WebkitFilter: 'grayscale(1) contrast(1.1) brightness(1.05)'
              }}
              allowFullScreen=""
              loading="lazy"
              title="Aerosem HQ Map"
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
