"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Word({ word, progress, start, end }) {
    const opacity = useTransform(progress, [start, end], [0.12, 1]);
    const color = useTransform(
        progress,
        [start, end],
        ["rgba(26,26,26,0.12)", "rgba(26,26,26,1)"]
    );

    const isHighlight = ["architects", "aerospace", "safety", "uncompromising"].includes(
        word.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    );

    const finalColor = isHighlight
        ? useTransform(progress, [start, end], ["rgba(198,31,37,0.15)", "#C61F25"])
        : color;

    return (
        <span className="inline-block mr-[0.25em] mb-[0.1em]">
            <motion.span style={{ opacity, color: finalColor }} className="transition-colors duration-300">
                {word}
            </motion.span>
        </span>
    );
}

const VisionHome = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.4"],
    });

    const text = "We do not merely supply chemicals. We are the silent architects of aerospace safety and performance. Every formulation we deliver is a promise of reliability perfectly balanced with an uncompromising commitment to the future.";
    const words = text.split(" ");

    return (
        <section ref={containerRef} className="py-32 md:py-[20vh] px-4 sm:px-6 lg:px-12 bg-[#FAFAF7] selection:bg-[#C61F25] selection:text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-[#C61F25] font-mono text-xs uppercase tracking-[0.3em] font-medium block mb-8">
                    [ Our Vision ]
                </h2>
                <p className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.2] tracking-tight text-[#1A1A1A] m-0">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        return (
                            <Word key={i} word={word} progress={scrollYProgress} start={start} end={end} />
                        );
                    })}
                </p>
            </div>
        </section>
    );
};

export default VisionHome;
