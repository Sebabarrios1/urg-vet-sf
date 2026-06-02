'use client';
import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  BellRing, Clock, HeartPulse, Microscope,
  Scissors, Monitor, Sun, Moon, Briefcase,
  Sunset, AlertCircle, Syringe, Calendar,
  Phone, Mail, MapPin, Menu, MessageCircle,
  Star, Stethoscope, Activity, Zap
} from 'lucide-react';
import Image from 'next/image';

// --- DATOS ACTUALIZADOS ---

const SERVICES = [
  {
    title: "URGENCIAS 24 HORAS",
    desc: "Atención inmediata todos los días del año, incluidos feriados.",
    icon: <BellRing size={24} />,
    urgent: true
  },
  {
    title: "UCI · INTERNACIÓN",
    desc: "Unidad de cuidados intensivos con monitoreo constante y atención veterinaria permanente.",
    icon: <HeartPulse size={24} />,
    urgent: true
  },
  {
    title: "CIRUGÍAS",
    desc: "Quirófano equipado y coordinación con especialistas para cirugías programadas y urgencias.",
    icon: <Scissors size={24} />,
    urgent: false
  },
  {
    title: "LABORATORIO CLÍNICO",
    desc: "Análisis y diagnóstico rápido con equipamiento propio.",
    icon: <Microscope size={24} />,
    urgent: false
  },
  {
    title: "CLÍNICA GENERAL",
    desc: "Controles, vacunación, desparasitación y seguimiento clínico.",
    icon: <Syringe size={24} />,
    urgent: false
  }
];

const SPECIALTIES = [
  { title: "ECOGRAFÍA", desc: "Diagnóstico por imágenes mediante ecografías.", icon: <Monitor size={20} /> },
  { title: "DERMATOLOGÍA", desc: "Diagnóstico y tratamiento de enfermedades de la piel.", icon: <Stethoscope size={20} /> },
  { title: "CARDIOLOGÍA", desc: "Evaluación cardiológica y estudios especializados.", icon: <Activity size={20} /> }
];

const TEAM = [
  {
    name: "Yanina Parra",
    role: "Jefa de área Clínica",
    shift: "Turno mañana",
    type: "clinic",
    icon: <Sun size={14} />,
    color: "bg-[#2B5289]",
    img: "/images/yanina_parra_.jpeg",
    facePos: "center 15%"
  },
  {
    name: "Antonella Ledezma",
    role: "Veterinaria Clínica",
    shift: "Turno mañana",
    type: "clinic",
    icon: <Sun size={14} />,
    color: "bg-[#4A75B0]",
    img: "/images/antonella_ledezma_.jpeg",
    facePos: "center 10%"
  },
  {
    name: "Juan Del Prete",
    role: "Veterinario Clínico",
    shift: "Clínica General",
    type: "clinic",
    icon: <Briefcase size={14} />,
    color: "bg-[#1a3a5c]",
    img: "/images/juan_del_prete_.jpeg",
    facePos: "center 5%" // Ajustado para evitar "agujeritos"
  },
  {
    name: "Luis Prieto",
    role: "Veterinario Clínico",
    shift: "Turno tarde",
    type: "clinic",
    icon: <Sunset size={14} />,
    color: "bg-[#3a6090]",
    img: "/images/Luis_Prieto.jpeg",
    facePos: "center top"
  },
  {
    name: "Federico Modini",
    role: "Veterinario Internista",
    shift: "Turno tarde",
    type: "emergent",
    icon: <Sunset size={14} />,
    color: "bg-[#b8171f]",
    img: "/images/Federico_Modini.jpeg",
    facePos: "center 10%"
  },
  {
    name: "Eliana Ramírez",
    role: "Jefa de internación y coordinadora general",
    shift: "Guardia nocturna",
    type: "emergent",
    icon: <Moon size={14} />,
    color: "bg-[#DB1E26]",
    img: "/images/eliana_ramirez.jpeg",
    facePos: "center 12%"
  },
  {
    name: "Juan Torti",
    role: "Veterinario internista y emergentólogo",
    shift: "Guardia nocturna",
    type: "emergent",
    icon: <Moon size={14} />,
    color: "bg-[#8c1116]",
    img: "/images/Juan_Torti.jpeg",
    facePos: "center 20%" // Ajustado para limpiar fondo/puerta
  }
];

