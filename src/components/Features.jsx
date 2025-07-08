const features = [
  {
    icon: "👥",
    title: "Communauté active",
    desc: "Rejoins une communauté de joueurs passionnés, partage tes expériences et découvre de nouveaux amis.",
  },
  {
    icon: "🎮",
    title: "Outils pour joueurs",
    desc: "Accède à des outils exclusifs pour améliorer ton expérience de jeu : Dropcalculator, Transfinder, Petstats, etc.",
  },
  {
    icon: "🧪",
    title: "Teste et améliore Brofus ",
    desc: "Viens essayer le site, partage tes retours et propose tes idées d'améliorations pour faire évoluer Brofus avec la communauté !",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border bg-white shadow p-8 flex flex-col items-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <div className="font-semibold text-lg mb-2">{f.title}</div>
              <div className="text-gray-600 text-center">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 