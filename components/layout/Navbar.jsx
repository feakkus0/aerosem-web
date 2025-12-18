"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/certificates", label: "Certificates" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const sidebarVariants = {
    open: {
        clipPath: "circle(150% at calc(100% - 40px) 40px)",
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    },
    closed: {
        clipPath: "circle(0% at calc(100% - 40px) 40px)",
        transition: {
            delay: 0.2, // Delay closing so links fade out first
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const navListVariants = {
    open: {
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const navItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Define exactly which paths have dark backgrounds (requiring white text at top)
    // Includes main products page and category sub-pages.
    const darkHeroPaths = ['/products', '/products/aviation', '/products/general'];
    const isDarkPage = darkHeroPaths.includes(pathname);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    // Dynamic Text Color Logic
    // If Scrolled: Always Black
    // If Top & Dark Page: White
    // If Top & Light Page: Black
    const textColorClass = isScrolled ? 'text-[#0F0F10]' : (isDarkPage ? 'text-white' : 'text-[#0F0F10]');
    const logoFilterClass = isScrolled ? '' : (isDarkPage ? 'brightness-0 invert' : ''); // Optional: invert logo if needed, but text color request was specific. Keeping logo simple for now or assuming it handles itself. The request didn't explicitly ask for logo inversion, but often needed. User didn't ask for logo inversion, just text. I will stick to text color request.

    return (
        <React.Fragment>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${isScrolled
                    ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm py-4'
                    : 'bg-transparent py-6 border-transparent'
                    }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 z-50">
                        <Link href="/" className="relative block h-10 w-32 md:h-12 md:w-48" onClick={() => setIsMobileMenuOpen(false)}>
                            <Image
                                src="/logoa1.webp"
                                alt="Aerosem Kimya Logo"
                                fill
                                className={`object-contain object-left transition-all duration-300 ${!isScrolled && isDarkPage ? 'brightness-0 invert' : ''}`}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 items-center justify-evenly">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${textColorClass}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        {/* Request Quote Button */}
                        <Link href="/contact" className="hidden md:flex">
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#C61F25] px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#a0181d] hover:-translate-y-1">
                                <span className="truncate">Request a Quote</span>
                            </button>
                        </Link>

                        {/* Custom Animated Mobile Toggle */}
                        <div className="md:hidden z-50">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="relative w-12 h-12 flex items-center justify-center focus:outline-none"
                                aria-label="Toggle Menu"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <motion.path
                                        stroke={!isScrolled && isDarkPage ? "white" : "currentColor"}
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        variants={{
                                            closed: { d: "M 4 8 L 20 8" },
                                            open: { d: "M 6 18 L 18 6" }
                                        }}
                                        initial="closed"
                                        animate={isMobileMenuOpen ? "open" : "closed"}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.path
                                        stroke={!isScrolled && isDarkPage ? "white" : "currentColor"}
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        variants={{
                                            closed: { d: "M 4 16 L 20 16" },
                                            open: { d: "M 6 6 L 18 18" }
                                        }}
                                        initial="closed"
                                        animate={isMobileMenuOpen ? "open" : "closed"}
                                        transition={{ duration: 0.3 }}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay with Circular Reveal */}
            <motion.div
                className="fixed inset-0 z-40 bg-white"
                initial={false}
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={sidebarVariants}
            >
                {/* Subtle Background Pattern (Molecular Grid) */}
                <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                        backgroundSize: "30px 30px"
                    }}
                ></div>

                <motion.div
                    className="h-full flex flex-col justify-center px-8 sm:px-16"
                    variants={navListVariants}
                >
                    {navLinks.map((link) => (
                        <motion.div key={link.href} variants={navItemVariants} className="overflow-hidden py-2">
                            <Link
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-3xl sm:text-7xl font-bold tracking-tighter text-[#111] hover:text-[#CC0000] transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}

                    <motion.div variants={navItemVariants} className="mt-12">
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <div className="inline-flex items-center gap-2 text-[#CC0000] font-bold uppercase tracking-widest text-sm border-b border-[#CC0000] pb-1">
                                Get in Touch
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </React.Fragment>
    );
};

export default Navbar;
