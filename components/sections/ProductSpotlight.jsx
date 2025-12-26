import React from 'react';
import { FlaskConical, Plane, ShieldCheck, FileText } from 'lucide-react';
import CorporateButton from '@/components/ui/CorporateButton';

const ProductSpotlight = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="text-center">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-text-light/60 dark:text-text-dark/60">Product Spotlight</h3>
                <h2 className="mt-2 text-3xl font-bold tracking-tighter text-text-light dark:text-text-dark sm:text-4xl">Bonderite M-CR 1200 AERO</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
                <div className="group relative flex h-full min-h-[400px] w-full items-center justify-center rounded-2xl bg-white p-8 dark:bg-card-dark ring-1 ring-black/5 dark:ring-white/10">
                    <img
                        alt="A sleek, matte-silver industrial chemical drum/barrel with the Aerosem logo, floating in a clean white space."
                        className="w-full max-w-md object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMlzF7Pnti9L-p2uNL4oJvNFpkrPjzfJ2HcFwV5S4J-86-ReLK0WqYf4HllcPe269rLWRVv8S_jdP0X-X6VV0Zv0xwOZZfJgRbGIcr_3vd3TDnhO6coy-q0N7g1Nb80RPDGC5kHMP0Tj8Z2WtX5mx4RDwULWbvpm_qPQ923e4gnLcJo3ugWIpKeytcnLkPXAvsam3mDw31JHpztMs9VH3-TJVgaXB1E72v56uzj8l_P0s8wCeaFv9KqWvRnmWGQ09H1UwvCVO-o9tg"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-base text-text-light/80 dark:text-text-dark/80">BONDERITE M-CR 1200 AERO is a powdered chemical used to produce a protective coating on aluminum which ranges in color from light iridescent gold to tan. The process is operated at room temperature. The coating produced minimizes corrosion and provides an improved bond for paint.</p>
                    <div className="mt-8 space-y-6">
                        <div className="flex items-start">
                            <FlaskConical className="mr-4 mt-1 h-6 w-6 text-primary" />
                            <div>
                                <h4 className="font-bold">Density</h4>
                                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Known as ALODINE 1200</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Plane className="mr-4 mt-1 h-6 w-6 text-primary" />
                            <div>
                                <h4 className="font-bold">Primary Usage</h4>
                                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Superior corrosion protection for aluminum surfaces</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <ShieldCheck className="mr-4 mt-1 h-6 w-6 text-primary" />
                            <div>
                                <h4 className="font-bold">Certifications</h4>
                                <p className="text-sm text-text-light/70 dark:text-text-dark/70">AMS 1526C, Boeing D6-17487</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <a href="/products/aviation/bonderite-m-cr-1200-aero">
                            <CorporateButton icon={<FileText size={14} />}>
                                View Technical Data Sheet
                            </CorporateButton>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSpotlight;
