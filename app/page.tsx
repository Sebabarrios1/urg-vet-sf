'use client';
import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  BellRing, Clock, HeartPulse, Microscope,
  Scissors, Monitor, Sun, Moon, Briefcase,
  Sunset, AlertCircle, Syringe,
  Phone, Mail, MapPin, Menu, MessageCircle,
  Star, Stethoscope, Activity, Zap
} from 'lucide-react';
import LoadingScreen from '@/components/LoadingScreen';

const Instagram = ({ size = 24, color = "currentColor", className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number; color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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
    { name: "Uma Martínez", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118857/Umma_Mart%C3%ADnez_iftdkk.jpg" },
    { name: "Martina Basualdo", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118858/Martina_Basualdo_uutl1w.jpg" },
    { name: "Rumi Nicola", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118859/Rumi_Nicola_ntkpoi.jpg" },
    { name: "Nova Pintos", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118859/Nova_Pintos_mccrbb.jpg" },
    { name: "Olivia Angelini", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118860/Olivia_Angelini_uad4tw.jpg" },
    { name: "Jagger Villalobos", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118860/Jagger_Villalobos_qpdh3k.jpg" },
    { name: "Kitty Anacabe", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118859/Kitty_Anacabe_jfdkrq.jpg" },
    { name: "Aquiles Ramírez", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118859/Aquiles_Ram%C3%ADrez_shxq4h.jpg" },
    { name: "Minerva Rotela", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118859/Minerva_Rotela_zhyflo.jpg" },
    { name: "Rocky Sastre", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118859/Rocky_Sastre_zmxqmr.jpg" },
    { name: "Maby y Moly Carabajal", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118858/Tito_Cosentino_woroap.jpg" },
    { name: "Tito Cosentino", img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118858/Maby_y_Moly_Carabajal_tc9hvi.jpg" }
];

const SERVICES = [
  { title: "URGENCIAS 24 HORAS", desc: "Atención inmediata todos los días del año, incluidos feriados.", icon: <BellRing size={24} />, urgent: true },
  { title: "UCI · INTERNACIÓN", desc: "Unidad de cuidados intensivos con monitoreo constante y atención veterinaria permanente.", icon: <HeartPulse size={24} />, urgent: true },
  { title: "CIRUGÍAS", desc: "Quirófano equipado y coordinación con especialistas para cirugías programadas y urgencias.", icon: <Scissors size={24} />, urgent: false },
  { title: "LABORATORIO CLÍNICO", desc: "Análisis y diagnóstico rápido con equipamiento propio.", icon: <Microscope size={24} />, urgent: false },
  { title: "CLÍNICA GENERAL", desc: "Controles, vacunación, desparasitación y seguimiento clínico.", icon: <Syringe size={24} />, urgent: false },
];

const SPECIALTIES = [
  {
    title: "ECOGRAFÍA",
    specialist: "Tamara Silvetti",
    desc: "Diagnóstico por imágenes mediante ecografías.",
    icon: <Monitor size={18} />,
    img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118858/Tamara_silvetti_iusjm6.jpg",
  },
  {
    title: "DERMATOLOGÍA",
    specialist: "Valeria Gálvez",
    desc: "Diagnóstico y tratamiento de la piel.",
    icon: <Stethoscope size={18} />,
    img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118857/Valeria_G%C3%A1lvez_rgmioc.jpg",
  },
  {
    title: "CARDIOLOGÍA",
    specialist: "Nicolás Picciochi",
    desc: "Evaluación cardiológica y estudios especializados.",
    icon: <Activity size={18} />,
    img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781120981/1000467223_qpng26.jpg",
  },
];

const TEAM = [
  { name: "Yanina Parra", role: "Jefa de área Clínica", shift: "Turno mañana", type: "clinic", icon: <Sun size={14} />, img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118863/yanina_parra__e78xxl.jpg", facePos: "center 15%" },
  { name: "Antonella Ledezma", role: "Veterinaria Clínica", shift: "Turno mañana", type: "clinic", icon: <Sun size={14} />, img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118862/antonella_ledezma__ma7fle.jpg", facePos: "center 10%" },
  { name: "Juan Del Prete", role: "Veterinario Clínico", shift: "Turno mañana/tarde", type: "clinic", icon: <Briefcase size={14} />, img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118862/juan_del_prete__j7rbnd.jpg", facePos: "center 5%" },
  { name: "Luis Prieto", role: "Veterinario Clínico", shift: "Turno tarde", type: "clinic", icon: <Sunset size={14} />, img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118863/Luis_Prieto_aco2ma.jpg", facePos: "center top" },
  { name: "Federico Modini", role: "Jefe de laboratorio", shift: "Turno tarde", type: "emergent", icon: <Sunset size={14} />, img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118863/Federico_Modini_dmrhgg.jpg", facePos: "center 10%" },
  { name: "Eliana Ramírez", role: "Jefa de internación y coordinadora general", shift: "Guardia nocturna", type: "emergent", icon: <Moon size={14} />, img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118862/eliana_ramirez_l3g8fu.jpg", facePos: "center 12%" },
  { name: "Juan Torti", role: "Veterinario internista y emergentólogo", shift: "Guardia nocturna", type: "emergent", icon: <Moon size={14} />, img: "https://res.cloudinary.com/duu7tqecw/image/upload/v1781118863/Juan_Torti_tipaad.jpg", facePos: "center 20%" },
];

const FAQS = [
  { q: "¿Atienden sin turno?", a: "Para urgencias NO es necesario turno, podés venir directamente las 24 hs. Para clínica general recomendamos coordinar por WhatsApp." },
  { q: "¿Puedo acercarme directamente?", a: "Sí, nuestro equipo de guardia está siempre disponible para recibir pacientes críticos sin previo aviso." },
  { q: "¿Trabajan feriados?", a: "Sí, trabajamos los 365 días del año, incluyendo feriados nacionales y fiestas, manteniendo atención veterinaria permanente." },
  { q: "¿Tienen internación?", a: "Contamos con una Unidad de Cuidados Intensivos (UCI) totalmente equipada para el monitoreo de pacientes que requieren hospitalización." },
  { q: "¿Atienden perros y gatos?", a: "Sí, nos especializamos exclusivamente en medicina canina y felina para brindar la mejor atención enfocada." },
  { q: "¿Realizan análisis?", a: "Contamos con laboratorio clínico propio para obtener resultados de diagnósticos rápidos en situaciones de urgencia." },
];

const URGENCY_SIGNS = [
  "Dificultad para respirar (esfuerzo, coloración azulada).",
  "Ingesta de objetos o sustancias tóxicas (chocolate, venenos, objetos, plantas, limpieza).",
  "Vómitos o diarrea persistentes (+24/48 hs, sangre, decaimiento).",
  "Convulsiones o desmayos.",
  "Traumatismos o accidentes.",
  "Dificultad para caminar o dolor intenso.",
  "Sangrados.",
  "Falta de apetito y decaimiento.",
];

function PetCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <section className="w-full py-16 bg-gray-50 border-t border-gray-200" aria-label="Galería de pacientes">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h3 className="text-3xl font-black text-[#2B5289]">Nuestros Pacientes</h3>
      </div>
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {PETS.map((pet, idx) => (
            <div key={idx} className="px-3" style={{ flex: '0 0 300px', minWidth: 0 }}>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                <img
                  src={pet.img}
                  alt={`${pet.name} - paciente de Urgencias Veterinarias Santa Fe`}
                  className="w-full h-full object-cover"
                  loading="lazy"
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  const WHATSAPP_NUMBER = "5493425502341";
  const PHONE_NUMBER = "3425502341";
  const INSTAGRAM_URL = "https://www.instagram.com/urgencias.veterinarias.sf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const WHATSAPP_MESSAGE = "¡Hola! Vengo desde la página web y me gustaría hacer una consulta.";
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white relative" style={{ fontFamily: "var(--font-league-spartan), 'League Spartan', sans-serif" }}>
      <LoadingScreen />

      {/* Botones Flotantes */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${showFloating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-hidden={!showFloating}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Contactar por WhatsApp"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-900/20 hover:scale-110 transition-transform"
        >
          <MessageCircle size={28} />
        </a>
        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Llamar a Urgencias Veterinarias Santa Fe"
          className="w-14 h-14 bg-[#DB1E26] text-white rounded-full flex items-center justify-center shadow-lg shadow-red-900/20 hover:scale-110 transition-transform"
        >
          <Phone size={28} />
        </a>
      </div>

      <nav className="bg-[#2B5289] w-full border-b border-white/10 sticky top-0 z-40" aria-label="Navegación principal">
        <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-white no-underline" aria-label="Urgencias Veterinarias Santa Fe - Inicio">
            <div className="bg-white rounded-xl p-1 shrink-0 flex items-center justify-center w-[48px] h-[48px] overflow-hidden">
              <img
                src="/images/logo.jpg"
                alt="Logo Urgencias Veterinarias Santa Fe"
                className="w-full h-full object-cover scale-110"
                width={48}
                height={48}
              />
            </div>
            <div className="font-bold text-[14px] tracking-wide leading-tight uppercase">
              Urgencias<br />Veterinarias<br />Santa Fe
            </div>
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#servicios" className="text-white/85 hover:text-white font-semibold transition-colors">Servicios</a>
            <a href="#equipo" className="text-white/85 hover:text-white font-semibold transition-colors">Equipo</a>
            <a href="#faq" className="text-white/85 hover:text-white font-semibold transition-colors">Preguntas</a>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#2B5289] p-6 flex flex-col gap-6" role="dialog" aria-modal="true" aria-label="Menú de navegación">
          <button className="self-end text-white" onClick={() => setIsMenuOpen(false)} aria-label="Cerrar menú"><Menu size={28} /></button>
          <a href="#servicios" className="text-white font-bold text-2xl" onClick={() => setIsMenuOpen(false)}>Servicios</a>
          <a href="#equipo" className="text-white font-bold text-2xl" onClick={() => setIsMenuOpen(false)}>Equipo</a>
          <a href="#faq" className="text-white font-bold text-2xl" onClick={() => setIsMenuOpen(false)}>Preguntas</a>
        </div>
      )}

      {/* Hero */}
      <section
        className="w-full bg-[#2B5289] relative overflow-hidden"
        aria-label="Urgencias veterinarias 24 horas en Santa Fe"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(43, 82, 137, 0.95) 0%, rgba(43, 82, 137, 0.85) 45%, rgba(43, 82, 137, 0.3) 100%), url('https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row relative z-10 items-center">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.05] mb-6">
              Urgencias Veterinarias Santa Fe.
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-lg">
              Atención inmediata para perros y gatos. Urgencias, internación y clínica general las 24 hs, los 365 días del año.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="bg-[#DB1E26] hover:bg-[#c51921] text-white text-lg font-extrabold py-4 px-8 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-red-900/40 transition-transform hover:-translate-y-1"
                aria-label="Llamar a urgencias veterinarias ahora"
              >
                <Phone size={24} /> Llamar ahora
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-slate-50 text-[#2B5289] text-lg font-extrabold py-4 px-8 rounded-xl flex items-center justify-center gap-3 shadow-md transition-transform hover:-translate-y-1"
                aria-label="Contactar por WhatsApp para turnos e informes"
              >
                <MessageCircle size={24} className="text-[#25D366]" /> Turnos e informes
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-md ml-10" aria-hidden="true">
            <Clock size={50} className="text-[#DB1E26] mb-2" />
            <div className="text-white text-sm font-bold tracking-widest uppercase mt-2">Atención</div>
            <div className="text-white text-5xl font-black mt-1">24 HORAS</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="w-full bg-[#1a3a5c] border-b border-white/10" aria-label="Estadísticas de la clínica">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          <div className="p-6 text-center border-r border-white/10 border-b md:border-b-0">
            <div className="text-white text-3xl font-black">+10.000</div>
            <div className="text-white/60 text-[11px] font-bold uppercase tracking-widest mt-1">Pacientes atendidos</div>
          </div>
          <div className="p-6 text-center border-r-0 md:border-r border-white/10 border-b md:border-b-0">
            <div className="text-white text-3xl font-black">24 HS</div>
            <div className="text-white/60 text-[11px] font-bold uppercase tracking-widest mt-1">Atención diaria</div>
          </div>
          <div className="p-6 text-center border-r border-white/10">
            <div className="text-white text-3xl font-black">+10 AÑOS</div>
            <div className="text-white/60 text-[11px] font-bold uppercase tracking-widest mt-1">En Santa Fe</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-white text-3xl font-black flex items-center justify-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={24} aria-hidden="true" /> 4.3
            </div>
            <div className="text-white/60 text-[11px] font-bold uppercase tracking-widest mt-1">Calificación Google</div>
          </div>
        </div>
      </div>

      {/* Servicios */}
      <section id="servicios" className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#2B5289] mb-12 uppercase tracking-tight">Nuestras Áreas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, idx) => (
              <article key={idx} className={`rounded-2xl p-8 transition-all hover:shadow-xl ${s.urgent ? 'bg-[#DB1E26] text-white' : 'bg-[#2B5289] text-white'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="opacity-80 shrink-0" aria-hidden="true">{s.icon}</div>
                  <h3 className="text-2xl font-black leading-tight m-0">{s.title}</h3>
                </div>
                <p className="text-sm opacity-90 leading-relaxed font-medium">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="w-full bg-gray-50 py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-[#2B5289] mb-4">Conocé a nuestro equipo</h2>
          <p className="text-gray-600 font-bold text-lg mb-12">Profesionales comprometidos con la atención clínica y de urgencias las 24 horas.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, idx) => (
              <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm flex border border-gray-200">
                <div className="w-32 bg-gray-200 shrink-0 relative">
                  {member.img && (
                    <img
                      src={member.img}
                      alt={`${member.name} - ${member.role} en Urgencias Veterinarias Santa Fe`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: member.facePos }}
                      loading="lazy"
                      width={128}
                      height={160}
                    />
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <span className={`inline-block self-start text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider mb-2 ${member.type === 'clinic' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'}`}>
                    {member.type === 'clinic' ? 'CLÍNICA GENERAL' : 'INTERNACIÓN / EMERG.'}
                  </span>
                  <h3 className="font-black text-gray-800 text-lg">{member.name}</h3>
                  <p className="text-xs font-bold text-gray-500 mt-1">{member.role}</p>
                  <div className="flex items-center gap-1 mt-3 text-xs font-bold text-[#2B5289]">
                    <span aria-hidden="true">{member.icon}</span> {member.shift}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="w-full py-16 bg-white border-y border-gray-200" aria-labelledby="especialidades-titulo">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 id="especialidades-titulo" className="text-2xl font-black text-[#2B5289]">Especialidades Médicas</h2>
            <p className="text-gray-600 font-semibold text-lg mt-2">Atención con profesionales externos especializados.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALTIES.map((spec, i) => (
              <article key={i} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm flex border border-gray-200 hover:border-[#2B5289]/30 transition-colors">
                <div className="w-24 bg-gray-200 shrink-0 relative">
                  <img
                    src={spec.img}
                    alt={`${spec.specialist} - especialista en ${spec.title.toLowerCase()} veterinaria en Santa Fe`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={96}
                    height={120}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/150?text=Vet';
                    }}
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#DB1E26] shrink-0" aria-hidden="true">{spec.icon}</span>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Externo</span>
                  </div>
                  <h3 className="font-black text-gray-800 text-base leading-tight">{spec.specialist}</h3>
                  <p className="text-xs font-bold text-[#2B5289] mt-0.5 uppercase tracking-tighter">{spec.title}</p>
                  <p className="text-[11px] text-gray-500 font-medium leading-tight mt-2 italic">{spec.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Urgencias */}
      <section className="w-full py-16 bg-white" aria-labelledby="urgencia-titulo">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#fff0f1] rounded-3xl p-8 md:p-12 border-2 border-[#DB1E26]/20 shadow-sm">
            <h2 id="urgencia-titulo" className="text-3xl md:text-4xl font-black text-[#DB1E26] mb-6 flex items-center gap-3">
              <AlertCircle size={32} aria-hidden="true" /> ¿Qué es una urgencia?
            </h2>
            <p className="text-gray-800 font-bold text-lg mb-8">Si tu mascota presenta alguno de estos signos, acudí inmediatamente:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 list-none p-0 m-0">
              {URGENCY_SIGNS.map((sign, i) => (
                <li key={i} className="flex items-start gap-3 text-base font-semibold text-gray-700">
                  <Zap size={20} className="text-[#DB1E26] shrink-0 mt-1" aria-hidden="true" /> {sign}
                </li>
              ))}
            </ul>
            <div className="mt-10 p-4 bg-white rounded-xl border border-[#DB1E26]/10 inline-block">
              <p className="text-base font-bold text-[#2B5289] italic m-0">
                "Ante cualquier duda, recomendamos comunicarse con la clínica para poder orientarte."
              </p>
            </div>
          </div>
        </div>
      </section>

      <PetCarousel />

      {/* FAQ */}
      <section id="faq" className="w-full bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#2B5289] mb-10">Resolvemos tus dudas</h2>
          <dl>
            {FAQS.map((f, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 mb-6">
                <dt className="font-black text-gray-800 mb-2 text-lg flex gap-3">
                  <div className="w-2 h-2 bg-[#DB1E26] rounded-full mt-2.5 shrink-0" aria-hidden="true"></div>
                  {f.q}
                </dt>
                <dd className="text-gray-600 text-base font-medium pl-5 m-0">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full bg-white py-16 border-t border-gray-200" aria-labelledby="contacto-titulo">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="contacto-titulo" className="text-4xl font-black text-[#2B5289] mb-10">Contacto y ubicación</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <address className="space-y-8 flex flex-col justify-center not-italic">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-5 group no-underline">
                <div className="w-14 h-14 rounded-full bg-[#DB1E26] text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-200 transition-transform group-hover:scale-110" aria-hidden="true"><Phone size={24} /></div>
                <div>
                  <div className="text-[11px] font-black text-gray-400 tracking-widest uppercase mb-1">Urgencias 24 hs</div>
                  <div className="text-2xl font-black text-gray-800">{PHONE_NUMBER}</div>
                </div>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-5 group no-underline">
                <div className="w-14 h-14 rounded-full bg-white border border-gray-300 text-[#25D366] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110" aria-hidden="true"><MessageCircle size={28} /></div>
                <div>
                  <div className="text-[11px] font-black text-gray-400 tracking-widest uppercase mb-1">Turnos e informes</div>
                  <div className="text-2xl font-black text-gray-800">WhatsApp</div>
                </div>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-5 group no-underline">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110" aria-hidden="true"><Instagram size={28} /></div>
                <div>
                  <div className="text-[11px] font-black text-gray-400 tracking-widest uppercase mb-1">Seguinos</div>
                  <div className="text-2xl font-black text-gray-800">Instagram</div>
                </div>
              </a>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#2B5289] text-white flex items-center justify-center shrink-0" aria-hidden="true"><MapPin size={24} /></div>
                <div>
                  <div className="text-[11px] font-black text-gray-400 tracking-widest uppercase mb-1">Dirección</div>
                  <div className="text-xl font-black text-gray-800">Av. Gral. Paz 7623, Santa Fe</div>
                </div>
              </div>
            </address>
            <div className="h-[350px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.540571083117!2d-60.67532483042777!3d-31.60201269838605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b500ab520da02d%3A0x919d6046a8d038e5!2sAv.%20Gral.%20Paz%207623%2C%20S3000%20Santa%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1779395438059!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Urgencias Veterinarias Santa Fe en Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#1a3a5c] py-12 text-center text-white/60 px-6">
        <p className="text-white text-xl md:text-2xl font-bold mb-8 italic max-w-3xl mx-auto">
          "Comprometidos con una atención veterinaria cálida, profesional y disponible las 24 horas."
        </p>
        <div className="flex justify-center gap-6 mb-8 text-2xl">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram de Urgencias Veterinarias Santa Fe" className="hover:text-white transition-colors"><Instagram size={28} /></a>
          <a href="#" aria-label="Email de contacto" className="hover:text-white transition-colors"><Mail size={28} /></a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp de Urgencias Veterinarias Santa Fe" className="hover:text-white transition-colors"><MessageCircle size={28} /></a>
        </div>
        <div className="text-sm font-medium">© 2026 Urgencias Veterinarias Santa Fe · Todos los derechos reservados</div>
        <div className="mt-4 text-xs font-medium text-white/30">
          Diseño y desarrollo web por{' '}
          <a href="https://www.linkedin.com/in/roberto-sebastian-barrios" target="_blank" rel="noreferrer" className="hover:text-white/60 transition-colors">
            Sebastián Barrios
          </a>
        </div>
      </footer>
    </div>
  );
}