'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import PetCarousel from '@/components/PetCarousel';
import LoadingScreen from '@/components/LoadingScreen';


import {
  BellRing, Clock, HeartPulse, Microscope,
  Scissors, Monitor, Sun, Moon, Briefcase,
  Sunset, AlertCircle, Syringe, Calendar,
  Phone, Mail, MapPin, Menu, MessageCircle
} from 'lucide-react';

// --- DATOS DEL PROYECTO (Fáciles de editar) ---

const SERVICES = [
  {
    title: "Urgencias 24/7",
    desc: "Atención inmediata sin turno previo, todos los días del año, feriados incluidos.",
    icon: <BellRing size={24} />,
    urgent: true
  },
  {
    title: "UCI · Internación",
    desc: "Unidad de Cuidados Intensivos con monitoreo constante por emergentólogos.",
    icon: <HeartPulse size={24} />,
    urgent: true
  },
  {
    title: "Cirugías",
    desc: "Quirófano totalmente equipado y coordinación con cirujanos y anestesistas especializados para procedimientos programados, de alta complejidad y urgencias.",
    icon: <Scissors size={24} />
  },
  {
    title: "Laboratorio Clínico",
    desc: "Análisis de sangre y diagnóstico rápido con equipamiento interno.",
    icon: <Microscope size={24} />
  },
  {
    title: "Clínica General",
    desc: "Controles, vacunación, desparasitación y seguimiento de tratamientos.",
    icon: <Syringe size={24} />
  },
  {
    title: "Ecografía",
    desc: "Diagnóstico por imágenes preciso mediante ecografías realizadas por profesional especializada con atención programada.",
    icon: <Monitor size={24} />
  }
];

const TEAM = [
  {
    initials: "YP",
    name: "Yanina Parra",
    role: "Jefa del Área Clínica",
    shift: "Turno mañana (Fija)",
    type: "clinic",
    icon: <Sun size={14} />,
    color: "bg-[#2B5289]",
    img: "/images/yanina_parra_.jpeg",
    facePos: "center 15%"
  },
  {
    initials: "AL",
    name: "Antonella Ledezma",
    role: "Veterinaria Clínica",
    shift: "Turno mañana (Fija)",
    type: "clinic",
    icon: <Sun size={14} />,
    color: "bg-[#4A75B0]",
    img: "/images/antonella_ledezma_.jpeg",
    facePos: "center 10%"
  },
  {
    initials: "JP",
    name: "Juan Del Prete",
    role: "Veterinario Clínico",
    shift: "Clínica General",
    type: "clinic",
    icon: <Briefcase size={14} />,
    color: "bg-[#1a3a5c]",
    img: "/images/juan_del_prete_.jpeg",
    facePos: "center 8%"
  },
  {
    initials: "LP",
    name: "Luis Prieto",
    role: "Veterinario Clínico",
    shift: "Turno tarde (Fijo)",
    type: "clinic",
    icon: <Sunset size={14} />,
    color: "bg-[#3a6090]",
    img: null,
    facePos: "center top"
  },
  {
    initials: "FM",
    name: "Federico Modini",
    role: "Veterinario Internista",
    shift: "Turno tarde (Fijo)",
    type: "emergent",
    icon: <Sunset size={14} />,
    color: "bg-[#b8171f]",
    img: "/images/Federico_Modini.jpeg",
    facePos: "center 10%"
  },
  {
    initials: "ER",
    name: "Eliana Ramírez",
    role: "Jefa de Internación y Coord. General",
    shift: "Guardia nocturna",
    type: "emergent",
    icon: <Moon size={14} />,
    color: "bg-[#DB1E26]",
    img: "/images/eliana_ramirez.jpeg",
    facePos: "center 12%"
  },
  {
    initials: "JT",
    name: "Juan Torti",
    role: "Veterinario de Guardia",
    shift: "Guardia nocturna",
    type: "emergent",
    icon: <Moon size={14} />,
    color: "bg-[#8c1116]",
    img: "/images/Juan_Torti.jpeg",
    facePos: "center 8%"
  }
];

