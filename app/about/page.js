"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import CorporateButton from "@/components/ui/CorporateButton";

// ─── Data ────────────────────────────────────────────────────────────────────

const pillars = [
  {
    title: "Global Supply",
    description:
      "Sourcing premium chemicals from local and global markets, we deliver tailored solutions—from aviation to industrial cleaning—directly to your facility.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Proven Solutions",
    description:
      "Leveraging industry-leading brands like Bonderite, Loctite, and MagClean, we elevate your production processes across metal coating and surface treatments.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
  },
  {
    title: "Visionary Partners",
    description:
      "Beyond fulfilling immediate needs, we build long-term relationships driven by sustainability, human-centric values, and an uncompromising commitment to excellence.",
    image:
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop",
  },
];

const values = [
  {
    title: "Uncompromising Quality",
    desc: "Rigorous testing and premium sourcing guarantee perfection in every drop.",
  },
  {
    title: "Sustainable Future",
    desc: "Biodegradable solutions engineered to protect both performance and the planet.",
  },
  {
    title: "Precision Engineering",
    desc: "Formulations designed specifically for the extreme demands of aviation.",
  },
  {
    title: "Human-Centric",
    desc: "Building enduring partnerships based on trust, transparency, and shared success.",
  },
];

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, 80]);

  const word1 = "ABOUT";
  const word2 = "US";

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col justify-end pb-16 md:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#1A1A1A] selection:bg-[#C61F25] selection:text-white"
    >
      <h1 className="sr-only">About Aerosem Kimya - Architects of Aerospace Safety</h1>
      {/* Parallax Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <NextImage
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          alt="Aerosem Kimya - About Us Aerospace Background"
          fill
          className="object-cover brightness-[0.35]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 via-transparent to-[#1A1A1A]/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10"
      >
        {/* Typography */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="text-[#C61F25] text-xs md:text-sm font-medium tracking-[0.3em] uppercase">
              [ About Aerosem ]
            </span>
          </motion.div>

          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-white uppercase leading-[0.85]">
            <div className="overflow-hidden mb-1 md:mb-2 flex">
              {word1.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "120%", opacity: 0, rotate: -6 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.4 + i * 0.05,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="inline-block origin-top-left"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div
              className="overflow-hidden flex text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.5)" }}
            >
              {word2.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "120%", opacity: 0, rotate: -6 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.6 + i * 0.05,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="inline-block origin-top-left transition-all duration-500 hover:text-white cursor-default"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.5)" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </h2>
        </div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="flex-none w-full md:w-[350px] lg:w-[400px]"
        >
          <div className="h-[1.5px] w-10 bg-[#C61F25] mb-5" />
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
            The silent architects of aerospace safety. Over 25 years of
            engineering performance, reliability, and trust into every
            formulation.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-4 sm:left-6 lg:left-12 z-20 hidden md:flex items-center gap-4">
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium -rotate-90 origin-left translate-y-8 translate-x-2">
          Scroll
        </div>
        <div className="w-[1px] h-14 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#C61F25] animate-[kinetic-flow_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}

// ─── Philosophy Section (Scroll-Driven Text Reveal) ─────────────────────────

function Word({ word, progress, start, end }) {
  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  const color = useTransform(
    progress,
    [start, end],
    ["rgba(26,26,26,0.12)", "rgba(26,26,26,1)"]
  );

  const highlightWords = [
    "architects",
    "aerospace",
    "safety",
    "reliability",
    "stewardship",
  ];
  const isHighlight = highlightWords.includes(
    word.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  );

  const finalColor = isHighlight
    ? useTransform(
        progress,
        [start, end],
        ["rgba(198,31,37,0.15)", "#C61F25"]
      )
    : color;

  return (
    <span className="inline-block mr-[0.25em] mb-[0.1em]">
      <motion.span
        style={{ opacity, color: finalColor }}
        className="transition-colors duration-300"
      >
        {word}
      </motion.span>
    </span>
  );
}

