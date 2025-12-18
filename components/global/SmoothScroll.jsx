"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }) {
    const lenisOptions = {
        lerp: 0.08,
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
    };

    return (
        <ReactLenis root options={lenisOptions}>
            {children}
        </ReactLenis>
    );
}
