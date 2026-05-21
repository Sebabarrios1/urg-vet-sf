'use client'; // Importante porque usamos hooks de cliente

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const PETS = [
    { name: "Caninos", img: "/images/perro.jpg" }, // Asegúrate de tener estas imágenes
    { name: "Felinos", img: "/images/gato.jpg" },
    { name: "Exóticos", img: "/images/conejo.jpg" },
];

export default function PetCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

    return (
        <div className="w-full py-16 bg-[#F8F9FA]">
            <div className="max-w-6xl mx-auto px-6 mb-10">
                <h3 className="text-3xl font-black text-[#2B5289]">Nuestros Pacientes</h3>
            </div>

            <div className="overflow-hidden px-6" ref={emblaRef}>
                <div className="flex gap-6">
                    {PETS.map((pet, idx) => (
                        <div key={idx} className="flex-[0_0_70%] md:flex-[0_0_30%] min-w-0">
                            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src={pet.img}
                                    alt={pet.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent">
                                    <p className="text-white text-xl font-bold">{pet.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}