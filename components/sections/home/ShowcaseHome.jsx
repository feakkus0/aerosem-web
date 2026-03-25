"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NextImage from "next/image";
import productsData from '@/data/products.json';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ShowcaseHome = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const highlightIds = ["bonderite-m-cr-1132-aero", "loctite-ea-9394-aero", "magnus-magclean-4400-a", "loctite-frekote-700-nc"];
    const showcaseProducts = productsData.filter(p => highlightIds.includes(p.id));

    // Use 'vw' instead of '%' because translating a 400vw container by -300% would move it -1200vw.
    // By using vw, we ensure it properly moves exactly one viewport width per product.
    // This slows down the scroll speed across the 400vh container and prevents the empty space at the end.
    const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(showcaseProducts.length - 1) * 100}vw`]);

    return (
        <section ref={containerRef} className="h-[400vh] relative bg-[#F0EFEA] selection:bg-[#C61F25] selection:text-white">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pt-20">
                {/* Header */}
                <div className="absolute top-10 left-4 sm:left-6 lg:left-12 z-20">
                    <span className="text-[#C61F25] font-mono text-xs uppercase tracking-[0.3em] font-medium block mb-3">
                        [ Flagship Formulations ]
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-none">
                        Engineered<br/>Perfection
                    </h2>
                </div>

                {/* Horizontal Track */}
                <motion.div
                    style={{ x }}
                    className="flex w-[400vw] h-[65vh] will-change-transform transform-gpu"
                >
                    {showcaseProducts.map((product, idx) => (
                        <article key={product.id} className="relative w-[100vw] flex items-center justify-center p-4 sm:p-12 lg:p-24 origin-center">
                            <div className="group relative w-full max-w-5xl h-full flex flex-col md:flex-row items-center gap-8 md:gap-16">

                                {/* Image Box */}
                                <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden rounded-2xl bg-white shadow-lg">
                                    <motion.div
                                        className="w-full h-full filter backface-visibility-hidden transform-gpu"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    >
                                        <NextImage
                                            src={product.image}
                                            alt={`Aerosem Kimya - ${product.name}`}
                                            fill
                                            className="object-cover transition-all duration-[1s] group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                                    </motion.div>

                                    <div className="absolute top-0 left-0 p-5 z-10">
                                        <span className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 font-mono bg-white/80 backdrop-blur px-2 py-1 rounded">
                                            0{idx + 1} // {product.subcategory}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight mb-5">
                                        {product.name}
                                    </h3>
                                    <p className="text-[#6B6B6B] text-lg leading-relaxed line-clamp-4 max-w-lg mb-8">
                                        {product.description}
                                    </p>
                                    <Link href={`/products?category=${product.category}`}>
                                        <div className="group/btn inline-flex items-center gap-4 cursor-pointer">
                                            <div className="w-11 h-11 rounded-full border border-[#1A1A1A]/15 flex items-center justify-center group-hover/btn:bg-[#C61F25] group-hover/btn:border-[#C61F25] transition-all duration-500">
                                                <ArrowRight size={16} className="text-[#1A1A1A] group-hover/btn:text-white transition-colors" />
                                            </div>
                                            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1A1A1A] group-hover/btn:text-[#C61F25] transition-colors">
                                                Discover Product
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </motion.div>

                {/* Progress Bar */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-[#1A1A1A]/10">
                    <motion.div
                        className="h-full bg-[#C61F25]"
                        style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default ShowcaseHome;
