'use client';

import React from 'react';
import { FiEye, FiDownload } from 'react-icons/fi';
import Image from 'next/image';

export default function CertificateCard({ title, code, image, onView, onDownload }) {
    return (
        <div className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

            {/* Image Container with Overlay */}
            <div className="relative aspect-[3/4] w-full bg-gray-50 overflow-hidden cursor-pointer" onClick={onView}>
                {/* Placeholder Image Logic - In a real app, use the actual image prop */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex flex-col items-center">
                            <span className="text-4xl">📄</span>
                            <span className="text-xs mt-2 uppercase tracking-widest">Preview</span>
                        </div>
                    )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg text-sm font-medium flex items-center gap-2 hover:bg-[#CC0000] hover:text-white transition-colors duration-200">
                        <FiEye /> İncele
                    </button>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 relative">
                {/* Red Accent Line on Hover */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#CC0000] transition-all duration-300 group-hover:w-full"></div>

                <p className="text-xs font-bold text-[#CC0000] tracking-widest uppercase mb-2">{code}</p>
                <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-4 group-hover:text-[#CC0000] transition-colors duration-200">
                    {title}
                </h3>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <button
                        onClick={onView}
                        className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-2 transition-colors"
                    >
                        <FiEye size={16} /> Önizleme
                    </button>
                    <button
                        onClick={onDownload}
                        className="text-sm font-medium text-gray-500 hover:text-[#CC0000] flex items-center gap-2 transition-colors"
                    >
                        Indir <FiDownload size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
