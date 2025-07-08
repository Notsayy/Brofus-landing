export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Brofus</h1>
      <p className="text-xl text-gray-700 mb-8">Le site communautaire fait par des joueurs, pour les joueurs.</p>
      <a href="http://localhost:5173/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-900 transition transform hover:-translate-y-1 hover:shadow-lg duration-200">Découvrir Brofus</a>
    </section>
  );
} 