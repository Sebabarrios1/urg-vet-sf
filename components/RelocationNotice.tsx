'use client';

import React, { useEffect, useState } from 'react';
import { X, MapPin } from 'lucide-react';

// Cambiá estos textos si tu clienta te pasa una nueva versión.
const NOTICE_TITLE = '¡NOS MUDAMOS!';
const NOTICE_SUBTITLE = '¡Ya estamos en nuestra nueva dirección!';
const NOTICE_ADDRESS = 'Marcial Candioti 3129';
const NOTICE_CLOSING = 'La misma atención de siempre, ahora en un nuevo espacio.';
const NOTICE_BUTTON_LABEL = 'CÓMO LLEGAR';
const NOTICE_MAPS_URL = 'https://maps.app.goo.gl/VYyqSEo1nxsmfTjK6';

// Subí este número cada vez que cambies el texto del aviso,
// así a los usuarios que ya lo cerraron se les vuelve a mostrar.
const NOTICE_VERSION = '5';
const STORAGE_KEY = `notice-dismissed-v${NOTICE_VERSION}`;

// Cuánto tarda en aparecer después de cargar la página (ms).
const SHOW_DELAY_MS = 1200;

export default function RelocationNotice() {
  const [dismissed, setDismissed] = useState(true); // arranca oculto para evitar parpadeo (FOUC)
  const [visible, setVisible] = useState(false); // controla la animación de entrada

  useEffect(() => {
    const wasDismissed = window.sessionStorage.getItem(STORAGE_KEY) === '1';
    if (wasDismissed) return;

    setDismissed(false);
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  const handleDismiss = () => {
    window.sessionStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
    // esperamos a que termine la animación de salida antes de sacarlo del DOM
    setTimeout(() => setDismissed(true), 300);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Aviso de mudanza"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 transition-opacity duration-300 ease-out ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleDismiss}
    >
      <div
        className={`relative bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden w-[85%] sm:w-[480px] max-w-[500px] max-h-[85vh] overflow-y-auto transition-all duration-300 ease-out ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleDismiss}
          aria-label="Cerrar aviso"
          className="absolute top-3 right-3 rounded-full p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="px-6 sm:px-8 py-8 sm:py-10 text-center space-y-4">
          <h2 className="text-[28px] sm:text-[34px] font-black text-[#DB1E26] leading-tight">
            {NOTICE_TITLE}
          </h2>

          <p className="text-[18px] sm:text-[21px] font-semibold text-slate-700 leading-snug">
            {NOTICE_SUBTITLE}
          </p>

          <div className="flex items-center justify-center gap-2 py-1">
            <MapPin size={24} className="text-[#DB1E26] shrink-0" aria-hidden="true" />
            <p className="text-[23px] sm:text-[28px] font-black text-slate-800 leading-tight">
              {NOTICE_ADDRESS}
            </p>
          </div>

          <p className="text-[15px] sm:text-[16px] text-slate-500 leading-relaxed">
            {NOTICE_CLOSING}
          </p>

          <a
            href={NOTICE_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#DB1E26] hover:bg-[#c51921] text-white text-[16px] sm:text-[18px] font-bold py-3 px-8 rounded-xl shadow-lg shadow-red-900/30 transition-transform hover:-translate-y-0.5"
          >
            {NOTICE_BUTTON_LABEL}
          </a>
        </div>
      </div>
    </div>
  );
}
