"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Send } from 'lucide-react';
import CorporateButton from '@/components/ui/CorporateButton';

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const visualRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const title = titleRef.current;
        const visual = visualRef.current;
        const content = contentRef.current;

        // Split text manually since we don't have SplitText plugin
        // "BEYOND CHEMISTRY"
        const words = title.querySelectorAll('.word-span');

        const runAnimation = () => {
            const tl = gsap.timeline();

            // 1. Title Animation (Slide up words)
            tl.to(words, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.2 // Small delay after curtain lift
            });

            // 2. Visual Animation (Scale 1.2 -> 1.0)
            tl.fromTo(visual,
                { scale: 1.2, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
                "-=1.0"
            );

            // 3. Subtext & Button (Fade Up)
            tl.fromTo(content,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
                "-=1.0"
            );
        };

        // Check if preloader ran this session
        const hasLoaded = sessionStorage.getItem("aerosem-preloader-shown");

        if (hasLoaded) {
            // If already loaded, run immediately (maybe faster or set to final state?)
            // For now, run animation but perhaps faster or just normal to be safe
            runAnimation();
        } else {
            // Wait for event
            const handleComplete = () => {
                runAnimation();
            };
            window.addEventListener("preloader-complete", handleComplete);
            return () => window.removeEventListener("preloader-complete", handleComplete);
        }

    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-[100dvh] flex items-center justify-center pt-24 pb-12 md:pt-32 overflow-hidden bg-white">
            {/* Visual Background */}
            <div ref={visualRef} className="absolute inset-0 z-0 h-full w-full opacity-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/herov6.png')" }}
                ></div>
                <div className="absolute inset-0 bg-white/30"></div>
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
            </div>

            <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
                <h1 ref={titleRef} className="text-5xl md:text-9xl font-black tracking-tighter text-[#0F0F10] uppercase leading-[0.9] overflow-hidden">
                    {/* Manual Split for animation targets */}
                    <div className="overflow-hidden inline-block"><span className="word-span block translate-y-full opacity-0">BEYOND</span></div>
                    <br />
                    <div className="overflow-hidden inline-block"><span className="word-span block translate-y-full opacity-0">CHEMISTRY</span></div>
                </h1>

                <div ref={contentRef} className="opacity-0 translate-y-4">
                    <p className="mt-8 text-lg md:text-xl text-[#0F0F10] max-w-2xl mx-auto font-medium leading-relaxed">
                        Advanced aerospace solutions engineered for tomorrow’s skies.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                        <a href="/products">
                            <CorporateButton icon={<ArrowRight size={14} />}>
                                Explore Our Solutions
                            </CorporateButton>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
