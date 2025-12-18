"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGET_TEXT = "AEROSEM";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&X@$";
const SCRAMBLE_DURATION = 1200; // 1.2s to lock text
const TOTAL_DURATION = 2000;    // 2.0s total before exit starts

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [displayText, setDisplayText] = useState("");
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        // 1. Session Storage Check
        const hasLoaded = sessionStorage.getItem("aerosem-preloader-shown");
        if (hasLoaded) {
            setIsLoading(false);
            return;
        }

        // 2. Scramble Effect
        let startTime = performance.now();
        let frameId;

        const animateText = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / SCRAMBLE_DURATION, 1);

            // Calculate how many characters should be "locked" based on progress
            const charsToLock = Math.floor(progress * TARGET_TEXT.length);

            let currentString = "";
            for (let i = 0; i < TARGET_TEXT.length; i++) {
                if (i < charsToLock) {
                    currentString += TARGET_TEXT[i];
                } else {
                    // Random character
                    currentString += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
            }

            setDisplayText(currentString);

            if (progress < 1) {
                frameId = requestAnimationFrame(animateText);
            } else {
                setDisplayText(TARGET_TEXT);
                setIsLocked(true);

                // Wait for Red Line & Exit
                setTimeout(() => {
                    setIsLoading(false);
                    sessionStorage.setItem("aerosem-preloader-shown", "true");
                    window.dispatchEvent(new Event("preloader-complete"));
                }, TOTAL_DURATION - SCRAMBLE_DURATION);
            }
        };

        frameId = requestAnimationFrame(animateText);

        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111111] text-white overflow-hidden font-mono"
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                >
                    <div className="relative">
                        {/* Main Text */}
                        <h1 className="text-4xl md:text-8xl font-bold tracking-[0.2em] md:tracking-[0.5em] text-[#e5e5e5]">
                            {displayText}
                        </h1>

                        {/* Red Line Expansion */}
                        {isLocked && (
                            <motion.div
                                className="absolute -bottom-4 left-0 h-[2px] bg-[#CC0000]"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            />
                        )}
                    </div>

                    {/* Decorative Decryption UI */}
                    <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50 text-xs tracking-widest text-gray-500">
                        <p>DECRYPTING SYSTEM...</p>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1 h-1 bg-[#CC0000] rounded-full"
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                />
                            ))}
                        </div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
