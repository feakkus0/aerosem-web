'use client';

import React, { useEffect } from 'react';
import { Inter } from 'next/font/google';
import gsap from 'gsap';
import ContactScene from '@/components/contact/Scene';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export default function ContactPage() {

    useEffect(() => {
        gsap.fromTo(".fade-in-up",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 0.2, force3D: true }
        );
    }, []);

    // Aerosem HQ Coordinates roughly
    const mapQuery = "75. YIL MAH. EOSB 5.CAD. NO:8 ODUNPAZARI / ESKİŞEHİR";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

    return (
        <div className={`relative w-full min-h-screen text-[#222222] ${inter.className} bg-[#F9FAFB] overflow-x-hidden`}>

            {/* 3D Background (Light/Subtle) */}
            {/* 3D Background (Light/Subtle) */}
            <ContactScene />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 min-h-screen flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 w-full bg-white/95 p-8 md:p-12 rounded-2xl border border-gray-100 shadow-2xl">

                    {/* LEFT COL: Contact Info */}
                    <div className="flex flex-col justify-center space-y-10 fade-in-up">

                        <div>
                            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0F0F10] mb-4">
                                Get in Touch
                            </h1>
                            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                                Connect with our team for scientific solutions and industrial excellence.
                            </p>
                            <div className="h-1 w-16 bg-[#CC0000] rounded-full mt-6"></div>
                        </div>

                        <div className="space-y-8">

                            {/* Email */}
                            <div className="group">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1 block">Email</span>
                                <a
                                    href="mailto:info@aerosem.com.tr"
                                    className="flex items-center gap-3 text-xl md:text-2xl font-medium text-gray-800 hover:text-[#CC0000] transition-colors duration-300"
                                >
                                    <FiMail className="text-[#CC0000]" />
                                    info@aerosem.com.tr
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="group">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1 block">Phone</span>
                                <div className="flex flex-col gap-1 text-xl md:text-2xl font-medium text-gray-800">
                                    <a
                                        href="tel:+902222362793"
                                        className="flex items-center gap-3 hover:text-[#CC0000] transition-colors duration-300"
                                    >
                                        <FiPhone className="text-[#CC0000]" />
                                        0222 - 236 27 93
                                    </a>
                                    <a
                                        href="tel:+902222280353"
                                        className="flex items-center gap-3 pl-9 hover:text-[#CC0000] transition-colors duration-300"
                                    >
                                        0222 - 228 03 53
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="group">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1 block">Headquarters</span>
                                <a
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 group-hover:opacity-80 transition-opacity duration-300"
                                >
                                    <FiMapPin className="text-[#CC0000] mt-1 shrink-0" />
                                    <div className="text-lg text-gray-600 leading-relaxed font-light">
                                        75. YIL MAH. EOSB 5.CAD. NO:8<br />
                                        ODUNPAZARI / ESKİŞEHİR<br />
                                        Turkey
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT COL: Map */}
                    <div className="fade-in-up w-full h-[400px] md:h-[500px] relative">
                        <div className="w-full h-full rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-white relative group">
                            <iframe
                                src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(mapQuery)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Aerosem HQ Map"
                                // Standard Google Maps visual, minimal saturation adjustments for "Clean" look
                                className="w-full h-full object-cover"
                            ></iframe>

                            {/* Hover overlay hint */}
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none"
                            >
                                <span className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-md text-sm font-medium">View on Google Maps</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
