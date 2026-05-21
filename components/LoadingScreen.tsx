'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulamos un pequeño tiempo de carga para que el efecto se vea fluido
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2B5289]">
            <div className="animate-pulse flex flex-col items-center">
                {/* Aquí puedes usar tu logo */}
                <h2 className="text-white text-2xl font-black tracking-widest uppercase">
                    URGENCIAS<br />VETERINARIAS<br />SANTA FE
                </h2>
            </div>
        </div>
    );
}