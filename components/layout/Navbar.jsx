"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
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

    return (
        <React.Fragment>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm border-black/5 dark:border-white/5 py-3 shadow-sm'
                    : 'bg-transparent border-transparent py-4'
                    }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 z-50">
                        <Link href="/" className="relative block h-10 w-32 md:h-12 md:w-48" onClick={() => setIsMobileMenuOpen(false)}>
                            <Image
                                src="/logoa1.webp"
                                alt="Aerosem Kimya Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-text-light dark:text-text-dark transition-colors hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        {/* Request Quote Button */}
                        <button className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded bg-gradient-to-r from-[#C61F25] to-[#E0242C] px-4 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition-all hover:opacity-90 hover:shadow-red-600/50 h-10">
                            <span className="truncate">Request a Quote</span>
                        </button>

                        {/* Custom Animated Mobile Toggle */}
                        <div className="md:hidden z-50">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="relative w-12 h-12 flex items-center justify-center focus:outline-none"
                                aria-label="Toggle Menu"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <motion.path
                                        stroke="currentColor"
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
                                        stroke="currentColor"
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
