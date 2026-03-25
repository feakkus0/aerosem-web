"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCard = ({ number, suffix, label, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            className="flex flex-col border-l border-[#1A1A1A]/10 pl-6 lg:pl-10"
        >
            <div className="flex items-baseline mb-2">
                <span className="text-6xl md:text-8xl font-bold tracking-tighter text-[#1A1A1A] tabular-nums">
                    {number}
                </span>
                <span className="text-4xl md:text-6xl text-[#C61F25] font-light ml-1">{suffix}</span>
            </div>
            <span className="text-sm md:text-base text-[#6B6B6B] font-mono tracking-widest uppercase">
                {label}
            </span>
        </motion.div>
    );
};

const StatsHome = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-20%" });

    const stats = [
        { number: "25", suffix: "+", label: "Years Expertise" },
        { number: "150", suffix: "+", label: "Formulations" },
        { number: "40", suffix: "+", label: "Countries Served" },
    ];

    return (
        <section ref={containerRef} className="py-32 md:py-48 px-4 sm:px-6 lg:px-12 bg-[#FAFAF7] relative overflow-hidden">

            {/* Decorative accent line */}
            <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="absolute left-4 sm:left-6 lg:left-12 top-0 w-[1px] h-full bg-gradient-to-b from-[#C61F25] to-transparent origin-top z-0"
            />

            <div className="max-w-7xl mx-auto relative z-10 pl-8 md:pl-20">
                <div className="mb-24">
                    <span className="text-[#C61F25] font-mono text-xs uppercase tracking-[0.3em] font-medium block mb-4">
                        [ Scale & Impact ]
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#1A1A1A] max-w-3xl leading-[1.1]">
                        Setting the global standard for aviation maintenance chemistry.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {stats.map((stat, idx) => (
                        <StatCard
                            key={idx}
                            index={idx}
                            number={stat.number}
                            suffix={stat.suffix}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsHome;