const FAQS = [
  { q: "¿Atienden sin turno?", a: "Para urgencias NO es necesario turno, podés venir directamente las 24 hs. Para clínica general recomendamos coordinar por WhatsApp." },
  { q: "¿Puedo acercarme directamente?", a: "Sí, nuestro equipo de guardia está siempre disponible para recibir pacientes críticos sin previo aviso." },
  { q: "¿Trabajan feriados?", a: "Sí, trabajamos los 365 días del año, incluyendo feriados nacionales y fiestas, manteniendo atención veterinaria permanente." },
  { q: "¿Tienen internación?", a: "Contamos con una Unidad de Cuidados Intensivos (UCI) totalmente equipada para el monitoreo de pacientes que requieren hospitalización." },
  { q: "¿Atienden perros y gatos?", a: "Sí, nos especializamos exclusivamente en medicina canina y felina para brindar la mejor atención enfocada." },
  { q: "¿Realizan análisis?", a: "Contamos con laboratorio clínico propio para obtener resultados de diagnósticos rápidos en situaciones de urgencia." },
  { q: "¿Se coordinan derivaciones?", a: "Sí, coordinamos derivaciones con especialistas como Tamara Silvetti, Nicolás Picciochi y Valeria Gálvez para interconsultas específicas." }
];

const URGENCY_SIGNS = [
  "Dificultad para respirar (esfuerzo, coloración azulada).",
  "Ingesta de objetos o sustancias tóxicas (chocolate, venenos, objetos, plantas, limpieza).",
  "Vómitos o diarrea persistentes (+24/48 hs, sangre, decaimiento).",
  "Convulsiones o desmayos.",
  "Traumatismos o accidentes.",
  "Dificultad para caminar o dolor intenso.",
  "Sangrados.",
  "Falta de apetito y decaimiento."
];

const PETS = [

  { name: "Caninos", img: "/images/perro.jpg" },

  { name: "Felinos", img: "/images/gato.jpg" }

];
<PetCarousel />

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
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

function PetCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <section className="w-full py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h3 className="text-3xl font-black text-[#2B5289]">Nuestros Pacientes</h3>
      </div>
      <div className="overflow-hidden px-6" ref={emblaRef}>
        <div className="flex gap-6 max-w-4xl mx-auto">
          {PETS.map((pet, idx) => (
            <div key={idx} className="flex-1 min-w-0">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group bg-gray-200">
                <img
                  src={pet.img}
                  alt={pet.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const WHATSAPP_NUMBER = "5493425502341";
  const PHONE_NUMBER = "3425502341";

  return (
    <div className="font-sans min-h-screen bg-white" style={{ fontFamily: "'League Spartan', sans-serif" }}>
      <LoadingScreen />
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;700;900&display=swap');" }} />

      {/* NAVEGACIÓN */}
      <nav className="bg-[#2B5289] w-full border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-white no-underline">
            <div className="bg-white rounded-xl p-1 shrink-0 flex items-center justify-center w-[48px] h-[48px] overflow-hidden">
              <img src="/images/logo.jpg" alt="Logo" className="w-full h-full object-cover scale-110" />
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
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}><Menu size={28} /></button>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#2B5289] p-6 flex flex-col gap-6">
          <button className="self-end text-white" onClick={() => setIsMenuOpen(false)}><Menu size={28} /></button>
          <a href="#servicios" className="text-white font-bold text-2xl" onClick={() => setIsMenuOpen(false)}>Servicios</a>
          <a href="#equipo" className="text-white font-bold text-2xl" onClick={() => setIsMenuOpen(false)}>Equipo</a>
          <a href="#faq" className="text-white font-bold text-2xl" onClick={() => setIsMenuOpen(false)}>Preguntas</a>
        </div>
      )}

      { }
      {/* HERO SECTION */}
      <section className="w-full bg-[#2B5289] relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(90deg, rgba(43, 82, 137, 0.95) 0%, rgba(43, 82, 137, 0.85) 45%, rgba(43, 82, 137, 0.3) 100%), url('https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row relative z-10 items-center">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.05] mb-6">
              Urgencias Veterinarias Santa Fe.
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-lg">
              Atención inmediata para perros y gatos. Urgencias, internación y clínica general las 24 hs.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a href={`tel:${PHONE_NUMBER}`} className="bg-[#DB1E26] hover:bg-[#c51921] text-white text-lg font-extrabold py-4 px-8 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-red-900/40 transition-transform hover:-translate-y-1">
                <Phone size={24} /> Llamar ahora
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="bg-white hover:bg-slate-50 text-[#2B5289] text-lg font-extrabold py-4 px-8 rounded-xl flex items-center justify-center gap-3 shadow-md transition-transform hover:-translate-y-1">
                <MessageCircle size={24} className="text-[#25D366]" /> Turnos e informes
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-md ml-10">
            <Clock size={50} className="text-[#DB1E26] mb-2" />
            <div className="text-white text-sm font-bold tracking-widest uppercase mt-2">Atención</div>
            <div className="text-white text-5xl font-black mt-1">24 HORAS</div>
          </div>
        </div>
      </section>

      { }
      {/* MÉTRICAS DE CONFIANZA */}
      <div className="w-full bg-[#1a3a5c] border-b border-white/10">
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
            <div className="text-white text-3xl font-black flex items-center justify-center gap-2"><Star className="text-yellow-400 fill-yellow-400" size={24} /> 4.3</div>
            <div className="text-white/60 text-[11px] font-bold uppercase tracking-widest mt-1">Calificación Google</div>
          </div>
        </div>
      </div>

      {/* SECCIÓN NUESTRAS ÁREAS */}
      <section id="servicios" className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#2B5289] mb-12 uppercase tracking-tight">Nuestras Áreas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, idx) => (
              <div key={idx} className={`rounded-2xl p-8 transition-all hover:shadow-xl ${s.urgent ? 'bg-[#DB1E26] text-white' : 'bg-[#2B5289] text-white'}`}>
                <div className="mb-4 opacity-80">{s.icon}</div>
                <h3 className="text-2xl font-black mb-3 leading-tight">{s.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN ESPECIALIDADES */}
      <section className="w-full py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h3 className="text-2xl font-black text-[#2B5289]">Especialidades Médicas</h3>
            <p className="text-gray-600 font-semibold text-lg mt-2">Atención con profesionales externos especializados y turnos programados gestionados por la clínica.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIALTIES.map((spec, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
                <div className="text-[#DB1E26]">{spec.icon}</div>
                <div>
                  <h4 className="font-black text-sm text-gray-800 uppercase">{spec.title}</h4>
                  <p className="text-xs text-gray-500 font-medium">{spec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      { }
      {/* SECCIÓN EDUCATIVA: ¿QUÉ ES UNA URGENCIA? */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#fff0f1] rounded-3xl p-8 md:p-12 border-2 border-[#DB1E26]/20 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-black text-[#DB1E26] mb-6 flex items-center gap-3">
              <AlertCircle size={32} /> ¿Qué es una urgencia?
            </h2>
            <p className="text-gray-800 font-bold text-lg mb-8">Si tu mascota presenta alguno de estos signos, acudí inmediatamente:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {URGENCY_SIGNS.map((sign, i) => (
                <div key={i} className="flex items-start gap-3 text-base font-semibold text-gray-700">
                  <Zap size={20} className="text-[#DB1E26] shrink-0 mt-1" /> {sign}
                </div>
              ))}
            </div>
            <div className="mt-10 p-4 bg-white rounded-xl border border-[#DB1E26]/10 inline-block">
              <p className="text-base font-bold text-[#2B5289] italic m-0">
                "Ante cualquier duda, recomendamos comunicarse con la clínica para poder orientarte."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUESTROS PACIENTES */}
      <PetCarousel />

      { }
      {/* EQUIPO */}
      <section id="equipo" className="w-full bg-white py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-[#2B5289] mb-4">Conocé a nuestro equipo</h2>
          <p className="text-gray-600 font-bold text-lg mb-12">Profesionales comprometidos con la atención clínica y de urgencias las 24 horas.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm flex border border-gray-200">
                <div className="w-32 bg-gray-200 shrink-0 relative">
                  {member.img && (
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: member.facePos }}
                    />
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <span className={`inline-block self-start text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider mb-2 ${member.type === 'clinic' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'}`}>
                    {member.type === 'clinic' ? 'CLÍNICA GENERAL' : 'INTERNACIÓN / EMERG.'}
                  </span>
                  <h4 className="font-black text-gray-800 text-lg">{member.name}</h4>
                  <p className="text-xs font-bold text-gray-500 mt-1">{member.role}</p>
                  <div className="flex items-center gap-1 mt-3 text-xs font-bold text-[#2B5289]">
                    {member.icon} {member.shift}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      { }
      {/* FAQ */}
      <section id="faq" className="w-full bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#2B5289] mb-10">Resolvemos tus dudas</h2>
          <div className="space-y-6">
            {FAQS.map((f, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h4 className="font-black text-gray-800 mb-2 text-lg flex gap-3"><div className="w-2 h-2 bg-[#DB1E26] rounded-full mt-2.5 shrink-0"></div> {f.q}</h4>
                <p className="text-gray-600 text-base font-medium pl-5">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO Y UBICACIÓN */}
      <section className="w-full bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-[#2B5289] mb-10">Contacto y ubicación</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 flex flex-col justify-center">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-5 group no-underline">
                <div className="w-14 h-14 rounded-full bg-[#DB1E26] text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-200 transition-transform group-hover:scale-110"><Phone size={24} /></div>
                <div><div className="text-[11px] font-black text-gray-400 tracking-widest uppercase mb-1">Urgencias 24 hs</div><div className="text-2xl font-black text-gray-800">{PHONE_NUMBER}</div></div>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-5 group no-underline">
                <div className="w-14 h-14 rounded-full bg-white border border-gray-300 text-[#25D366] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110"><MessageCircle size={28} /></div>
                <div><div className="text-[11px] font-black text-gray-400 tracking-widest uppercase mb-1">Turnos e informes</div><div className="text-2xl font-black text-gray-800">WhatsApp</div></div>
              </a>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#2B5289] text-white flex items-center justify-center shrink-0"><MapPin size={24} /></div>
                <div><div className="text-[11px] font-black text-gray-400 tracking-widest uppercase mb-1">Dirección</div><div className="text-xl font-black text-gray-800">Av. Gral. Paz 7623, Santa Fe</div></div>
              </div>
            </div>
            <div className="h-[350px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.540571083117!2d-60.67532483042777!3d-31.60201269838605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b500ab520da02d%3A0x919d6046a8d038e5!2sAv.%20Gral.%20Paz%207623%2C%20S3000%20Santa%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1779395438059!5m2!1ses-419!2sar" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      { }
      {/* FOOTER */}
      <footer className="w-full bg-[#1a3a5c] py-12 text-center text-white/60 px-6">
        <p className="text-white text-xl md:text-2xl font-bold mb-8 italic max-w-3xl mx-auto">"Comprometidos con una atención veterinaria cálida, profesional y disponible las 24 horas."</p>
        <div className="flex justify-center gap-6 mb-8 text-2xl">
          <a href="#" className="hover:text-white transition-colors"><Mail size={28} /></a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-white transition-colors"><MessageCircle size={28} /></a>
        </div>
        <div className="text-sm font-medium">© 2026 Urgencias Veterinarias Santa Fe · Todos los derechos reservados</div>
      </footer>
    </div>
  );
}