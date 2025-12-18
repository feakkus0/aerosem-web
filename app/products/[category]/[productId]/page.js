"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { FileText, ArrowRight, Box } from "lucide-react";

// Mock Data Lookup
const getProduct = (category, productId) => {
    const products = {
        aviation: {
            "ac-x500": {
                code: "AERO-X500",
                name: "AeroCleanse X-500",
                description: "A high-performance, biodegradable exterior cleaner specifically formulated for aerospace applications. It effectively removes carbon exhaust, grease, and hydraulic fluid residues without damaging paint or composite materials.",
                specs: [
                    { label: "pH Level", value: "7.5", percent: 75 },
                    { label: "Biodegradability", value: "98%", percent: 98 },
                    { label: "Concentration", value: "High", percent: 90 },
                    { label: "Efficiency", value: "Excellent", percent: 95 }
                ]
            },
            "tk-g2": {
                code: "TURB-G2",
                name: "TurbineKleen G2",
                description: "Advanced gas path cleaner designed to restore engine performance and fuel efficiency. Removes fouling deposits from compressor blades and stators.",
                specs: [
                    { label: "pH Level", value: "8.0", percent: 80 },
                    { label: "Solubility", value: "100%", percent: 100 },
                    { label: "Flash Point", value: ">100°C", percent: 85 },
                    { label: "Efficiency", value: "High", percent: 92 }
                ]
            }
        },
        general: {
            "is-90": {
                code: "INDUS-90",
                name: "IndusSolv 90",
                description: "Heavy-duty industrial degreaser capable of cutting through the toughest sludge, oil, and grime. Ideal for machinery, floors, and parts cleaning.",
                specs: [
                    { label: "pH Level", value: "12.0", percent: 95 },
                    { label: "Solvency Power", value: "Extreme", percent: 98 },
                    { label: "Rinsability", value: "Good", percent: 80 },
                    { label: "Efficiency", value: "High", percent: 90 }
                ]
            },
            "cs-pro": {
                code: "CHEM-PRO",
                name: "ChemShield Pro",
                description: "A durable surface protectant that forms a barrier against corrosion, moisture, and chemical attack. Extends the lifespan of treated equipment.",
                specs: [
                    { label: "Durability", value: "Long-term", percent: 90 },
                    { label: "Adhesion", value: "Strong", percent: 95 },
                    { label: "Cure Time", value: "24h", percent: 60 },
                    { label: "Protection", value: "Max", percent: 98 }
                ]
            }
        }
    };
    return products[category]?.[productId] || null;
};

const themeConfig = {
    aviation: {
        bgGradient: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-200 via-slate-100 to-slate-50",
        accent: "text-blue-900",
        bgAccent: "bg-blue-900",
        borderAccent: "border-blue-900",
        button: "bg-blue-900 hover:bg-blue-800",
        progress: "bg-blue-900"
    },
    general: {
        bgGradient: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-50 via-white to-white",
        accent: "text-[#C61F25]",
        bgAccent: "bg-[#C61F25]",
        borderAccent: "border-[#C61F25]",
        button: "bg-[#C61F25] hover:bg-[#b01b20]",
        progress: "bg-[#C61F25]"
    }
};

export default function ProductDetailPage() {
    const params = useParams();
    const { category, productId } = params;

    const product = getProduct(category, productId);
    const theme = themeConfig[category] || themeConfig.general;
    const isAviation = category === 'aviation';

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
    }

    return (
        <div className="min-h-screen bg-white font-display flex flex-col md:flex-row">

            {/* Left Side - Sticky Visual */}
            <div className={`relative w-full h-64 md:w-1/2 md:h-screen md:sticky md:top-0 flex items-center justify-center overflow-hidden ${theme.bgGradient}`}>
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-64 h-64 md:w-96 md:h-96"
                >
                    {/* Placeholder for Product Container (Drum/Jerrycan) */}
                    {/* Using a Box icon as placeholder, but styled to look like a floating object */}
                    {/* Product Image */}
                    <div className="w-full h-full relative flex items-center justify-center p-12">
                        <div className="relative w-full h-full drop-shadow-2xl">
                            <Image
                                src={isAviation ? "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop" : "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2064&auto=format&fit=crop"}
                                alt={product.name}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Background Decor */}
                <div className="absolute inset-0 bg-grid-black/[0.02] -z-10"></div>
            </div>

            {/* Right Side - Scrollable Content */}
            <div className="w-full md:w-1/2 min-h-screen bg-white p-8 md:p-20 flex flex-col justify-center">
                <Reveal width="100%">
                    <span className={`text-sm font-bold tracking-[0.2em] uppercase ${theme.accent} mb-4 block`}>
                        {product.code}
                    </span>
                </Reveal>

                <Reveal width="100%" delay={0.1}>
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
                        {product.name}
                    </h1>
                </Reveal>

                <Reveal width="100%" delay={0.2}>
                    <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-xl">
                        {product.description}
                    </p>
                </Reveal>

                {/* Tech Specs */}
                <div className="mb-12 space-y-6 max-w-xl">
                    <Reveal width="100%" delay={0.3}>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Technical Specifications</h3>
                    </Reveal>

                    {product.specs.map((spec, index) => (
                        <Reveal key={spec.label} width="100%" delay={0.3 + (index * 0.1)}>
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{spec.label}</span>
                                    <span className="text-lg font-bold text-gray-900">{spec.value}</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${spec.percent}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                                        className={`h-full rounded-full ${theme.progress}`}
                                    ></motion.div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* CTA */}
                <Reveal width="100%" delay={0.6}>
                    <button className={`w-full max-w-xl group relative overflow-hidden rounded-xl ${theme.button} text-white p-6 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1`}>
                        <div className="relative z-10 flex items-center justify-between font-bold tracking-wider">
                            <span className="text-lg">REQUEST DATA SHEET</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </button>
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                        <FileText className="w-4 h-4" />
                        <span>PDF Format • 2.4 MB</span>
                    </div>
                </Reveal>

            </div>
        </div>
    );
}
