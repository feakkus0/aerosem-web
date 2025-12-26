"use client";

import React, { useState, useMemo } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Droplets, Activity, ArrowLeft } from "lucide-react";

// Gerçek veriyi çekiyoruz
import productsJson from "../../../data/products.json";

const themeConfig = {
    aviation: {
        bg: "bg-slate-50",
        accent: "text-[#C61F25]",
        borderHover: "hover:border-[#C61F25]",
        heroImage: "/aviationhero2.png",
        title: "AVIATION SOLUTIONS",
        subtitle: "Advanced chemical solutions for the aerospace industry."
    },
    general: {
        bg: "bg-white",
        accent: "text-[#C61F25]",
        borderHover: "hover:border-[#C61F25]",
        heroImage: "/genchemhero1.png",
        title: "GENERAL CHEMISTRY",
        subtitle: "High-quality chemical products for industrial applications."
    }
};

export default function CategoryPage() {
    const params = useParams();

    // --- DÜZELTME BAŞLANGICI ---
    // 1. Loading Guard: Parametreler tarayıcıya tam gelene kadar bekle.
    // Bu sayede sayfa geçişlerinde "Product not found" hatası "flash" yapmaz.
    if (!params || !params.category) {
        return <div className="min-h-screen bg-white" />;
    }

    const category = params.category;

    // 2. Kategori Doğrulama: Parametre geldikten sonra geçerli mi diye bak.
    if (!['aviation', 'general'].includes(category)) {
        return notFound();
    }
    // --- DÜZELTME BİTİŞİ ---

    const currentTheme = themeConfig[category];
    const isAviation = category === 'aviation';

    // Veriyi JSON'dan filtreleyerek alıyoruz
    const categoryProducts = productsJson.filter(p => p.category === category);

    // Alt Kategorileri buluyoruz
    const subcategories = useMemo(() => {
        const subs = new Set(categoryProducts.map((p) => p.subcategory));
        return Array.from(subs).sort();
    }, [categoryProducts]);

    // Sekme (Tab) State'i
    const [activeTab, setActiveTab] = useState('All');

    // Ekranda gösterilecek ürünler
    const displayProducts = activeTab === 'All'
        ? categoryProducts
        : categoryProducts.filter((p) => p.subcategory === activeTab);

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
                    <div className={`absolute inset-0 ${isAviation ? 'bg-[#0F0F10]/30' : 'bg-red-900/30'} mix-blend-multiply`}></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Geri Dön Butonu (Ana sayfaya rahat dönüş için eklendi) */}
                <Link href="/" className="absolute top-24 left-6 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all">
                    <ArrowLeft className="w-6 h-6" />
                </Link>

                <div className="relative z-10 text-center px-4 pt-48">
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

                {/* Sekme (TAB) Butonları */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {subcategories.length > 1 && (
                        <>
                            <button
                                onClick={() => setActiveTab('All')}
                                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${activeTab === 'All'
                                    ? 'bg-[#C61F25] border-[#C61F25] text-white shadow-lg'
                                    : 'bg-white border-gray-200 text-gray-500 hover:border-[#C61F25] hover:text-[#C61F25]'
                                    }`}
                            >
                                ALL
                            </button>
                            {subcategories.map((sub) => (
                                <button
                                    key={sub}
                                    onClick={() => setActiveTab(sub)}
                                    className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${activeTab === sub
                                        ? 'bg-[#C61F25] border-[#C61F25] text-white shadow-lg'
                                        : 'bg-white border-gray-200 text-gray-500 hover:border-[#C61F25] hover:text-[#C61F25]'
                                        }`}
                                >
                                    {sub.toUpperCase()}
                                </button>
                            ))}
                        </>
                    )}
                </div>

                {/* Ürün Listesi */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayProducts.map((product, index) => (
                        <Reveal key={product.id} width="100%" delay={index * 0.05}>
                            <Link href={`/products/${category}/${product.id}`} className="block h-full cursor-pointer">
                                <div className={`group relative bg-white rounded-lg overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-b-4 hover:border-b-[#C61F25] h-full`}>

                                    {/* Image Area */}
                                    <div className="relative h-64 bg-white flex items-center justify-center p-8 overflow-hidden border-b border-gray-50">
                                        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        {/* Marka Etiketi */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded uppercase">
                                                {product.subcategory}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="mb-4">
                                            <span className={`text-xs font-bold tracking-wider uppercase ${currentTheme.accent}`}>
                                                {category === 'aviation' ? 'Aviation Grade' : 'Industrial'}
                                            </span>
                                            <h3 className="text-xl font-bold text-[#0F0F10] mt-1 line-clamp-2 min-h-[3.5rem]">
                                                {product.name}
                                            </h3>
                                        </div>

                                        <p className="text-gray-500 text-sm mb-6 line-clamp-2 min-h-[2.5rem]">
                                            {product.description}
                                        </p>

                                        <div className="flex items-center gap-4 pt-4 border-t border-gray-100 opacity-60 grayscale group-hover:grayscale-0 transition-all">
                                            <div className="flex items-center gap-2" title="Contact for Specs">
                                                <Droplets className="w-4 h-4 text-gray-400" />
                                                <span className="text-xs font-medium text-gray-600">TDS Available</span>
                                            </div>
                                            <div className="flex items-center gap-2" title="Package">
                                                <Activity className="w-4 h-4 text-gray-400" />
                                                <span className="text-xs font-medium text-gray-600">High Perf.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                {/* Eğer ürün yoksa uyarısı */}
                {displayProducts.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No products found in this category.
                    </div>
                )}
            </section>
        </div>
    );
}