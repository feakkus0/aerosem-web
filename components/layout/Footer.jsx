import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <div className="w-full overflow-hidden whitespace-nowrap border-y border-border-light dark:border-border-dark py-4">
                <div className="animate-marquee inline-block">
                    <span className="ticker-text mx-4 text-sm font-bold uppercase tracking-widest">AVIATION SOLUTIONS • INDUSTRIAL CHEMISTRY • INNOVATION IN MOTION</span>
                    <span className="ticker-text mx-4 text-sm font-bold uppercase tracking-widest">AVIATION SOLUTIONS • INDUSTRIAL CHEMISTRY • INNOVATION IN MOTION</span>
                </div>
                <div className="animate-marquee-2 inline-block">
                    <span className="ticker-text mx-4 text-sm font-bold uppercase tracking-widest">AVIATION SOLUTIONS • INDUSTRIAL CHEMISTRY • INNOVATION IN MOTION</span>
                    <span className="ticker-text mx-4 text-sm font-bold uppercase tracking-widest">AVIATION SOLUTIONS • INDUSTRIAL CHEMISTRY • INNOVATION IN MOTION</span>
                </div>
            </div>
            <footer className="bg-[#1A1A1A] text-white">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div className="md:col-span-2">
                            <div className="relative h-16 w-64">
                                <Image
                                    src="/logoa1.webp"
                                    alt="Aerosem Kimya Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <p className="mt-4 text-sm text-white/70">The Art of Precision Chemistry.</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li><Link className="text-white/70 hover:text-primary" href="mailto:info@aerosem.com.tr">info@aerosem.com.tr</Link></li>
                                <li><Link className="text-white/70 hover:text-primary" href="tel:02222362793">0222 - 236 27 93</Link></li>
                                <li><Link className="text-white/70 hover:text-primary" href="tel:02222280353">0222 - 228 03 53</Link></li>
                                <li><p className="text-white/70">75. YIL MAH. EOSB 5.CAD. NO:8 ODUNPAZARI / ESKİŞEHİR</p></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li><Link className="text-white/70 hover:text-primary" href="#">Privacy Policy</Link></li>
                                <li><Link className="text-white/70 hover:text-primary" href="#">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
                        <p>© 2024 Aerosem Kimya. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
