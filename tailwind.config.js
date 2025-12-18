/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class", // Added based on HTML snippet showing dark mode support
    theme: {
        extend: {
            colors: {
                "primary": "#C61F25",
                "background-light": "#FFFFFF",
                "background-dark": "#0A0A0A",
                "text-light": "#1A1A1A",
                "text-dark": "#E5E5E5",
                "card-light": "#FFFFFF",
                "card-dark": "#141414",
                "border-light": "#E5E5E5",
                "border-dark": "#2A2A2A",
                // Keeping original brand colors as aliases or for reference if needed, 
                // but user asked for EXACT settings, so primarily using the above.
                // Adding back the specific ones just in case they were used elsewhere or preferred.
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
            }
        },
    },
    plugins: [],
};
