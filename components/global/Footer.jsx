"use client";
import NextImage from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="sticky bottom-0 z-0 h-[80vh] w-full bg-[#2A2826] text-white overflow-hidden font-display selection:bg-white selection:text-[#2A2826]">

            <div className="absolute inset-0 flex flex-col justify-end">
                <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 relative z-10 pb-8 md:pb-12 flex-1 flex flex-col pt-20 md:pt-28">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-auto">

                        {/* Call to Action Column */}
                        <div className="flex flex-col items-start md:-mt-8">

                            <Link href="/" className="mb-6 block w-fit relative group/logo cursor-pointer">
                                <NextImage
                                    src="/logoa1.webp"
                                    alt="Aerosem Kimya - Brand Logo Footer"
                                    width={140}
                                    height={40}
                                    className="opacity-80 group-hover/logo:opacity-100 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 bg-white/20 blur-[20px] rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </Link>
                            <h2 className="text-4xl md:text-[5vw] font-bold tracking-tighter leading-[1.0] mb-8 text-white/95 relative z-10 transition-transform duration-700 hover:scale-[1.02] origin-left">
                                Let&apos;s build<br />something great.
                            </h2>
                            <Link href="/contact" className="group relative inline-flex items-center gap-6 overflow-hidden rounded-full border border-white/10 bg-white/5 pl-8 pr-4 py-3 transition-all duration-500 hover:border-[#C61F25] hover:bg-black/40 hover:shadow-[0_0_30px_rgba(198,31,37,0.2)] shadow-xl">
                                <span className="relative z-10 text-sm font-semibold tracking-[0.15em] uppercase text-white/70 transition-colors group-hover:text-white">
                                    Contact Us
                                </span>
                                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:bg-[#C61F25] group-hover:scale-110 shadow-inner">
                                    <ArrowRight className="h-4 w-4 text-white transition-transform duration-500 group-hover:-rotate-45" />
                                </div>
                                <div className="absolute inset-0 scale-x-0 bg-gradient-to-r from-transparent via-[#C61F25]/20 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100 pointer-events-none" />
                            </Link>
                        </div>

                        {/* Sitemap Columns */}
                        <div className="flex flex-col md:flex-row gap-12 md:justify-end mt-6 md:mt-0">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-white/25 text-[11px] font-medium uppercase tracking-[0.2em] mb-2 px-2">Products</h3>
                                <Link href="/products/aviation" className="group flex items-center justify-between gap-4 text-white/60 text-base hover:text-white transition-colors duration-300 px-2 py-1 relative overflow-hidden rounded-md hover:bg-white/5">
                                    <span className="relative z-10">Aviation Chemicals</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 text-[#C61F25] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 z-10" />
                                </Link>
                                <Link href="/products/general" className="group flex items-center justify-between gap-4 text-white/60 text-base hover:text-white transition-colors duration-300 px-2 py-1 relative overflow-hidden rounded-md hover:bg-white/5">
                                    <span className="relative z-10">General Chemicals</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 text-[#C61F25] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 z-10" />
                                </Link>
                                <Link href="/certificates" className="group flex items-center justify-between gap-4 text-white/60 text-base hover:text-white transition-colors duration-300 px-2 py-1 relative overflow-hidden rounded-md hover:bg-white/5">
                                    <span className="relative z-10">Certifications</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 text-[#C61F25] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 z-10" />
                                </Link>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-white/25 text-[11px] font-medium uppercase tracking-[0.2em] mb-2 px-2">Enterprise</h3>
                                <Link href="/about" className="group flex items-center justify-between gap-8 text-white/60 text-base hover:text-white transition-colors duration-300 px-2 py-1 relative overflow-hidden rounded-md hover:bg-white/5">
                                    <span className="relative z-10">About</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 text-[#C61F25] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 z-10" />
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Large Brand Typography */}
                    <div className="w-full flex justify-between items-end border-b border-white/[0.06] pb-5 mb-5 relative group">
                        <span className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase text-white/[0.03] transition-colors duration-700 ease-in-out group-hover:text-white/[0.06] select-none pointer-events-none relative z-10">
                            AEROSEM
                        </span>
                        <div className="absolute bottom-0 left-[20%] w-[40%] h-[60%] bg-[#C61F25] rounded-full opacity-0 group-hover:opacity-[0.1] blur-[100px] transition-all duration-1000 pointer-events-none" />
                    </div>

                    {/* Micro Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[11px] text-white/25 font-mono tracking-widest uppercase gap-4 pb-2 md:pb-0">
                        <p className="select-none tracking-[0.2em] opacity-80">&copy; {new Date().getFullYear()} AEROSEM KIMYA INC. ALL RIGHTS RESERVED.</p>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group flex items-center gap-3 hover:text-white/80 transition-all duration-300 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full cursor-pointer"
                        >
                            Return to Top 
                            <span className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                                <ArrowUp className="w-3 h-3 text-white/50 group-hover:text-[#C61F25] transition-colors shadow-xl" />
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </footer>
    );
}
