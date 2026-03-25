"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NextImage from "next/image";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/certificates", label: "Certificates" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const menuVariants = {
    closed: {
        clipPath: "circle(0% at calc(100% - 48px) 48px)",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            when: "afterChildren",
            staggerChildren: 0.04,
            staggerDirection: -1,
        }
    },
    open: {
        clipPath: "circle(150% at calc(100% - 48px) 48px)",
        transition: {
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
            when: "beforeChildren",
            staggerChildren: 0.08,
            delayChildren: 0.3,
        }
    }
};

const linkVariants = {
    closed: { y: 60, opacity: 0, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    open: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } }
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const darkHeroPaths = ['/', '/products', '/products/aviation', '/products/general', '/certificates', '/about'];
    const isDarkHero = darkHeroPaths.includes(pathname);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    // On dark hero pages when not scrolled, use white text; otherwise use dark text
    const useWhiteText = !isScrolled && isDarkHero;

    return (
        <React.Fragment>
            {/* Top Navigation Bar */}
            <header
                className={`fixed top-0 z-[60] w-full transition-all duration-500 ${isScrolled
                        ? 'py-3 px-4 md:px-10 bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
                        : 'py-5 px-4 md:px-10 bg-transparent'
                    }`}
            >
                <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto">
                    {/* Brand */}
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className="relative block h-8 w-28 md:h-9 md:w-32">
                        <NextImage
                            src="/logoa1.webp"
                            alt="Aerosem Kimya - Official Brand Logo"
                            width={160}
                            height={45}
                            priority
                            className="w-auto h-8 sm:h-9 md:h-10 transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop Nav Links */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[13px] font-medium tracking-wide transition-colors duration-300 relative group ${useWhiteText && !isMenuOpen
                                        ? 'text-white/80 hover:text-white'
                                        : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                                    } ${pathname === link.href ? (useWhiteText && !isMenuOpen ? 'text-white' : 'text-[#1A1A1A]') : ''}`}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#C61F25] transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="group flex items-center gap-3 focus:outline-none z-[70]"
                        aria-label="Toggle menu"
                    >
                        <span className={`hidden md:block text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${isMenuOpen ? 'text-white/60' : useWhiteText ? 'text-white/60 group-hover:text-white' : 'text-[#1A1A1A]/40 group-hover:text-[#1A1A1A]'
                            }`}>
                            {isMenuOpen ? "Close" : "Menu"}
                        </span>
                        <div className={`relative w-10 h-10 rounded-full border flex flex-col justify-center items-center gap-[5px] transition-all duration-300 ${isMenuOpen
                                ? 'border-white/20 hover:bg-white/10'
                                : useWhiteText
                                    ? 'border-white/20 hover:bg-white/10'
                                    : 'border-[#1A1A1A]/15 hover:bg-[#1A1A1A]/5'
                            }`}>
                            <motion.span
                                animate={isMenuOpen
                                    ? { y: 3.5, rotate: 45, backgroundColor: "#ffffff" }
                                    : { y: 0, rotate: 0, backgroundColor: useWhiteText ? "#ffffff" : "#1A1A1A" }
                                }
                                transition={{ duration: 0.3 }}
                                className="w-4 h-[1.5px] block rounded-full"
                            />
                            <motion.span
                                animate={isMenuOpen
                                    ? { y: -3.5, rotate: -45, backgroundColor: "#ffffff" }
                                    : { y: 0, rotate: 0, backgroundColor: useWhiteText ? "#ffffff" : "#1A1A1A" }
                                }
                                transition={{ duration: 0.3 }}
                                className="w-4 h-[1.5px] block rounded-full"
                            />
                        </div>
                    </button>
                </div>
            </header>

            {/* Fullscreen Elegant Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-[55] bg-[#2A2826] flex flex-col justify-center overflow-hidden"
                    >
                        {/* Subtle decorative line */}
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                            className="absolute left-[8%] top-0 w-[1px] h-full bg-white/[0.06] origin-top pointer-events-none"
                        />

                        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 flex flex-col md:flex-row justify-between items-start md:items-end h-[70vh]">

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-2 md:gap-4 w-full md:w-auto pl-0 md:pl-[8%]">
                                {navLinks.map((link, idx) => (
                                    <div key={link.href} className="overflow-hidden">
                                        <motion.div variants={linkVariants}>
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="group flex items-baseline gap-4 md:gap-8 py-1"
                                            >
                                                <span className="text-[11px] md:text-sm font-mono text-[#C61F25]/60 font-medium tracking-wider">
                                                    0{idx + 1}
                                                </span>
                                                <span className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] transition-colors duration-400 ${pathname === link.href
                                                        ? 'text-[#C61F25]'
                                                        : 'text-white/90 group-hover:text-[#C61F25]'
                                                    }`}>
                                                    {link.label}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    </div>
                                ))}
                            </nav>

                            {/* Contact Info */}
                            <motion.div
                                variants={linkVariants}
                                className="hidden md:flex flex-col gap-10 text-right pb-4"
                            >
                                <div>
                                    <h4 className="text-white/25 text-[11px] font-medium uppercase tracking-[0.2em] mb-3">Contact</h4>
                                    <p className="text-white/70 text-base">info@aerosemkimya.com</p>
                                    <p className="text-white/70 text-base">+90 216 123 45 67</p>
                                </div>
                                <div>
                                    <h4 className="text-white/25 text-[11px] font-medium uppercase tracking-[0.2em] mb-3">Socials</h4>
                                    <a href="#" className="block text-white/70 text-base hover:text-[#C61F25] transition-colors mb-1">LinkedIn</a>
                                    <a href="#" className="block text-white/70 text-base hover:text-[#C61F25] transition-colors">Instagram</a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Footer of Menu */}
                        <motion.div
                            variants={linkVariants}
                            className="absolute bottom-6 left-4 right-4 md:left-10 md:right-10 flex justify-between items-center border-t border-white/[0.08] pt-6"
                        >
                            <span className="text-white/25 text-[11px] font-mono tracking-widest">AEROSEM KIMYA INC.</span>
                            <span className="text-white/25 text-[11px] font-mono tracking-widest">EST. 2010</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};

export default Navbar;
