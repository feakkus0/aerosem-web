"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { FileText, ArrowRight, Shield, Zap, Package, ArrowLeft } from "lucide-react";

// --- GERÇEK VERİYİ ÇEKİYORUZ ---
// Scraper'ın oluşturduğu dosyayı okuyoruz.
import productsJson from "../../../../data/products.json";

const themeConfig = {
    aviation: {
        bgGradient: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-200 via-slate-100 to-slate-50",
        accent: "text-[#C61F25]",
        bgAccent: "bg-[#C61F25]",
        borderAccent: "border-[#C61F25]",
        button: "bg-[#C61F25] hover:bg-[#0F0F10]",
        iconColor: "text-[#C61F25]"
    },
    general: {
        bgGradient: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-50 via-white to-white",
        accent: "text-[#C61F25]",
        bgAccent: "bg-[#C61F25]",
        borderAccent: "border-[#C61F25]",
        button: "bg-[#C61F25] hover:bg-[#b01b20]",
        iconColor: "text-[#C61F25]"
    }
};

export default function ProductDetailPage() {
    const params = useParams();

    // --- 1. YÜKLENME KONTROLÜ (404 HATASINI ÇÖZEN KISIM) ---
    // Parametreler tam olarak gelmeden işlem yapma.
    if (!params || !params.productId || !params.category) {
        return <div className="min-h-screen bg-white" />;
    }

    const { category, productId } = params;

    // --- 2. ÜRÜNÜ BUL ---
    const product = productsJson.find((p) => p.id === productId);

    // Tema Ayarı
    const theme = themeConfig[category] || themeConfig.general;

    // --- 3. ÜRÜN GERÇEKTEN YOKSA 404 VER ---
    if (!product) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-white font-display flex flex-col md:flex-row">

            {/* --- SOL TARAF (GÖRSEL ALANI) --- */}
            <div className={`relative w-full h-[50vh] md:w-1/2 md:h-screen md:sticky md:top-0 flex items-center justify-center overflow-hidden ${theme.bgGradient}`}>

                {/* Mobil Geri Butonu */}
                <Link href={`/products/${category}`} className="absolute top-24 left-6 z-20 md:hidden bg-white/80 p-2 rounded-full backdrop-blur-sm">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </Link>

                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-64 h-64 md:w-96 md:h-96"
                >
                    {/* Ürün Görseli */}
                    <div className="w-full h-full relative flex items-center justify-center p-8 md:p-12">
                        <div className="relative w-full h-full drop-shadow-2xl">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Arka Plan Deseni */}
                <div className="absolute inset-0 bg-grid-black/[0.02] -z-10"></div>
            </div>

            {/* --- SAĞ TARAF (İÇERİK ALANI) --- */}
            <div className="w-full md:w-1/2 min-h-screen bg-white px-6 pb-12 pt-12 md:px-20 md:pb-20 md:pt-32 flex flex-col">

                {/* Masaüstü Geri Butonu */}
                <div className="hidden md:block mb-8">
                    <Reveal>
                        <Link
                            href={`/products/${category}`}
                            className="inline-flex items-center text-gray-400 hover:text-[#C61F25] transition-colors text-sm font-bold tracking-wide uppercase"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to {category}
                        </Link>
                    </Reveal>
                </div>

                {/* Alt Kategori Etiketi */}
                <Reveal width="100%">
                    <span className={`inline-block px-3 py-1 rounded bg-gray-100 text-xs font-bold tracking-[0.15em] uppercase text-gray-600 mb-6`}>
                        {product.subcategory}
                    </span>
                </Reveal>

                {/* Başlık */}
                <Reveal width="100%" delay={0.1}>
                    <h1 className="text-4xl md:text-6xl font-black text-[#0F0F10] mb-8 leading-tight">
                        {product.name}
                    </h1>
                </Reveal>

                {/* Açıklama */}
                <Reveal width="100%" delay={0.2}>
                    <div className="prose prose-lg text-gray-600 leading-relaxed mb-12 max-w-xl">
                        <p>
                            {/* Scraper'dan gelen uzun açıklama burada görünecek */}
                            {product.description || `High-performance ${product.name} designed for professional industrial applications.`}
                        </p>
                    </div>
                </Reveal>

                {/* Özellik Kutucukları */}
                <div className="mb-12 grid grid-cols-2 gap-4 max-w-xl">
                    <Reveal width="100%" delay={0.3}>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-2 hover:border-gray-200 transition-colors">
                            <Shield className={`w-6 h-6 ${theme.iconColor}`} />
                            <div>
                                <h4 className="font-bold text-[#0F0F10] text-sm">Industrial Grade</h4>
                                <p className="text-xs text-gray-500">Maximum durability</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.35}>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-2 hover:border-gray-200 transition-colors">
                            <Zap className={`w-6 h-6 ${theme.iconColor}`} />
                            <div>
                                <h4 className="font-bold text-[#0F0F10] text-sm">High Efficiency</h4>
                                <p className="text-xs text-gray-500">Fast acting formula</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.4}>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-2 hover:border-gray-200 transition-colors">
                            <Package className={`w-6 h-6 ${theme.iconColor}`} />
                            <div>
                                <h4 className="font-bold text-[#0F0F10] text-sm">Original Product</h4>
                                <p className="text-xs text-gray-500">Aerosem guarantee</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.45}>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-2 hover:border-gray-200 transition-colors">
                            <FileText className={`w-6 h-6 ${theme.iconColor}`} />
                            <div>
                                <h4 className="font-bold text-[#0F0F10] text-sm">TDS Available</h4>
                                <p className="text-xs text-gray-500">Request document</p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Alt Butonlar */}
                <Reveal width="100%" delay={0.5}>
                    <div className="flex flex-col gap-4 max-w-xl">
                        <Link href="/contact" className={`w-full group relative overflow-hidden rounded-xl ${theme.button} text-white p-5 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1`}>
                            <div className="relative z-10 flex items-center justify-between font-bold tracking-wider">
                                <span className="text-base">REQUEST QUOTE</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </Link>

                        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-2">
                            <FileText className="w-4 h-4" />
                            <span>Technical Data Sheet (TDS) available upon request.</span>
                        </div>
                    </div>
                </Reveal>

            </div>
        </div>
    );
}