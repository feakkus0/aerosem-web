"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CorporateButton from '@/components/ui/CorporateButton';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CtaHome = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="relative py-48 md:py-[30vh] px-4 sm:px-6 lg:px-12 bg-[#C61F25] overflow-hidden flex items-center justify-center selection:bg-white selection:text-[#C61F25]">

            {/* Massive Background Type */}
            <motion.div
                style={{ scale, opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <span className="text-[20vw] font-bold text-white/[0.08] tracking-tighter uppercase whitespace-nowrap leading-none">
                    ELEVATE
                </span>
            </motion.div>

            <motion.div
                style={{ y }}
                className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center"
            >
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[0.95]">
                    Ready to elevate<br/>your standards?
                </h2>
                <p className="text-lg md:text-xl text-white/70 font-light mb-12 max-w-2xl leading-relaxed">
                    Partner with the architects of aerospace chemistry to secure the future of your fleet operations.
                </p>
                <Link href="/contact">
                    <CorporateButton
                        icon={<ArrowRight size={18} />}
                        className="bg-white text-[#C61F25] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] h-14 px-10 text-sm border-white"
                    >
                        Initiate Contact
                    </CorporateButton>
                </Link>
            </motion.div>
        </section>
    );
};

export default CtaHome;
