'use client';

import React, { useEffect, useState } from 'react';
import { X, Home } from 'lucide-react';

// Cambiá este texto por el aviso real (nueva dirección / fecha de mudanza).
const NOTICE_TITLE = '¡Nos mudamos!';
const NOTICE_TEXT_1 =
  'A partir de agosto nos vas a encontrar en Marcial Candioti 3129, Santa Fe Capital.';
const NOTICE_TEXT_2 = 'Seguimos con la misma atención y compromiso de siempre. 🐾';
// Subí este número cada vez que cambies el texto del aviso,
// así a los usuarios que ya lo cerraron se les vuelve a mostrar.
const NOTICE_VERSION = '3';
const STORAGE_KEY = `notice-dismissed-v${NOTICE_VERSION}`;

// Cuánto tarda en aparecer después de cargar la página (ms).
const SHOW_DELAY_MS = 1200;

export default function RelocationNotice() {
  const [dismissed, setDismissed] = useState(true); // arranca oculto para evitar parpadeo (FOUC)
  const [visible, setVisible] = useState(false); // controla la animación de entrada

  useEffect(() => {
    const wasDismissed = window.localStorage.getItem(STORAGE_KEY) === '1';
    if (wasDismissed) return;

    setDismissed(false);
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  const handleDismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
    // esperamos a que termine la animación de salida antes de sacarlo del DOM
    setTimeout(() => setDismissed(true), 300);
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed z-50 bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[340px] transition-all duration-300 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
        <button
          onClick={handleDismiss}
          aria-label="Cerrar aviso"
          className="absolute top-2.5 right-2.5 rounded-full p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="bg-[#2B5289] px-4 py-2.5 pr-9 flex items-center gap-2">
          <Home size={16} className="text-white shrink-0" aria-hidden="true" />
          <span className="text-white font-semibold text-sm">{NOTICE_TITLE}</span>
        </div>

        <div className="px-4 py-3.5 space-y-2">
          <p className="text-slate-600 text-sm leading-relaxed">{NOTICE_TEXT_1}</p>
          <p className="text-slate-600 text-sm leading-relaxed">{NOTICE_TEXT_2}</p>
        </div>
      </div>
    </div>
  );
}