export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">À propos</h2>
        <p className="mb-4 text-gray-700">Projet personnel, inspiré par l’envie d'aider les joueurs de Dofus a avoir une expérience de jeu la plus agréable possible.</p>
        <div className="mb-2 text-gray-600">Auteur : <span className="font-semibold">Notsay</span></div>
        <a
          href="https://github.com/Notsayy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-black text-white px-6 py-2 rounded-md font-semibold transition transform hover:-translate-y-1 hover:shadow-lg duration-200"
        >
          Mon github
        </a>
      </div>
    </section>
  );
} 