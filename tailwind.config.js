/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#C61F25",
                // New warm palette
                "ivory": "#FAFAF7",
                "sand": "#F0EFEA",
                "espresso": "#2A2826",
                "warm-gray": "#6B6B6B",
                // Legacy light/dark
                "background-light": "#FAFAF7",
                "background-dark": "#0A0A0A",
                "text-light": "#1A1A1A",
                "text-dark": "#E5E5E5",
                "card-light": "#FFFFFF",
                "card-dark": "#141414",
                "border-light": "#E5E5E5",
                "border-dark": "#2A2A2A",
                // Brand
                'aerosem-red': '#C61F25',
                'space-black': '#0F0F10',
                'carbon-grey': '#1A1A1A',
                'lab-white': '#FFFFFF',
                'metallic-silver': '#E5E7EB',
            },
            fontFamily: {
                "display": ["var(--font-space-grotesk)", "sans-serif"]
            },
            animation: {
                'embroidery-spin': 'spin 10s linear infinite',
                'marquee-logos': 'marquee-logos 60s linear infinite',
                'highlight-line-pulse': 'highlight-line-pulse 4s ease-in-out infinite',
                'infinite-scroll': 'scroll 40s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
};
