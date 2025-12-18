"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

// Timeline Data
const timelineData = [
    {
        year: "2004",
        title: "The Inception",
        description: "Founded in a modest lab in Eskişehir, Aerosem began with a singular vision: to revolutionize aviation safety through superior chemical engineering. We didn't just want to make cleaners; we wanted to define the standard.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" // Industrial Lab B&W
    },
    {
        year: "2012",
        title: "Global Expansion",
        description: "Breaking borders. By 2012, our formulas were being used in major hubs across Europe and the Middle East. We scaled our production capabilities and secured key international certifications.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" // Plane Wing B&W
    },
    {
        year: "2024",
        title: "Future Horizons",
        description: "Today, we stand at the forefront of sustainable chemical innovation. Our R&D facility is pushing the boundaries of biodegradable solutions, ensuring a greener future for the aerospace industry.",
        image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop" // Modern Lab B&W
    }
];

// Team Data
const teamData = [
    {
        name: "Dr. Ahmet Yilmaz",
        role: "Chief Chemical Engineer",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Sarah Chen",
        role: "Head of Operations",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
        name: "Michael Ross",
        role: "Global Sales Director",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function AboutPage() {
    const [activeYear, setActiveYear] = useState(timelineData[0].year);

    return (
        <div className="min-h-screen bg-white font-display text-[#0F0F10] selection:bg-red-600 selection:text-white">

            {/* SECTION 1: THE MANIFESTO (Hero) */}
            <section className="min-h-screen flex items-center justify-center px-4 pt-40 pb-20">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-8">
                        {"We do not just mix chemicals. We engineer safety for the skies.".split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE TIMELINE (Sticky Scroll) */}
            <section className="relative">
                <div className="flex flex-col md:flex-row">

                    {/* Left Side (Sticky Year) */}
                    <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center bg-[#0F0F10] text-white">
                        <motion.span
                            key={activeYear}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                            className="text-[12rem] lg:text-[16rem] font-black tracking-tighter leading-none"
                        >
                            {activeYear}
                        </motion.span>
                    </div>

                    {/* Right Side (Scrollable Content) */}
                    <div className="w-full md:w-1/2 bg-white">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={item.year}
                                className="min-h-screen flex flex-col justify-center p-8 md:p-20 border-b border-gray-100 last:border-none"
                                onViewportEnter={() => setActiveYear(item.year)}
                                viewport={{ amount: 0.5 }}
                            >
                                <div className="md:hidden text-6xl font-black mb-8 text-gray-200">{item.year}</div>

                                <div className="relative aspect-[4/3] w-full mb-12 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <Reveal width="100%">
                                    <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">{item.title}</h2>
                                </Reveal>
                                <Reveal width="100%" delay={0.1}>
                                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                                        {item.description}
                                    </p>
                                </Reveal>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE NUMBERS (Minimalist Stats) */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        {[
                            { value: "500+", label: "Global Partners" },
                            { value: "2M+", label: "Liters Produced" },
                            { value: "100%", label: "Safety Record" }
                        ].map((stat, index) => (
                            <Reveal key={index} width="100%" delay={index * 0.1}>
                                <div className="flex flex-col items-center">
                                    <span className="text-6xl md:text-8xl font-thin tracking-tighter mb-4 block">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400">
                                        {stat.label}
                                    </span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE TEAM (The Human Element) */}
            <section className="py-32 px-4 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto mb-16">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">The Architects</h2>
                        <div className="h-1 w-24 bg-red-600"></div>
                    </Reveal>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamData.map((member, index) => (
                        <Reveal key={index} width="100%" delay={index * 0.1}>
                            <div className="group cursor-pointer">
                                <div className="relative aspect-[3/4] w-full mb-6 overflow-hidden bg-gray-200">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold uppercase mb-1 group-hover:text-red-600 transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

        </div>
    );
}
