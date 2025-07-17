import { useState } from "react";

function FeatureVideo({ youtubeId, fallbackImg, title, description, onClick, isClickable = false, onlyVideo = false }) {
  const [error, setError] = useState(false);
  if (onlyVideo) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
          {!error ? (
            <iframe
              title={title}
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&controls=1&showinfo=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              onError={() => setError(true)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                background: 'black',
                borderRadius: '0.75rem',
              }}
            />
          ) : (
            <img
              src={fallbackImg}
              alt={`Aperçu de la fonctionnalité ${title}`}
              className="w-full h-full object-cover rounded-xl"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          )}
        </div>
      </div>
    );
  }
  return (
    <div
      className={`aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-white flex flex-col border ${isClickable ? 'cursor-pointer hover:scale-[1.02] transition-transform' : ''}`}
      onClick={isClickable ? onClick : undefined}
    >
      {!error ? (
        <iframe
          title={title}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&controls=1&showinfo=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          onError={() => setError(true)}
          className="min-h-[300px]"
          style={{ border: 'none' }}
        />
      ) : (
        <img
          src={fallbackImg}
          alt={`Aperçu de la fonctionnalité ${title}`}
          className="w-full h-full object-cover"
        />
      )}
      <div className="p-4 bg-violet-50 flex-1 flex flex-col justify-end">
        <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}

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
  const videos = [
    {
      youtubeId: "A8sLUSPhTWE",
      title: "Drop Calculator",
    },
    {
      youtubeId: "w3Jo-bT-5wM",
      title: "Transfinder",
    },
  ];

  return (
    <>
      <section id="features" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Fonctionnalités</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl border bg-white shadow p-8 flex flex-col items-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">👥</div>
              <div className="font-semibold text-lg mb-2 text-gray-900">Communauté active</div>
              <div className="text-gray-600 text-center">Rejoins une communauté de joueurs passionnés, partage tes expériences et découvre de nouveaux amis.</div>
            </div>
            <div className="rounded-xl border bg-white shadow p-8 flex flex-col items-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎮</div>
              <div className="font-semibold text-lg mb-2 text-gray-900">Outils pour joueurs</div>
              <div className="text-gray-600 text-center">Accède à des outils exclusifs pour améliorer ton expérience de jeu : Dropcalculator, Transfinder, Petstats, etc.</div>
            </div>
            <div className="rounded-xl border bg-white shadow p-8 flex flex-col items-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🧪</div>
              <div className="font-semibold text-lg mb-2 text-gray-900">Teste et améliore Brofus </div>
              <div className="text-gray-600 text-center">Viens essayer le site, partage tes retours et propose tes idées d'améliorations pour faire évoluer Brofus avec la communauté !</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Démonstration des outils</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-16">
            {videos.map((video) => (
              <div key={video.youtubeId} className="flex flex-col items-center w-full md:w-1/2">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&controls=1&showinfo=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl shadow-lg w-full max-w-xl aspect-video"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 