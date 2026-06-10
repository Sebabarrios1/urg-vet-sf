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
    { name: "Ámbar Favini", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118860/%C3%81mbar_Favini_os3nwx.jpg" },
    { name: "Helvetica Rodríguez", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118860/Helvetica_Rodr%C3%ADguez_nair8b.jpg" },
    { name: "Saori Gallotto", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118860/Saori_Gallotto_st8goj.jpg" },
    { name: "Aurora Gallotto", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118861/Aurora_Gallotto_jklkyf.jpg" },
    { name: "Pancho Fridman", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118861/Pancho_Fridman_z8xdnf.jpg" },
    { name: "Raul Leopold", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118861/Raul_Leopold_mjmlu4.jpg" },
    { name: "Coco Paye", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118861/Coco_Paye_oubmmu.jpg" },
    { name: "Loli Delvo", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118861/Loli_Delvo_eswrl8.jpg" },
    { name: "Dracco Sesma", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118861/Dracco_Sesma_zcy4z4.jpg" },
    { name: "Cleo Sambade", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118861/Cleo_Sambade_y8vkts.jpg" },
    { name: "Kakashi Silvestrini", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118860/Kakashi_Silvestrini_htht0q.jpg" },
    { name: "Carpuza Beutel", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118860/Carpuza_Beutel_riy982.jpg" },
    { name: "Roma Beutel", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118860/Roma_Beutel_wbpzed.jpg" },
    { name: "Cuasimodo", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118858/Cuasimodo_bzg4pd.jpg" },
    { name: "Umma Martínez", img: "Umma Martínez.jpeg" },
    { name: "Martina Basualdo", img: "Martina Basualdo.jpeg" },
    { name: "Rumi Nicola", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118859/Rumi_Nicola_ntkpoi.jpg" },
    { name: "Nova Pintos", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118859/Nova_Pintos_mccrbb.jpg" },
    { name: "Olivia Angelini", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118860/Olivia_Angelini_uad4tw.jpg" },
    { name: "Jagger Villalobos", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118860/Jagger_Villalobos_qpdh3k.jpg" },
    { name: "Kitty Anacabe", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118859/Kitty_Anacabe_jfdkrq.jpg" },
    { name: "Aquiles Ramírez", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118859/Aquiles_Ram%C3%ADrez_shxq4h.jpg" },
    { name: "Minerva Rotela", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118859/Minerva_Rotela_zhyflo.jpg" },
    { name: "Rocky Sastre", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118859/Rocky_Sastre_zmxqmr.jpg" }
    { name: "Maby y Moly Carabajal", img: "/images/Tito Cosentino.jpeg" },
    { name: "Tito Cosentino", img: "/images/Maby y Moly Carabajal.jpeg" }
];

function PetCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

    return (
        <section className="w-full py-16 bg-gray-50 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 mb-10">
                <h3 className="text-3xl font-black text-[#2B5289]">Nuestros Pacientes</h3>
            </div>

            <div className="overflow-hidden w-full" ref={emblaRef}>
                <div className="flex touch-pan-y">
                    {PETS.map((pet, idx) => (
                        <div key={idx} className="px-3" style={{ flex: '0 0 300px', minWidth: 0 }}> {/* <--- ASÍ DEBE QUEDAR */}
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group bg-gray-200">
                                <img
                                    src={pet.img}
                                    alt={pet.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://via.placeholder.com/300?text=Sin+Imagen';
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white font-black truncate text-xl">{pet.name}</p>
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