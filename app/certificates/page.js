'use client';

import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

const CERTIFICATES_DATA = [
    { id: 1, code: "01", name: "ISO 9001:2015", desc: "Quality Management System", img: "/certs/iso9001.jpg" },
    { id: 2, code: "02", name: "ISO 14001:2015", desc: "Environmental Management", img: "/certs/iso14001.jpg" },
    { id: 3, code: "03", name: "OHSAS 18001", desc: "Occupational Health & Safety", img: "/certs/ohsas18001.jpg" },
    { id: 4, code: "04", name: "HELAL BELGESİ", desc: "Halal Certification Standard", img: "/certs/halal.jpg" },
    { id: 5, code: "05", name: "TSE / HYB", desc: "Service Adequacy Certificate", img: "/certs/tse.jpg" },
    { id: 6, code: "06", name: "YERLİ MALI", desc: "Domestic Goods Certificate", img: "/certs/yerli.jpg" },
];

export default function CertificatesPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={`min-h-screen bg-white text-[#111] ${inter.className}`}>

            <div className="flex flex-col lg:flex-row min-h-screen">

                {/* LEFT COLUMN: Scrollable List */}
                <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-24 flex flex-col justify-center min-h-[50vh] lg:min-h-screen z-10 bg-white">

                    {/* Header */}
                    <div className="mb-16 md:mb-24 mt-20 lg:mt-0">
                        <span className="text-[#D32F2F] font-bold tracking-widest text-xs uppercase mb-3 block">
                            Our Standards
                        </span>
                        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">
                            Certificates &<br /> Archive.
                        </h1>
                        <p className="text-gray-500 font-light text-lg max-w-md leading-relaxed">
                            A curated selection of our global compliances, ensuring quality at every step of the chemical process.
                        </p>
                    </div>

                    {/* The List */}
                    <div className="space-y-4">
                        {CERTIFICATES_DATA.map((cert, index) => (
                            <div
                                key={cert.id}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`group relative py-8 border-b cursor-pointer transition-all duration-300 ${index === activeIndex ? 'border-[#D32F2F]' : 'border-gray-100'
                                    }`}
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-baseline gap-6 md:gap-10 transition-transform duration-300 group-hover:translate-x-4">
                                        <span className={`font-mono text-sm transition-colors duration-300 ${index === activeIndex ? 'text-[#D32F2F]' : 'text-gray-400'
                                            }`}>
                                            {cert.code}
                                        </span>
                                        <h3 className={`text-2xl md:text-3xl font-light tracking-tight transition-colors duration-300 ${index === activeIndex ? 'text-[#D32F2F]' : 'text-gray-900'
                                            }`}>
                                            {cert.name}
                                        </h3>
                                    </div>

                                    <div className={`text-[#D32F2F] text-2xl transition-all duration-300 transform ${index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                        }`}>
                                        <FiArrowRight />
                                    </div>
                                </div>

                                {/* Mobile/Tablet Description (Hidden on Desk, shown on active) */}
                                <div className={`mt-4 pl-10 md:pl-16 lg:hidden overflow-hidden transition-all duration-300 ${index === activeIndex ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                    <p className="text-sm text-gray-500 mb-2">{cert.desc}</p>
                                    <button className="text-xs font-bold text-[#D32F2F] uppercase tracking-widest flex items-center gap-2">
                                        Download PDF <FiDownload />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Info */}
                    <div className="mt-24 pt-10 border-t border-gray-100 lg:hidden">
                        <p className="text-gray-400 text-sm">
                            © Aerosem Kimya. All rights reserved.
                        </p>
                    </div>

                </div>

                {/* RIGHT COLUMN: Sticky Image Preview (Desktop Only) */}
                <div className="hidden lg:block w-1/2 sticky top-0 h-screen bg-gray-50 border-l border-gray-100 self-start">
                    <div className="relative w-full h-full flex items-center justify-center p-20 overflow-hidden">

                        {/* Dynamic Background Number */}
                        <div className="absolute right-0 bottom-0 text-[20rem] font-bold text-gray-100 leading-none select-none -z-0">
                            {CERTIFICATES_DATA[activeIndex].code}
                        </div>

                        {/* Image Transition Container */}
                        <div className="relative w-full aspect-[3/4] max-w-md shadow-2xl z-10 bg-white">
                            {CERTIFICATES_DATA.map((cert, index) => (
                                <div
                                    key={cert.id}
                                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out bg-gray-200 ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    {/* Placeholder logic for demo */}
                                    {/* <Image src={cert.img} alt={cert.name} fill className="object-cover" /> */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300">
                                        <span className="text-6xl mb-4">📄</span>
                                        <p className="uppercase tracking-widest text-sm font-semibold text-gray-400">Preview</p>
                                    </div>

                                    {/* Overlay Details */}
                                    <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-8 border-t border-gray-100">
                                        <h4 className="text-xl font-bold text-gray-900 mb-1">{cert.name}</h4>
                                        <p className="text-sm text-gray-500 mb-4">{cert.desc}</p>
                                        <button className="w-full bg-[#D32F2F] text-white py-3 px-6 rounded-none uppercase tracking-widest text-xs font-bold hover:bg-black transition-colors duration-300 flex items-center justify-center gap-2">
                                            Download Document <FiDownload />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}
