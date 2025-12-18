"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    // Marquee effect (moving text) as you scroll down
    const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <footer ref={containerRef} className="relative bg-[#CC0000] text-white pt-24 pb-8 overflow-hidden font-display">

            {/* 1. MASSIVE TYPOGRAPHY (Marquee-like) */}
            <div className="w-full overflow-hidden mb-16 opacity-20 pointer-events-none">
                <motion.div style={{ x }} className="whitespace-nowrap">
                    <h1 className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter">
                        AEROSEM KIMYA AEROSEM
                    </h1>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

                    {/* Logo & Newsletter */}
                    <div className="md:col-span-5 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 tracking-wide">LET'S INNOVATE.</h2>
                            <p className="text-white/80 max-w-sm mb-8 leading-relaxed">
                                Join our newsletter to stay ahead with the latest in aerospace chemical engineering and sustainable solutions.
                            </p>

                            <form className="flex items-center border-b border-white/30 pb-2 mb-8 group focus-within:border-white transition-colors duration-300">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-transparent border-none outline-none text-white placeholder-white/50 w-full text-lg py-2"
                                />
                                <button type="button" className="text-white/70 hover:text-white uppercase text-sm font-bold tracking-widest transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        <div className="flex gap-4 mt-8 md:mt-0">
                            {[FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#CC0000] transition-all duration-300">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2 md:col-start-7">
                        <h3 className="text-white/50 font-bold mb-6 uppercase tracking-widest text-sm">Products</h3>
                        <ul className="space-y-4">
                            {['Aviation', 'Industrial', 'Marine', 'Automotive', 'Defense'].map((item) => (
                                <li key={item}>
                                    <Link href={`/products/${item.toLowerCase()}`} className="text-lg hover:translate-x-2 inline-block transition-transform duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-white/50 font-bold mb-6 uppercase tracking-widest text-sm">Company</h3>
                        <ul className="space-y-4">
                            {['About Us', 'Sustainability', 'Careers', 'News', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-lg hover:translate-x-2 inline-block transition-transform duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-white/50 font-bold mb-6 uppercase tracking-widest text-sm">Legal</h3>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-lg hover:translate-x-2 inline-block transition-transform duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
                    <p>&copy; {new Date().getFullYear()} Aerosem Kimya. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <span>Made with precision.</span>
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="uppercase hover:text-white transition-colors">
                            Back to Top ↑
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
