'use client';

import { Canvas } from '@react-three/fiber';
import Particles from './Particles';
import { Suspense } from 'react';

export default function ContactScene() {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-[#F9FAFB]">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }} // alpha: true for transparency
            >
                {/* Removed <color attach="background" ... /> so it's transparent or lets parent bg show */}
                <Suspense fallback={null}>
                    <Particles />
                </Suspense>
            </Canvas>
        </div>
    );
}
