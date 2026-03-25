"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import CorporateButton from '@/components/ui/CorporateButton';
import NextImage from "next/image";

const HeroHome = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const visualRef = useRef(null);
    const contentRef = useRef(null);
    const word1Ref = useRef(null);
    const word2Ref = useRef(null);
    const taglineRef = useRef(null);

    useEffect(() => {
        const visual = visualRef.current;
        const content = contentRef.current;
        const tagline = taglineRef.current;

        const chars1 = word1Ref.current.querySelectorAll('.char');
        const chars2 = word2Ref.current.querySelectorAll('.char');

        const runAnimation = () => {
            const tl = gsap.timeline();

            // Background scale in
            tl.fromTo(visual,
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
            );

            // Tagline fade
            tl.fromTo(tagline,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=1.6"
            );

            // Title Reveal (Char by Char)
            tl.to([...chars1, ...chars2], {
                y: 0,
                opacity: 1,
                rotate: 0,
                duration: 1.2,
                stagger: 0.04,
                ease: "power4.out"
            }, "-=1.2");

            // Content Fade up
            tl.fromTo(content,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
                "-=0.8"
            );
        };

        const hasLoaded = sessionStorage.getItem("aerosem-preloader-shown");

        if (hasLoaded) {
            runAnimation();
        } else {
            const handleComplete = () => {
                runAnimation();
            };
            window.addEventListener("preloader-complete", handleComplete);
            return () => window.removeEventListener("preloader-complete", handleComplete);
        }
    }, []);

    const word1 = "BEYOND";
    const word2 = "CHEMISTRY";

    return (
        <section ref={containerRef} className="relative w-full h-screen flex flex-col justify-end pb-16 md:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#1A1A1A] selection:bg-[#C61F25] selection:text-white">
            <h1 className="sr-only">Aerosem Kimya - Advanced Aviation Chemicals & Aerospace Solutions</h1>

            {/* Visual Background */}
            <div ref={visualRef} className="absolute inset-0 z-0 h-full w-full opacity-0">
                <NextImage
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                    alt="Aerosem Kimya - Advanced Aerospace Engineering Background"
                    fill
                    className="object-cover brightness-[0.4]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 via-transparent to-[#1A1A1A]/30"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">

                {/* Typography */}
                <div className="flex-1">
                    {/* Tagline */}
                    <div ref={taglineRef} className="opacity-0 mb-6">
                        <span className="text-[#C61F25] text-xs md:text-sm font-medium tracking-[0.3em] uppercase">
                            Engineering Safety for the Skies
                        </span>
                    </div>

                    <h2 ref={titleRef} className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-white uppercase leading-[0.85]">
                        <div ref={word1Ref} className="overflow-hidden mb-1 md:mb-2 flex">
                            {word1.split('').map((char, i) => (
                                <span key={i} className="char inline-block translate-y-[120%] opacity-0 origin-top-left -rotate-6">
                                    {char}
                                </span>
                            ))}
                        </div>
                        <div ref={word2Ref} className="overflow-hidden flex text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)' }}>
                            {word2.split('').map((char, i) => (
                                <span key={i} className="char inline-block translate-y-[120%] opacity-0 origin-top-left -rotate-6 transition-all duration-500 hover:text-white cursor-default" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)' }}>
                                    {char}
                                </span>
                            ))}
                        </div>
                    </h2>
                </div>

                {/* Subtext and CTA */}
                <div ref={contentRef} className="opacity-0 translate-y-8 flex-none w-full md:w-[350px] lg:w-[400px]">
                    <div className="h-[1.5px] w-10 bg-[#C61F25] mb-5"></div>
                    <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-8">
                        Advanced aerospace solutions engineered for tomorrow's skies. Uncompromising performance, unmatched reliability.
                    </p>
                    <a href="/products">
                        <CorporateButton variant="outline" icon={<ArrowRight size={16} />}>
                            Explore Solutions
                        </CorporateButton>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-4 sm:left-6 lg:left-12 z-20 hidden md:flex items-center gap-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium -rotate-90 origin-left translate-y-8 translate-x-2">Scroll</div>
                <div className="w-[1px] h-14 bg-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#C61F25] animate-[kinetic-flow_2s_ease-in-out_infinite]"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroHome;
