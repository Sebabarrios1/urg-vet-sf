'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

// Cambiá este texto por el aviso real (nueva dirección / fecha de mudanza).
const NOTICE_TEXT =
  '🏠 ¡En agosto nos mudamos! Muy pronto en Marcial Candioti 3129, Santa Fe Capital. Seguimos con la misma atención y compromiso de siempre. 🐾';

// Subí este número cada vez que cambies el texto del aviso,
// así a los usuarios que ya lo cerraron se les vuelve a mostrar.
const NOTICE_VERSION = '2';
const STORAGE_KEY = `notice-dismissed-v${NOTICE_VERSION}`;

export default function RelocationNotice() {
  const [dismissed, setDismissed] = useState(true); // arranca oculto para evitar parpadeo (FOUC)

  useEffect(() => {
    const wasDismissed = window.localStorage.getItem(STORAGE_KEY) === '1';
    setDismissed(wasDismissed);
  }, []);

  if (dismissed) return null;

  const handleDismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, '1');
    setDismissed(true);
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="w-full bg-[#DB1E26] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center gap-3 text-sm sm:text-[15px]">
        <p className="flex-1 text-center leading-snug font-medium">{NOTICE_TEXT}</p>
        <button
          onClick={handleDismiss}
          aria-label="Cerrar aviso"
          className="shrink-0 rounded-full p-1 hover:bg-white/15 transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}