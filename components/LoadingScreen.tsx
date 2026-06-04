'use client';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const alreadySeen = sessionStorage.getItem('loadingSeen');
        if (alreadySeen) return;

        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('loadingSeen', 'true');
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2B5289]">
            <div className="animate-pulse flex flex-col items-center">
                <h2 className="text-white text-2xl font-black tracking-widest uppercase text-center">
                    URGENCIAS<br />VETERINARIAS<br />SANTA FE
                </h2>
            </div>
        </div>
    );
}