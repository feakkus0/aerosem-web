"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

export default function NotFound() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F9FAFB] text-slate-800 font-display overflow-hidden">

            {/* Background Abstract Visual (Spilled Beaker / Elements) */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-slate-900"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full border border-slate-900 border-dashed"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="relative z-10 text-center px-4">
                {/* 404 with Benzene Ring */}
                <motion.div
                    className="flex items-center justify-center text-[8rem] md:text-[15rem] leading-none font-black text-[#0F0F10] tracking-tighter"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span>4</span>
                    <div className="relative mx-2 md:mx-4">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Hexagon size={140} strokeWidth={1.5} className="text-[#CC0000] w-24 h-24 md:w-48 md:h-48" />
                        </motion.div>
                        {/* Inner circle for Benzene representation */}
                        <div className="absolute inset-0 m-auto w-12 h-12 md:w-24 md:h-24 rounded-full border-2 border-[#CC0000]"></div>
                    </div>
                    <span>4</span>
                </motion.div>

                <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest mb-6 text-slate-700">
                    Element Not Found
                </h2>

                <p className="text-slate-500 max-w-md mx-auto mb-10 text-lg leading-relaxed">
                    The compound you are looking for has evaporated or never existed in our lab.
                </p>

                <Link href="/">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#CC0000] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider text-sm shadow-xl hover:bg-[#a00000] transition-colors"
                    >
                        Return to Lab
                    </motion.button>
                </Link>
            </div>
        </div>
    );
}
