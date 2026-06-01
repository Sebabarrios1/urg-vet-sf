'use client'; // Importante porque usamos hooks de cliente

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const PETS = [
    { name: "Caninos", img: "/images/perro.jpg" },
    { name: "Felinos", img: "/images/gato.jpg" },
];

export default function PetCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

    return (
        <section className="w-full py-16 bg-gray-50 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 mb-10">
                <h3 className="text-3xl font-black text-[#2B5289]">Nuestros Pacientes</h3>
            </div>

            <div className="overflow-hidden px-6" ref={emblaRef}>
                { }
                <div className="flex gap-6 max-w-4xl mx-auto">
                    {PETS.map((pet, idx) => (
                        <div key={idx} className="flex-1 min-w-0">
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src={pet.img}
                                    alt={pet.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <p className="text-white text-3xl font-black tracking-wide">{pet.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}