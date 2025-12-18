"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Droplets, Wind, Shield, Zap, Activity, Box } from "lucide-react";

// Mock Data
const productsData = {
    aviation: [
        {
            id: "ac-x500",
            code: "AeroCleanse X-500",
            name: "Exterior Cleaner",
            description: "High-performance exterior cleaner for aircraft fuselage and wings.",
            specs: { ph: "7.5", density: "1.02" }
        },
        {
            id: "tk-g2",
            code: "TurbineKleen G2",
            name: "Engine Wash",
            description: "Advanced formula for gas path cleaning and restoration.",
            specs: { ph: "8.0", density: "1.05" }
        },
        {
            id: "av-s1",
            code: "AviaSolv 100",
            name: "Precision Solvent",
            description: "Residue-free solvent for critical avionics components.",
            specs: { ph: "N/A", density: "0.85" }
        }
    ],
    general: [
        {
            id: "is-90",
            code: "IndusSolv 90",
            name: "Heavy Degreaser",
            description: "Industrial strength degreaser for heavy machinery and floors.",
            specs: { ph: "12.0", density: "1.10" }
        },
        {
            id: "cs-pro",
            code: "ChemShield Pro",
            name: "Surface Protectant",
            description: "Long-lasting protective coating against corrosion and wear.",
            specs: { ph: "7.0", density: "0.95" }
        },
        {
            id: "gen-x",
            code: "GenClean X",
            name: "Multi-Purpose Cleaner",
            description: "Versatile cleaner for various industrial surfaces.",
            specs: { ph: "9.5", density: "1.01" }
        }
    ]
};

const themeConfig = {
    aviation: {
        bg: "bg-slate-50",
        accent: "text-blue-900",
        borderHover: "hover:border-blue-900",
        heroImage: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Silver Wing
        title: "AVIATION SOLUTIONS",
        subtitle: "Advanced chemical solutions for the aerospace industry."
    },
    general: {
        bg: "bg-white",
        accent: "text-[#C61F25]",
        borderHover: "hover:border-[#C61F25]",
        heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop", // Red Liquid/Lab
        title: "GENERAL CHEMISTRY",
        subtitle: "High-quality chemical products for industrial applications."
    }
};

export default function CategoryPage() {
    const params = useParams();
    // Defensive check
    const category = params?.category;

    if (!category) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    // Default to general if category not found or loading
    const currentTheme = themeConfig[category] || themeConfig.general;
    const currentProducts = productsData[category] || productsData.general;
    const isAviation = category === 'aviation';

    return (
        <div className={`min-h-screen ${currentTheme.bg} font-display`}>

            {/* Hero Section */}
            <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={currentTheme.heroImage}
                        alt={currentTheme.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className={`absolute inset-0 ${isAviation ? 'bg-blue-900/30' : 'bg-red-900/30'} mix-blend-multiply`}></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 text-center px-4">
                    <Reveal width="100%">
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider mb-4 drop-shadow-lg">
                            {currentTheme.title}
                        </h1>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto">
                            {currentTheme.subtitle}
                        </p>
                    </Reveal>
                </div>
            </div>

            {/* Products Section */}
            <section className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProducts.map((product, index) => (
                        <Reveal key={product.id} width="100%" delay={index * 0.1}>
                            <Link href={`/products/${category}/${product.id}`} className="block h-full cursor-pointer">
                                <div className={`group relative bg-white rounded-lg overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-b-4 ${isAviation ? 'hover:border-b-blue-900' : 'hover:border-b-[#C61F25]'} h-full`}>

                                    {/* Image Area - Updated with Placeholder Image */}
                                    <div className="relative h-64 bg-gray-50 flex items-center justify-center p-8 overflow-hidden">
                                        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                                            <Image
                                                src={isAviation ? "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop" : "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2064&auto=format&fit=crop"}
                                                alt={product.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="mb-4">
                                            <span className={`text-sm font-bold tracking-wider ${currentTheme.accent}`}>
                                                {product.code}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 mt-1">
                                                {product.name}
                                            </h3>
                                        </div>

                                        <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                            {product.description}
                                        </p>

                                        {/* Specs */}
                                        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-2" title="pH Level">
                                                <Droplets className="w-4 h-4 text-gray-400" />
                                                <span className="text-xs font-medium text-gray-600">pH {product.specs.ph}</span>
                                            </div>
                                            <div className="flex items-center gap-2" title="Density">
                                                <Activity className="w-4 h-4 text-gray-400" />
                                                <span className="text-xs font-medium text-gray-600">{product.specs.density} g/cm³</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>
        </div>
    );
}