const FAQS = [
  {
    q: "¿Están abiertos de madrugada o feriados?",
    a: "Sí, somos un centro especializado en urgencias. Estamos abiertos las 24 horas del día, los 365 días del año sin excepción.",
    icon: <AlertCircle size={18} className="text-[#DB1E26] shrink-0 mt-0.5" />
  },
  {
    q: "¿Atienden solo urgencias o también clínica normal?",
    a: "Ambas cosas. Tenemos un equipo de internistas para urgencias y un equipo de médicos clínicos para consultas generales, vacunación y desparasitaciones.",
    icon: <Syringe size={18} className="text-[#DB1E26] shrink-0 mt-0.5" />
  },
  {
    q: "¿Necesito sacar turno para ir?",
    a: "Para urgencias NO es necesario turno, podés venir directamente. Para clínica general, ecografías o vacunas, recomendamos escribirnos por WhatsApp para coordinar.",
    icon: <Calendar size={18} className="text-[#DB1E26] shrink-0 mt-0.5" />
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const WHATSAPP_NUMBER = "5493425110131";
  const PHONE_NUMBER = "3425110131";

  return (
    <div className="font-sans min-h-screen bg-white" style={{ fontFamily: "'League Spartan', sans-serif" }}>
      <LoadingScreen />
      {/* Carga de la fuente para el entorno de previsualización */}
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;700;900&display=swap');" }} />

      {/* NAVEGACIÓN FULL WIDTH */}
      <nav className="bg-[#2B5289] w-full border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-white no-underline">
            <div className="bg-white rounded-xl p-1 shrink-0 flex items-center justify-center w-[48px] h-[48px] overflow-hidden">
              <Image
                src="/images/logo.jpg"
                alt="Logo Urgencias Veterinarias SF"
                width={48}
                height={48}
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div className="font-bold text-[15px] tracking-wide leading-tight">
              URGENCIAS<br />VETERINARIAS<br />SANTA FE
            </div>
          </a>

          <div className="hidden md:flex gap-8">
            <a href="#servicios" className="text-white/85 hover:text-white font-semibold text-base transition-colors">Servicios</a>
            <a href="#equipo" className="text-white/85 hover:text-white font-semibold text-base transition-colors">Equipo</a>
            <a href="#faq" className="text-white/85 hover:text-white font-semibold text-base transition-colors">Preguntas</a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}><Menu size={28} /></button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-[#2B5289] border-b border-white/10 p-6 flex flex-col gap-4">
          <a href="#servicios" className="text-white font-semibold text-lg" onClick={() => setIsMenuOpen(false)}>Servicios</a>
          <a href="#equipo" className="text-white font-semibold text-lg" onClick={() => setIsMenuOpen(false)}>Equipo</a>
          <a href="#faq" className="text-white font-semibold text-lg" onClick={() => setIsMenuOpen(false)}>Preguntas</a>
        </div>
      )}
      {/* HERO FULL WIDTH */}
      <section
        className="w-full bg-[#2B5289] relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(43, 82, 137, 0.95) 0%, rgba(43, 82, 137, 0.85) 45%, rgba(43, 82, 137, 0.3) 100%), url('https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-[#DB1E26] text-white text-[11px] font-black py-2 px-4 rounded shadow-lg shadow-red-900/30 tracking-widest flex items-center gap-1.5 z-20">
          <BellRing size={14} /> 24 HRS · 365 DÍAS
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row relative z-10 md:items-center md:justify-between">
          <div className="flex-1 mt-6 md:mt-0 max-w-2xl">
            <h1 className="text-white text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6">
              Urgencias veterinarias Santa Fe.
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-lg">
              Estabilizamos pacientes críticos, diagnosticamos rápidamente y hacemos clínica general. Nuestro equipo multidisciplinario trabaja coordinado las 24 horas.
            </p>

            {/* Botones */}
            <div className="flex flex-col md:flex-row gap-4 max-w-xl">
              <a href={`tel:${PHONE_NUMBER}`} className="bg-[#DB1E26] hover:bg-[#c51921] text-white text-lg font-extrabold py-4 px-8 rounded-xl flex items-center justify-center gap-3 text-center shadow-lg shadow-red-900/40 transition-transform hover:-translate-y-0.5 w-full">
                Tengo una urgencia
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20comunico%20desde%20la%20página%20web.%20Necesito%20coordinar%20un%20turno%20o%20hacer%20una%20consulta.`} target="_blank" rel="noreferrer" className="bg-white hover:bg-slate-50 text-[#2B5289] text-lg font-extrabold py-4 px-8 rounded-xl flex items-center justify-center gap-3 text-center shadow-md transition-transform hover:-translate-y-0.5 w-full">
                <MessageCircle size={24} className="text-[#25D366]" /> Turnos e informes
              </a>
            </div>
          </div>

          {/* Visual Desktop */}
          <div className="hidden md:block bg-white/10 border border-white/20 rounded-2xl p-10 text-center backdrop-blur-md ml-10 z-10 min-w-[240px]">
            <Clock size={64} className="text-[#DB1E26] mx-auto mb-4" />
            <div className="text-white/80 text-sm font-bold tracking-[0.2em] drop-shadow-md mb-1">ATENCIÓN</div>
            <div className="text-white text-5xl font-black drop-shadow-lg">24 / 7</div>
          </div>
        </div>
      </section>

      {/* STATS BAR FULL WIDTH */}
      <div className="w-full bg-[#1a3a5c] relative z-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-wrap">
          {["UCI", "LAB", "QX", "ECO"].map((stat, i) => (
            <div key={i} className="flex-1 min-w-[50%] md:min-w-[25%] p-6 text-center border-b md:border-b-0 border-r border-white/10 last:border-r-0 md:last:border-b-0">
              <div className="text-white text-2xl font-black mb-1">{stat}</div>
              <div className="text-white/60 text-[11px] font-bold tracking-widest uppercase">
                {stat === "UCI" ? "Terapia Intensiva" : stat === "LAB" ? "Laboratorio" : stat === "QX" ? "Quirófano" : "Ecografía"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="w-full bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-[11px] font-extrabold text-[#555] tracking-[2px] uppercase mb-3">Servicios</div>
          <div className="w-12 h-1.5 bg-[#DB1E26] rounded-full mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-black text-[#2B5289] mb-3 tracking-tight">Nuestras Áreas</h2>
          <p className="text-base md:text-lg font-medium text-[#555] mb-12 max-w-2xl">
            Equipamiento e instalaciones para resolver desde controles rutinarios hasta situaciones críticas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((s, idx) => (
              <div key={idx} className={`rounded-xl p-6 md:p-8 border-l-4 transition-transform hover:translate-x-1 shadow-sm ${s.urgent ? 'bg-[#fff0f1] border-[#DB1E26]' : 'bg-[#F8F9FA] border-[#2B5289]'}`}>
                <div className={`mb-4 ${s.urgent ? 'text-[#DB1E26]' : 'text-[#2B5289]'}`}>
                  {React.cloneElement(s.icon, { size: 32 })}
                </div>
                <h3 className="text-lg font-extrabold text-[#1A1A1A] mb-2 uppercase tracking-wide">{s.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ... después del </section> de servicios ... */}
      <PetCarousel />

      {/* SECCIÓN EQUIPO */}
      <section id="equipo" className="w-full bg-[#F8F9FA] py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-[11px] font-extrabold text-[#555] tracking-[2px] uppercase mb-3">Profesionales</div>
          <div className="w-12 h-1.5 bg-[#DB1E26] rounded-full mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-black text-[#2B5289] mb-3 tracking-tight">Conocé a nuestro equipo</h2>
          <p className="text-base md:text-lg font-medium text-[#555] mb-12 max-w-2xl">
            Especialistas divididos en Clínica General y Emergentología cubriendo las 24 horas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden flex shadow-sm hover:shadow-md transition-shadow">

                {/* COLUMNA IZQUIERDA: foto con encuadre de cara, o iniciales como fallback */}
                <div className={`${member.color} w-28 shrink-0 relative overflow-hidden`}>
                  {member.img ? (
                    <Image
                      src={member.img}
                      alt={`Foto de ${member.name}`}
                      fill
                      className="object-cover"
                      style={{ objectPosition: member.facePos }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/40 text-4xl font-black">{member.initials}</span>
                    </div>
                  )}
                </div>

                {/* COLUMNA DERECHA: datos del profesional */}
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <span className={`inline-block self-start text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded mb-3 ${member.type === 'clinic' ? 'bg-[#2B5289]/10 text-[#2B5289] border border-[#2B5289]/20' : 'bg-[#DB1E26]/10 text-[#DB1E26] border border-[#DB1E26]/20'}`}>
                    {member.type === 'clinic' ? 'MÉDICO CLÍNICO' : 'INTERNISTA / EMERGENTÓLOGO'}
                  </span>
                  <h4 className="text-lg font-extrabold text-[#1A1A1A] mb-1">{member.name}</h4>
                  <p className="text-sm font-medium text-[#555] leading-snug">{member.role}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs font-bold text-[#2B5289]">
                    {React.cloneElement(member.icon, { size: 16 })} {member.shift}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN FAQ */}
      <section id="faq" className="w-full bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-[11px] font-extrabold text-[#555] tracking-[2px] uppercase mb-3">Preguntas frecuentes</div>
          <div className="w-12 h-1.5 bg-[#DB1E26] rounded-full mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-black text-[#2B5289] mb-3 tracking-tight">Resolvemos tus dudas</h2>
          <p className="text-base md:text-lg font-medium text-[#555] mb-10 max-w-2xl">
            Información rápida antes de visitarnos.
          </p>

          <div className="flex flex-col max-w-4xl">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 py-6 last:border-0">
                <div className="flex items-start gap-4">
                  {React.cloneElement(faq.icon, { size: 24, className: "text-[#DB1E26] shrink-0 mt-1" })}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-[#1A1A1A]">{faq.q}</h4>
                    <p className="text-sm md:text-base text-[#555] mt-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO & MAPA */}
      <section className="w-full bg-[#F8F9FA] py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="text-[11px] font-extrabold text-[#555] tracking-[2px] uppercase mb-3">Contacto y ubicación</div>
            <div className="w-12 h-1.5 bg-[#DB1E26] rounded-full mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-black text-[#2B5289] mb-10 tracking-tight">Datos de contacto</h2>

            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-4 mb-6 group no-underline">
              <div className="w-14 h-14 rounded-xl bg-[#DB1E26]/10 border border-[#DB1E26]/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#DB1E26]">
                <Phone size={26} className="text-[#DB1E26] group-hover:text-white" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#555] tracking-widest mb-1">LLAMADAS / URGENCIAS</div>
                <div className="text-lg md:text-xl font-bold text-[#1A1A1A]">342 511-0131</div>
              </div>
            </a>

            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 mb-6 group no-underline">
              <div className="w-14 h-14 rounded-xl bg-white border border-gray-300 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#2B5289]">
                <MessageCircle size={26} className="text-[#2B5289] group-hover:text-white" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#555] tracking-widest mb-1">WHATSAPP / TURNOS</div>
                <div className="text-lg md:text-xl font-bold text-[#1A1A1A]">342 511-0131</div>
              </div>
            </a>

            <a href="mailto:urgenciasvet24@gmail.com" className="flex items-center gap-4 mb-6 group no-underline">
              <div className="w-14 h-14 rounded-xl bg-white border border-gray-300 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#2B5289]">
                <Mail size={26} className="text-[#2B5289] group-hover:text-white" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#555] tracking-widest mb-1">CORREO ELECTRÓNICO</div>
                <div className="text-lg md:text-xl font-bold text-[#1A1A1A]">urgenciasvet24@gmail.com</div>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white border border-gray-300 flex items-center justify-center shrink-0">
                <Clock size={26} className="text-[#2B5289]" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#555] tracking-widest mb-1">HORARIO DE ATENCIÓN</div>
                <div className="text-lg md:text-xl font-bold text-[#1A1A1A]">Abierto 24 hs · 365 días</div>
              </div>
            </div>
          </div>

          {/* El mapa ocupa toda la columna en desktop */}
          {/* MAPA FULL LIMPÍO */}
          <div className="w-full min-h-[300px] lg:h-full rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.540571083117!2d-60.67532483042777!3d-31.60201269838605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b500ab520da02d%3A0x919d6046a8d038e5!2sAv.%20Gral.%20Paz%207623%2C%20S3000%20Santa%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1779395438059!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER FULL WIDTH */}
      <footer className="w-full bg-[#1a3a5c] py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/60 text-sm font-medium">© 2026 Urgencias Veterinarias Santa Fe</div>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="WhatsApp">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}