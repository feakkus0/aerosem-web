import React from 'react';
import { Plane, Shield, Droplets, FlaskConical, TestTube, ArrowRight } from 'lucide-react';

const Services = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-[#0F0F10] dark:text-text-dark sm:text-4xl">Core Services</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {/* Service 1 */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 dark:bg-card-dark dark:ring-white/10 lg:col-span-2">
                    <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#FFF5F5] blur-2xl transition-all group-hover:bg-[#FFE5E5]"></div>
                    <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-[#FFF5F5] blur-2xl transition-all group-hover:bg-[#FFE5E5]"></div>

                    <div className="relative z-10">
                        <div className="h-16 w-16 rounded-2xl bg-[#FFF5F5] border border-[#FFE5E5] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                            <Plane className="w-8 h-8 text-[#C61F25]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0F0F10] dark:text-white">Aircraft Cleaning Solutions</h3>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">High-performance formulas for pristine exterior and interior cleaning.</p>
                    </div>
                    <div className="relative z-10 mt-8 flex justify-end">
                        <ArrowRight className="w-6 h-6 text-[#C61F25] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>

                {/* Service 2 */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 dark:bg-card-dark dark:ring-white/10">
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#FFF5F5] blur-2xl transition-all group-hover:bg-[#FFE5E5]"></div>

                    <div className="relative z-10">
                        <div className="h-16 w-16 rounded-2xl bg-[#FFF5F5] border border-[#FFE5E5] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                            <Shield className="w-8 h-8 text-[#C61F25]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0F0F10] dark:text-white">Corrosion Inhibitors</h3>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Advanced protection against environmental degradation.</p>
                    </div>
                    <div className="relative z-10 mt-8 flex justify-end">
                        <ArrowRight className="w-6 h-6 text-[#C61F25] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>

                {/* Service 3 */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 dark:bg-card-dark dark:ring-white/10">
                    <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-[#FFF5F5] blur-2xl transition-all group-hover:bg-[#FFE5E5]"></div>

                    <div className="relative z-10">
                        <div className="h-16 w-16 rounded-2xl bg-[#FFF5F5] border border-[#FFE5E5] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                            <Droplets className="w-8 h-8 text-[#C61F25]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0F0F10] dark:text-white">Specialized Coatings</h3>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Durable, high-tech coatings for optimal performance.</p>
                    </div>
                    <div className="relative z-10 mt-8 flex justify-end">
                        <ArrowRight className="w-6 h-6 text-[#C61F25] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>

                {/* Service 4 */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 dark:bg-card-dark dark:ring-white/10 lg:col-span-2">
                    <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#FFF5F5] blur-2xl transition-all group-hover:bg-[#FFE5E5]"></div>

                    <div className="relative z-10">
                        <div className="h-16 w-16 rounded-2xl bg-[#FFF5F5] border border-[#FFE5E5] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                            <FlaskConical className="w-8 h-8 text-[#C61F25]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0F0F10] dark:text-white">Industrial Degreasers</h3>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Powerful solutions for heavy-duty industrial applications.</p>
                    </div>
                    <div className="relative z-10 mt-8 flex justify-end">
                        <ArrowRight className="w-6 h-6 text-[#C61F25] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>

                {/* Service 5 */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 dark:bg-card-dark dark:ring-white/10 lg:col-span-2">
                    <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-[#FFF5F5] blur-2xl transition-all group-hover:bg-[#FFE5E5]"></div>

                    <div className="relative z-10">
                        <div className="h-16 w-16 rounded-2xl bg-[#FFF5F5] border border-[#FFE5E5] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                            <TestTube className="w-8 h-8 text-[#C61F25]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0F0F10] dark:text-white">Custom Formulations</h3>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Tailor-made chemical solutions to meet your specific needs.</p>
                    </div>
                    <div className="relative z-10 mt-8 flex justify-end">
                        <ArrowRight className="w-6 h-6 text-[#C61F25] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
