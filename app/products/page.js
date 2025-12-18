"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
    const [hovered, setHovered] = useState(null); // 'left' | 'right' | null

    return (
        <div className="flex h-screen w-full bg-[#0F0F10] font-display overflow-hidden">

            {/* AVIATION COLUMN */}
            <div
                className={`group/item relative w-1/2 h-full overflow-hidden border-r border-white/10 transition-all duration-700 ease-in-out ${hovered === 'right' ? 'opacity-40 blur-[2px]' : 'opacity-100'
                    }`}
                onMouseEnter={() => setHovered('left')}
                onMouseLeave={() => setHovered(null)}
            >
                <Link href="/products/aviation" className="block h-full w-full relative">
                    {/* Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/aviationproducts.png"
                            alt="Aviation Solutions"
                            fill
                            className="object-cover transition-all duration-700 ease-in-out grayscale-[100%] brightness-[0.4] group-hover/item:grayscale-0 group-hover/item:brightness-110 group-hover/item:scale-105"
                            priority
                        />
                        {/* Deep Black Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-20 left-10 z-10 flex flex-col items-start min-h-[100px] justify-end">
                        <h2 className="text-white font-bold tracking-widest text-4xl transition-transform duration-500 group-hover/item:-translate-y-2">
                            AVIATION
                        </h2>
                        {/* Elegant Red Line */}
                        <div className="mt-4 h-[2px] w-0 bg-[#C61F25] transition-all duration-500 group-hover/item:w-24" />
                    </div>
                </Link>
            </div>

            {/* GENERAL COLUMN */}
            <div
                className={`group/item relative w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out ${hovered === 'left' ? 'opacity-40 blur-[2px]' : 'opacity-100'
                    }`}
                onMouseEnter={() => setHovered('right')}
                onMouseLeave={() => setHovered(null)}
            >
                <Link href="/products/general" className="block h-full w-full relative">
                    {/* Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/genchemproducts.png"
                            alt="General Chemistry"
                            fill
                            className="object-cover transition-all duration-700 ease-in-out grayscale-[100%] brightness-[0.4] group-hover/item:grayscale-0 group-hover/item:brightness-110 group-hover/item:scale-105"
                            priority
                        />
                        {/* Deep Black Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-20 left-10 z-10 flex flex-col items-start min-h-[100px] justify-end">
                        <h2 className="text-white font-bold tracking-widest text-4xl transition-transform duration-500 group-hover/item:-translate-y-2">
                            GENERAL CHEMISTRY
                        </h2>
                        {/* Elegant Red Line */}
                        <div className="mt-4 h-[2px] w-0 bg-[#C61F25] transition-all duration-500 group-hover/item:w-24" />
                    </div>
                </Link>
            </div>

        </div>
    );
}
