'use client';

import React, { useEffect, useState } from 'react';
import { X, Home, MapPin } from 'lucide-react';

// Cambiá estos textos si tu clienta te pasa una nueva versión.
const NOTICE_TITLE = '¡En agosto nos mudamos!';
const NOTICE_INTRO = 'Muy pronto nos vas a encontrar en una nueva dirección:';
const NOTICE_ADDRESS_LINE_1 = 'Marcial Candioti 3129';
const NOTICE_ADDRESS_LINE_2 = 'Santa Fe Capital';
const NOTICE_CLOSING =
  'Seguimos siendo los mismos, con la atención y el compromiso de siempre. 🐾';
const NOTICE_FOOTER = '¡Falta poquito! Te iremos contando todas las novedades.';

// Subí este número cada vez que cambies el texto del aviso,
// así a los usuarios que ya lo cerraron se les vuelve a mostrar.
const NOTICE_VERSION = '4';
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
      role="status"
      aria-live="polite"
      className={`fixed z-50 bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[360px] transition-all duration-300 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden max-h-[85vh] overflow-y-auto">
        <button
          onClick={handleDismiss}
          aria-label="Cerrar aviso"
          className="absolute top-2.5 right-2.5 rounded-full p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="bg-[#DB1E26] px-4 py-2.5 pr-9 flex items-center gap-2">
          <Home size={16} className="text-white shrink-0" aria-hidden="true" />
          <span className="text-white font-semibold text-sm">{NOTICE_TITLE}</span>
        </div>

        <div className="px-4 py-3.5 space-y-3">
          <p className="text-slate-600 text-sm leading-relaxed">{NOTICE_INTRO}</p>

          <div className="flex items-start gap-2 bg-slate-50 rounded-xl px-3 py-2.5">
            <MapPin size={16} className="text-[#DB1E26] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-slate-700 text-sm font-semibold leading-snug">
              {NOTICE_ADDRESS_LINE_1}
              <br />
              {NOTICE_ADDRESS_LINE_2}
            </p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">{NOTICE_CLOSING}</p>

          <div className="flex justify-center">
            <span className="inline-block text-xs font-semibold tracking-wide text-[#DB1E26] bg-[#DB1E26]/10 rounded-full px-3 py-1">
              ✨ PRÓXIMAMENTE ✨
            </span>
          </div>

          <p className="text-slate-500 text-xs leading-relaxed text-center">{NOTICE_FOOTER}</p>
        </div>
      </div>
    </div>
  );
}