"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export default function DocumentationPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-background-dark pt-32">
            <section className="px-4 py-24 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Reveal>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#0F0F10] dark:text-white tracking-tight mb-6">
                        Documentation
                    </h1>
                </Reveal>
                <Reveal>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl font-light">
                        Technical specifications and safety data sheets.
                    </p>
                </Reveal>
            </section>
        </div>
    );
}
