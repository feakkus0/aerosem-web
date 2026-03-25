"use client";

import React, { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";

export default function ProductsPage() {
    const [hovered, setHovered] = useState(null); // 'left' | 'right' | null

    return (
        <main className="flex flex-col md:flex-row h-screen w-full bg-[#0F0F10] font-display overflow-hidden">
            <h1 className="sr-only">Aerosem Kimya Products - Aviation and General Chemistry</h1>

            {/* AVIATION COLUMN */}
            <section
                className={`group/item relative w-full h-1/2 md:w-1/2 md:h-full overflow-hidden border-b border-white/10 md:border-b-0 md:border-r border-white/10 transition-all duration-700 ease-in-out ${hovered === 'right' ? 'opacity-40 blur-[2px]' : 'opacity-100'
                    }`}
                onMouseEnter={() => setHovered('left')}
                onMouseLeave={() => setHovered(null)}
            >
                <Link href="/products/aviation" className="block h-full w-full relative">
                    {/* Image */}
                    <div className="absolute inset-0 z-0">
                        <NextImage
                            src="/aviationproducts.png"
                            alt="Aerosem Kimya - Aviation Chemistry Category"
                            fill
                            className="object-cover transition-all duration-700 ease-in-out grayscale-0 brightness-[0.8] md:grayscale md:brightness-[0.4] group-hover/item:scale-105 md:group-hover/item:grayscale-0 md:group-hover/item:brightness-110"
                            priority
                        />
                        {/* Deep Black Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 md:opacity-90 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-16 md:bottom-28 left-6 md:left-12 z-10 flex flex-col items-start min-h-[100px] justify-end">
                        <h2 className="text-white font-bold tracking-widest text-4xl md:text-5xl lg:text-7xl transition-transform duration-700 ease-out group-hover/item:-translate-y-4">
                            AVIATION
                        </h2>
                        <div className="flex items-center gap-6 mt-6 opacity-0 -translate-x-8 transition-all duration-700 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0">
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/90 font-semibold">Explore Line</span>
                            <div className="h-[2px] w-12 md:w-24 bg-[#C61F25]" />
                        </div>
                    </div>
                </Link>
            </section>

            {/* GENERAL COLUMN */}
            <section
                className={`group/item relative w-full h-1/2 md:w-1/2 md:h-full overflow-hidden transition-all duration-700 ease-in-out ${hovered === 'left' ? 'opacity-40 blur-[2px]' : 'opacity-100'
                    }`}
                onMouseEnter={() => setHovered('right')}
                onMouseLeave={() => setHovered(null)}
            >
                <Link href="/products/general" className="block h-full w-full relative">
                    {/* Image */}
                    <div className="absolute inset-0 z-0">
                        <NextImage
                            src="/genchemproducts.png"
                            alt="Aerosem Kimya - General Chemistry Category"
                            fill
                            className="object-cover transition-all duration-700 ease-in-out grayscale-0 brightness-[0.8] md:grayscale md:brightness-[0.4] group-hover/item:scale-105 md:group-hover/item:grayscale-0 md:group-hover/item:brightness-110"
                            priority
                        />
                        {/* Deep Black Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 md:opacity-90 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-16 md:bottom-28 left-6 md:left-12 z-10 flex flex-col items-start min-h-[100px] justify-end">
                        <h2 className="text-white font-bold tracking-widest text-4xl md:text-5xl lg:text-7xl transition-transform duration-700 ease-out group-hover/item:-translate-y-4">
                            GENERAL CHEMISTRY
                        </h2>
                        <div className="flex items-center gap-6 mt-6 opacity-0 -translate-x-8 transition-all duration-700 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0">
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/90 font-semibold">Explore Line</span>
                            <div className="h-[2px] w-12 md:w-24 bg-[#C61F25]" />
                        </div>
                    </div>
                </Link>
            </section>

            {/* CENTRAL CTA INDICATOR */}
            <div 
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none transition-all duration-1000 ease-out flex flex-col items-center justify-center ${
                    hovered ? 'opacity-0 scale-90 blur-sm' : 'opacity-100 scale-100 blur-0'
                }`}
            >
                <div className="flex items-center gap-8 md:gap-12 bg-black/30 backdrop-blur-xl border border-white/10 px-8 md:px-12 py-4 md:py-6 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    
                    {/* Left Arrow */}
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white/70 animate-[pulse_2s_ease-in-out_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>

                    <div className="flex flex-col items-center text-center">
                        <span className="text-[9px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-white uppercase whitespace-nowrap">
                            Select Sector
                        </span>
                    </div>

                    {/* Right Arrow */}
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white/70 animate-[pulse_2s_ease-in-out_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                
                {/* Vertical decorative lines (Awwwards style) */}
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/30 to-transparent hidden md:block" />
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-white/30 to-transparent hidden md:block" />
            </div>

        </main>
    );
}
