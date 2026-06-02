'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

// --- LISTADO DE PACIENTES (24 FOTOS PROCESADAS) ---
const PETS = [
    { name: "Simba Parra", img: "/images/paciente1.jpg" },
    { name: "Félix Ledezma", img: "/images/paciente2.jpg" },
    { name: "Minerva Torti", img: "/images/paciente3.jpg" },
    { name: "Roco Prieto", img: "/images/paciente4.jpg" },
    { name: "Luna Modini", img: "/images/paciente5.jpg" },
    { name: "Mora Ramírez", img: "/images/paciente6.jpg" },
    { name: "Cleo Del Prete", img: "/images/paciente7.jpg" },
    { name: "Ángel Parra", img: "/images/paciente8.jpg" },
    { name: "Tyson Ledezma", img: "/images/paciente9.jpg" },
    { name: "Bruno Torti", img: "/images/paciente10.jpg" },
    { name: "Copito Prieto", img: "/images/paciente11.jpg" },
    { name: "Mishu Modini", img: "/images/paciente12.jpg" },
    { name: "Toby Ramírez", img: "/images/paciente13.jpg" },
    { name: "Pongo Del Prete", img: "/images/paciente14.jpg" },
    { name: "Otto Parra", img: "/images/paciente15.jpg" },
    { name: "Noche Ledezma", img: "/images/paciente16.jpg" },
    { name: "Gary Torti", img: "/images/paciente17.jpg" },
    { name: "Blanca Prieto", img: "/images/paciente18.jpg" },
    { name: "Rocky Modini", img: "/images/paciente19.jpg" },
    { name: "Milo Ramírez", img: "/images/paciente20.jpg" },
    { name: "Panda Del Prete", img: "/images/paciente21.jpg" },
    { name: "Love Parra", img: "/images/paciente22.jpg" },
    { name: "Thor Ledezma", img: "/images/paciente23.jpg" },
    { name: "Huesitos Torti", img: "/images/paciente24.jpg" }
];

export default function PetCarousel() {
    // Configuramos el carrusel para que se mueva suave y muestre varias fotos
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        containScroll: 'trimSnaps'
    });

    return (
        <section className="w-full py-16 bg-gray-50 border-t border-gray-200 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-10">
                <h3 className="text-3xl md:text-4xl font-black text-[#2B5289] uppercase tracking-tight">
                    Nuestros Pacientes
                </h3>
                <p className="text-gray-600 font-bold mt-2">
                    Ellos confían en nosotros. Historias de recuperación y salud.
                </p>
            </div>

            <div className="px-6 cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex gap-4 md:gap-6">
                    {PETS.map((pet, idx) => (
                        <div
                            key={idx}
                            className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_25%] min-w-0"
                        >
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-md group bg-gray-200">
                                <Image
                                    src={pet.img}
                                    alt={pet.name}
                                    fill
                                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 30vw, 25vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Degradado para que el nombre se lea bien siempre */}
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                    <p className="text-white text-xl font-bold tracking-wide mb-0">
                                        {pet.name.split(' ')[0]}
                                    </p>
                                    <p className="text-white/70 text-xs font-black uppercase tracking-widest">
                                        {pet.name.split(' ').slice(1).join(' ')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-[#2B5289] text-sm font-bold animate-pulse">
                    ← Deslizá para ver más amigos →
                </p>
            </div>
        </section>
    );
}