"use client";

import React from 'react';

const TrustedBy = () => {
    return (
        <section className="py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-text-light/60 dark:text-text-dark/60">
                        Trusted by Aviation Leaders
                    </h3>
                </div>
                <div className="relative mt-8 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-primary/80 animate-highlight-line-pulse"></div>
                    <div className="flex shrink-0 animate-marquee-logos">
                        <div className="flex items-center justify-center gap-16 px-8 md:gap-20">
                            <span className="text-2xl font-bold text-gray-300 uppercase tracking-[0.2em]">AIRBUS</span>
                            <span className="text-2xl font-bold text-gray-300 uppercase tracking-[0.2em]">BOEING</span>
                            <span className="text-2xl font-bold text-gray-300 uppercase tracking-[0.2em]">LOCKHEED</span>
                            <span className="text-2xl font-bold text-gray-300 uppercase tracking-[0.2em]">TURKISH AIRLINES</span>
                            <span className="text-2xl font-bold text-gray-300 uppercase tracking-[0.2em]">LUFTHANSA</span>
                        </div>
                    </div>
                    <div className="flex shrink-0 animate-marquee-logos">
                        <div className="flex items-center justify-center gap-16 px-8 md:gap-20">
                            <span className="text-2xl font-bold text-gray-300 uppercase tracking-[0.2em]">AIRBUS</span>
                            <span className="text-2xl font-bold text-gray-300 uppercase tracking-[0.2em]">BOEING</span>
                            <span className="text-2xl font-bold text-gray-300 uppercase tracking-[0.2em]">LOCKHEED</span>
                            <span className="text-2xl font-bold text-gray-300 uppercase tracking-[0.2em]">TURKISH AIRLINES</span>
                            <span className="text-2xl font-bold text-gray-300 uppercase tracking-[0.2em]">LUFTHANSA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
