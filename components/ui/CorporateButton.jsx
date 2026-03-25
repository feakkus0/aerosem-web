"use client";

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const CorporateButton = ({
    children,
    variant = "solid",
    className,
    icon,
    onClick,
    ...props
}) => {

    // Strict Typography & Layout
    const baseClasses = "group relative inline-flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out px-8 py-4 rounded-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
    const typography = "text-xs font-bold tracking-[0.15em] uppercase";

    // Variants Configuration
    const variants = {
        solid: "bg-[#C61F25] text-white hover:bg-[#1A1A1A] hover:text-white border border-transparent",
        outline: "bg-transparent border border-white/30 text-white hover:bg-white hover:text-[#C61F25] backdrop-blur-sm",
        light: "bg-transparent border border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#C61F25] hover:text-white hover:border-[#C61F25]",
    };

    return (
        <button
            className={twMerge(clsx(baseClasses, typography, variants[variant], className))}
            onClick={onClick}
            {...props}
        >
            {/* Content Wrapper */}
            <span className="relative z-10 flex items-center gap-3">
                {children}
                {/* Contextual Icon */}
                {icon && (
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {icon}
                    </span>
                )}
            </span>
        </button>
    );
};

export default CorporateButton;
