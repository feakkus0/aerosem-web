"use client";

import React from 'react';
import { ShieldCheck, FlaskConical } from 'lucide-react';

const WhyChoose = () => {
    return (
        <section className="py-16 sm:py-24 lg:px-8 bg-[#0F0F10] text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Why Choose Aerosem Kimya?
                        </h2>
                        <p className="mt-4 text-base text-white/80">
                            We combine cutting-edge technology with an unwavering commitment to quality and safety, delivering solutions that lead the industry forward.
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <div className="flex flex-col">
                                <ShieldCheck className="w-12 h-12 text-[#C61F25] mb-4" />
                                <h3 className="mt-2 text-lg font-bold">Certified Excellence</h3>
                                <p className="mt-1 text-sm text-white/70">Adhering to the strictest international aviation standards.</p>
                            </div>
                            <div className="flex flex-col">
                                <FlaskConical className="w-12 h-12 text-[#C61F25] mb-4" />
                                <h3 className="mt-2 text-lg font-bold">Innovative Formulations</h3>
                                <p className="mt-1 text-sm text-white/70">Pioneering the next generation of chemical solutions.</p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <a href="/about">
                                <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded bg-gradient-to-r from-[#C61F25] to-[#E0242C] px-6 text-base font-bold text-white shadow-lg shadow-red-600/30 transition-transform hover:scale-105 hover:shadow-red-600/50">
                                    <span className="truncate">About Us</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div
                            className="aspect-square w-full max-w-md rounded-lg bg-cover bg-center"
                            data-alt="A hyper-realistic 3D macro render of a metallic aircraft wing surface being coated by a thick, glossy, protective liquid. The lighting is cinematic with cool silver tones and a subtle red rim light."
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByKUGJVQOCFcd3iqjp3q02yBCrrE71bfOIcJYTqDIvnBbPsJQp_rljSVMfrd5JvOeOMV_46fUmIq7crrHTL4DKwTnrEFh0m6ipr2-bpeox_x-vK9X7plkqKsP9DivsvdTIXXg09vSPCAzZQNZ8x0MohLJI67MX3PR0_RnRyUE4FZzvgkioxMHRIR7vRyZFt51BgNzBXvxcq5Ph5kM1uU_8USaC9FkiA48S_4qk__wzCuQiWN6AaNVhl7mylaSspwAtrMCSGZE_0V85')" }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