function PhilosophySection() {
  const text =
    "We do not merely supply chemicals. We are the silent architects of aerospace safety and performance. Every formulation we deliver is a promise of reliability perfectly balanced with environmental stewardship.";
  const words = text.split(" ");

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.4"],
  });

  return (
    <section
      ref={containerRef}
      className="py-32 md:py-[20vh] px-4 sm:px-6 lg:px-12 bg-[#F0EFEA] selection:bg-[#C61F25] selection:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#C61F25] font-mono text-xs uppercase tracking-[0.3em] font-medium block mb-8">
          [ Core Philosophy ]
        </h2>
        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.2] tracking-tight text-[#1A1A1A] m-0">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                word={word}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}

// ─── Pillars Section (Staggered Image + Text Cards) ─────────────────────────

function PillarCard({ pillar, index, isReversed }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-15%" });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 md:gap-16 lg:gap-24`}
    >
      {/* Image */}
      <div className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-2xl bg-[#1A1A1A] group">
        <motion.div
          className="w-full h-full transform-gpu"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <NextImage
            src={pillar.image}
            alt={`Aerosem Kimya - ${pillar.title}`}
            fill
            className="object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <span className="text-[#1A1A1A]/15 font-mono text-6xl md:text-8xl font-bold tracking-tighter mb-6">
          0{index + 1}
        </span>
        <h3 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight mb-5">
          {pillar.title}
        </h3>
        <div className="h-[1.5px] w-10 bg-[#C61F25] mb-5" />
        <p className="text-[#6B6B6B] text-lg font-light leading-relaxed max-w-lg">
          {pillar.description}
        </p>
      </div>
    </motion.article>
  );
}

function PillarsSection() {
  return (
    <section className="py-32 md:py-48 px-4 sm:px-6 lg:px-12 bg-[#FAFAF7] selection:bg-[#C61F25] selection:text-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-20 md:mb-32">
            <span className="text-[#C61F25] font-mono text-xs uppercase tracking-[0.3em] font-medium block mb-4">
              [ What Defines Us ]
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-[1.1] max-w-4xl">
              Built on precision. Driven by purpose.
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-24 md:gap-32 lg:gap-40">
          {pillars.map((pillar, i) => (
            <PillarCard
              key={i}
              pillar={pillar}
              index={i}
              isReversed={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Values Section (Numbered Grid Cards) ───────────────────────────────────

function ValuesSection() {
  return (
    <section className="py-32 md:py-48 bg-[#F0EFEA] selection:bg-[#C61F25] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-20 md:mb-32">
            <span className="text-[#C61F25] font-mono tracking-[0.3em] uppercase mb-5 text-xs font-medium block">
              [ Core Principles ]
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              The Aerosem DNA
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((val, i) => (
            <Reveal key={i} delay={i * 0.15} width="100%">
              <article className="group relative h-full flex flex-col p-8 lg:p-10 border border-[#1A1A1A]/10 bg-white rounded-2xl overflow-hidden hover:border-transparent transition-all duration-500 cursor-default hover:shadow-xl">
                <div className="text-[#1A1A1A]/10 font-mono text-5xl font-bold mb-auto transition-all duration-500 group-hover:-translate-y-2 group-hover:text-[#C61F25]">
                  0{i + 1}
                </div>

                <div className="mt-16 md:mt-24">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#C61F25] transition-colors duration-300">
                    {val.title}
                  </h3>
                  <p className="text-[#6B6B6B] font-light leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section (Red Accent Band) ──────────────────────────────────────────

function CtaSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="relative py-48 md:py-[30vh] px-4 sm:px-6 lg:px-12 bg-[#C61F25] overflow-hidden flex items-center justify-center selection:bg-white selection:text-[#C61F25]"
    >
      {/* Massive Background Type */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="text-[20vw] font-bold text-white/[0.08] tracking-tighter uppercase whitespace-nowrap leading-none">
          PARTNER
        </span>
      </motion.div>

      <motion.div
        style={{ y }}
        className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[0.95]">
          Ready to partner
          <br />
          with us?
        </h2>
        <p className="text-lg md:text-xl text-white/70 font-light mb-12 max-w-2xl leading-relaxed">
          Join the aerospace leaders who trust Aerosem to deliver uncompromising
          quality, innovation, and performance.
        </p>
        <Link href="/contact">
          <CorporateButton
            icon={<ArrowRight size={18} />}
            className="bg-white text-[#C61F25] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] h-14 px-10 text-sm border-white"
          >
            Initiate Contact
          </CorporateButton>
        </Link>
      </motion.div>
    </section>
  );
}

// ─── Page Export ─────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="min-h-screen font-display selection:bg-[#C61F25] selection:text-white bg-[#FAFAF7]">
      <HeroSection />
      <PhilosophySection />
      <PillarsSection />
      <ValuesSection />
      <CtaSection />
    </main>
  );
}
