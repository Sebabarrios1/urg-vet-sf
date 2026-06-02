import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import {
    BellRing, Clock, HeartPulse, Microscope,
    Scissors, Sun, Moon, Briefcase,
    Sunset, AlertCircle, Syringe,
    Phone, Menu, MessageCircle,
    Star, Stethoscope, Activity, Zap, MapPin, Mail
} from 'lucide-react';

// Lista de pacientes basada en los archivos que subiste
const PETS = [
    { name: "Ámbar Favini", img: "Ámbar Favini.jpeg" },
    { name: "Helvetica Rodríguez", img: "Helvetica Rodríguez.jpeg" },
    { name: "Saori Gallotto", img: "Saori Gallotto.jpeg" },
    { name: "Aurora Gallotto", img: "Aurora Gallotto.jpeg" },
    { name: "Pancho Fridman", img: "Pancho Fridman.jpeg" },
    { name: "Raul Leopold", img: "Raul Leopold.jpeg" },
    { name: "Coco Paye", img: "Coco Paye.jpeg" },
    { name: "Loli Delvo", img: "Loli Delvo.jpeg" },
    { name: "Dracco Sesma", img: "Dracco Sesma.jpeg" },
    { name: "Cleo Sambade", img: "Cleo Sambade.jpeg" },
    { name: "Kakashi Silvestrini", img: "Kakashi Silvestrini.jpg" },
    { name: "Carpuza Beutel", img: "Carpuza Beutel.jpeg" },
    { name: "Roma Beutel", img: "Roma Beutel.jpeg" },
    { name: "Cuasimodo", img: "Cuasimodo.jpeg" },
    { name: "Umma Martínez", img: "Umma Martínez.jpeg" },
    { name: "Martina Basualdo", img: "Martina Basualdo.jpeg" },
    { name: "Rumi Nicola", img: "Rumi Nicola.jpeg" },
    { name: "Nova Pintos", img: "Nova Pintos.jpeg" },
    { name: "Olivia Angelini", img: "Olivia Angelini.jpeg" },
    { name: "Jagger Villalobos", img: "Jagger Villalobos.jpeg" },
    { name: "Kitty Anacabe", img: "Kitty Anacabe.jpg" },
    { name: "Aquiles Ramírez", img: "Aquiles Ramírez.jpeg" },
    { name: "Minerva Rotela", img: "Minerva Rotela.jpeg" },
    { name: "Rocky Sastre", img: "Rocky Sastre.jpg" }
];

function PetCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

    return (
        <section className="w-full py-16 bg-gray-50 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 mb-10">
                <h3 className="text-3xl font-black text-[#2B5289]">Nuestros Pacientes</h3>
            </div>

            {/* Añadimos un contenedor con ancho relativo */}
            <div className="overflow-hidden w-full" ref={emblaRef}>
                <div className="flex gap-4 px-6">
                    {PETS.map((pet, idx) => (
                        // flex-[0_0_100%] en móvil, flex-[0_0_25%] (4 por fila) en escritorio
                        <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_25%] min-w-0">
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                                <img
                                    src={pet.img}
                                    alt={pet.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://via.placeholder.com/300';
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white font-black truncate">{pet.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function App() {
    return (
        <div className="font-sans min-h-screen bg-white">
            <nav className="bg-[#2B5289] w-full p-6 text-white text-center">
                <h1 className="text-2xl font-black">Urgencias Veterinarias Santa Fe</h1>
            </nav>

            <div className="p-10 text-center">
                <h2 className="text-4xl font-black text-[#2B5289] mb-4">Bienvenidos a nuestra web</h2>
                <p className="text-gray-600">Atención integral y personalizada para tus mascotas.</p>
            </div>

            <PetCarousel />

            <footer className="bg-[#1a3a5c] py-10 text-center text-white">
                <p>© 2026 Urgencias Veterinarias Santa Fe</p>
            </footer>
        </div>
    );
}