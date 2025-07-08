export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="text-2xl font-bold tracking-tight">Brofus</div>
      <nav className="flex gap-6 items-center">
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
    </header>
  );
} 