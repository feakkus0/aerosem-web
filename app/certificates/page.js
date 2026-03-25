'use client';

import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import NextImage from "next/image";
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] });

const CERTIFICATES = [
  { id: 1, code: "01", name: "ISO 9001:2015", desc: "Quality Management System", img: "/iso9001.jpg" },
  { id: 2, code: "02", name: "EN 9120:2018", desc: "Aviation Supplier Evaluation", img: "/en9120_iso9001.png" },
];

export default function CertificatesGridPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <main className={`min-h-screen bg-[#0F0F10] text-[#FFFFFF] ${inter.className} flex lg:items-center justify-center overflow-hidden relative pt-32 pb-24 lg:py-24`}>
      
      {/* Background QUALITY text that shifts slightly on hover */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-[900] text-transparent tracking-tighter pointer-events-none select-none z-0 mt-10 lg:mt-0"
        style={{ WebkitTextStroke: '2px rgba(255,255,255,0.04)' }}
        animate={{
            x: hoveredCard === 1 ? "calc(-50% - 2%)" : hoveredCard === 2 ? "calc(-50% + 2%)" : "-50%",
            y: "-50%",
            scale: hoveredCard !== null ? 1.02 : 1
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        QUALITY
      </motion.div>

      <motion.div 
        className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Left Header Section - 30% */}
        <section className="w-full lg:w-[30%] flex flex-col justify-center">
          <motion.header
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-md"
          >
            <h2 className="text-[#C32127] font-black tracking-[0.25em] text-xs uppercase mb-6 block">
              Our Standards
            </h2>
            <h1 className="text-5xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white mb-6 leading-[1.05]">
              Certificates<br />& Archive.
            </h1>
            <p className="text-[#A0A0A0] font-light text-base leading-relaxed">
              A curated selection of our global compliances, ensuring quality at every step of the chemical process.
            </p>
          </motion.header>
        </section>

        {/* Right Grid Section - 70% */}
        <section className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {CERTIFICATES.map((cert, index) => (
            <CertificateCard 
                key={cert.id} 
                cert={cert} 
                index={index} 
                onHover={setHoveredCard}
            />
          ))}
        </section>
      </motion.div>
    </main>
  );
}

function CertificateCard({ cert, index, onHover }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col z-10 group"
      onMouseEnter={() => {
          setIsHovered(true);
          onHover(cert.id);
      }}
      onMouseLeave={() => {
          setIsHovered(false);
          onHover(null);
      }}
      style={{ perspective: "1500px" }}
    >
      {/* Index & Title Area */}
      <div className="mb-6 flex flex-col">
        <span 
          className="text-6xl font-light text-transparent leading-none mb-2 tracking-tighter"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
        >
          {cert.code}
        </span>
        <h3 className="text-2xl font-bold tracking-tight text-white mb-1">{cert.name}</h3>
        <p className="text-sm text-[#888888] font-light uppercase tracking-wider">{cert.desc}</p>
      </div>

      {/* Image Container with 3D Tilt */}
      <motion.div
        className="relative w-full aspect-[210/297] bg-[#111111] overflow-hidden origin-center will-change-transform rounded-sm"
        animate={{
          rotateX: isHovered ? 2 : 0,
          rotateY: isHovered ? (index === 0 ? 2 : -2) : 0,
          boxShadow: isHovered 
            ? "0 30px 50px -15px rgba(0,0,0,1), 0 0 30px rgba(195,33,39,0.15)" 
            : "0 10px 30px -10px rgba(0,0,0,0.8), 0 0 0 rgba(195,33,39,0)",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Subtle premium border / wrapper */}
        <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none transition-colors duration-500 group-hover:border-white/20" />

        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1.0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative z-10 will-change-transform"
        >
          <NextImage
            src={cert.img}
            alt={`Aerosem Kimya - Certificate: ${cert.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 35vw"
            quality={100}
            className="object-cover"
            style={{ 
              filter: "none",
              WebkitFontSmoothing: "antialiased",
              imageRendering: "high-quality"
            }}
          />
        </motion.div>
        
        {/* Outer Glow Effect on Image edges */}
        <div className="absolute inset-0 z-30 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] pointer-events-none" />
      </motion.div>
    </motion.article>
  );
}
