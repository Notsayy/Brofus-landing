import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="px-4 md:px-8 py-4 border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <a href="#root" className="text-2xl font-bold tracking-tight focus:outline-none focus:ring-2 focus:ring-black">Brofus</a>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-gray-700 hover:text-black transition">Fonctionnalités</a>
          <a href="#about" className="text-gray-700 hover:text-black transition">À propos</a>
          <a
            href="http://brofus.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900 font-semibold"
          >
            Accéder à Brofus
          </a>
        </nav>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 mt-4 md:hidden animate-fade-in">
          <a href="#features" className="text-gray-700 hover:text-black transition" onClick={() => setOpen(false)}>Fonctionnalités</a>
          <a href="#about" className="text-gray-700 hover:text-black transition" onClick={() => setOpen(false)}>À propos</a>
          <a
            href="http://brofus.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900 font-semibold"
            onClick={() => setOpen(false)}
          >
            Accéder à Brofus
          </a>
        </nav>
      )}
    </header>
  );
} 