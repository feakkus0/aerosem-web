"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductsPage() {
    const [hovered, setHovered] = useState(null); // 'left' | 'right' | null

    const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

    return (
        <div className="relative flex flex-col md:flex-row h-screen w-full overflow-hidden bg-[#201212] font-display">

            {/* 1. LEFT PANEL */}
            <div
                className={`relative h-1/2 md:h-full w-full transition-all duration-700 ease-in-out cursor-pointer overflow-hidden group ${hovered === 'left' ? 'md:w-[60%]' : hovered === 'right' ? 'md:w-[40%]' : 'md:w-1/2'
                    }`}
                onMouseEnter={() => setHovered('left')}
                onMouseLeave={() => setHovered(null)}
            >
                <Link href="/products/aviation" className="block h-full w-full relative">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/aviationsect.jpg')" }}
                    >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1428]/30 to-[#0a1428]/30 mix-blend-multiply"></div>
                        {/* Tint Overlay */}
                        <div className="absolute inset-0 bg-blue-900/20 transition-opacity duration-500 group-hover:opacity-40"></div>
                        {/* Darken on inactive */}
                        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${hovered === 'right' ? 'opacity-100' : 'opacity-0'}`}></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center p-8 pointer-events-none">
                        <motion.h1
                            className="text-center text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white drop-shadow-lg max-w-[80%] mx-auto px-4"
                            animate={{
                                scale: hovered === 'right' ? 0.9 : 1,
                                opacity: hovered === 'right' ? 0.5 : 1
                            }}
                            transition={transition}
                        >
                            AVIATION SOLUTIONS
                        </motion.h1>
                    </div>
                </Link>
            </div>

            {/* 2. RIGHT PANEL */}
            <div
                className={`relative h-1/2 md:h-full w-full transition-all duration-700 ease-in-out cursor-pointer overflow-hidden group ${hovered === 'right' ? 'md:w-[60%]' : hovered === 'left' ? 'md:w-[40%]' : 'md:w-1/2'
                    }`}
                onMouseEnter={() => setHovered('right')}
                onMouseLeave={() => setHovered(null)}
            >
                <Link href="/products/general" className="block h-full w-full relative">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop"
                            alt="General Chemistry"
                            fill
                            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50 mix-blend-multiply"></div>
                        {/* Tint Overlay */}
                        <div className="absolute inset-0 bg-red-900/20 transition-opacity duration-500 group-hover:opacity-40"></div>
                        {/* Darken on inactive */}
                        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${hovered === 'left' ? 'opacity-100' : 'opacity-0'}`}></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center p-8 pointer-events-none">
                        <motion.h1
                            className="text-center text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white drop-shadow-lg max-w-[80%] mx-auto px-4"
                            animate={{
                                scale: hovered === 'left' ? 0.9 : 1,
                                opacity: hovered === 'left' ? 0.5 : 1
                            }}
                            transition={transition}
                        >
                            GENERAL CHEMISTRY
                        </motion.h1>
                    </div>
                </Link>
            </div>

            {/* 3. THE SYNCHRONIZED DIVIDER (Line + Logo) */}
            <div
                className={`hidden md:flex absolute top-0 bottom-0 z-50 flex-col items-center justify-center pointer-events-none transition-all duration-700 ease-in-out -translate-x-1/2`}
                style={{ left: hovered === 'left' ? '60%' : hovered === 'right' ? '40%' : '50%' }}
            >
                {/* The Vertical Line */}
                <div className="w-px h-full bg-white/20 absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_1px_rgba(255,255,255,0.5)]"></div>

                {/* The Center Logo Circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-[#201212]/50 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                    <div className="relative h-8 w-8">
                        <Image
                            src="/logoa1.webp"
                            alt="Aerosem Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
