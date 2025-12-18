"use client";

import React from 'react';

const TrustedBy = () => {
    // Logo Data (Text based for now, replacing previous hardcoded structure)
    // Duplicated naturally by the mapping logic below
    const logos = [
        "AIRBUS",
        "BOEING",
        "LOCKHEED",
        "TURKISH AIRLINES",
        "LUFTHANSA",
        "EMBRAER",
        "BOMBARDIER",
        "GE AVIATION"
    ];

    return (
        <section className="py-12 sm:py-16 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Trusted by Aviation Leaders
                    </h3>
                </div>

                {/* Marquee Wrapper with Gradient Mask */}
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">

                    {/* Scrolling Track (Rendered Twice for Loop) */}
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll-now">

                        {/* First Set */}
                        {logos.map((logo, index) => (
                            <li key={`logo-1-${index}`}>
                                <span className="text-2xl md:text-3xl font-bold text-gray-300 uppercase tracking-[0.2em] whitespace-nowrap hover:text-red-600 transition-colors duration-300 cursor-default">
                                    {logo}
                                </span>
                            </li>
                        ))}

                        {/* Second Set (Duplicate) */}
                        {logos.map((logo, index) => (
                            <li key={`logo-2-${index}`}>
                                <span className="text-2xl md:text-3xl font-bold text-gray-300 uppercase tracking-[0.2em] whitespace-nowrap hover:text-red-600 transition-colors duration-300 cursor-default">
                                    {logo}
                                </span>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
