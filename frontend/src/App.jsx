import PiesaList from "./components/PiesaList.jsx";

const piese = [
  {
    id: 1,
    title: "Back From Eternity",
    done: false,
    isFavorite: true,
    genre: "Electronic",
    category: "Uploads",
    user: "Creator demo",
    audioFormat: "MP3"
  },
  {
    id: 2,
    title: "Eleven",
    done: true,
    isFavorite: false,
    genre: "Ambient",
    category: "Playlists",
    user: "Creator demo",
    audioFormat: "WAV"
  },
  {
    id: 3,
    title: "Pet",
    done: false,
    isFavorite: false,
    genre: "Rock",
    category: "Saved Tracks",
    user: "Creator demo",
    audioFormat: "FLAC"
  }
];

export default function App() {
  const active = piese.filter((p) => !p.done).length;

  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <p className="eyebrow">Proiect Tehnologii Web</p>
          <h1>Arhiva de Muzică</h1>
          <p className="app-description">
            O platformă audio pentru creatori și ascultători, unde piesele pot fi
            organizate și descoperite după gen.
          </p>
          <p className="app-count">
            {piese.length} piese, dintre care {active} active
          </p>
        </div>
      </header>

      <main className="container">
        <section className="panel" aria-labelledby="list-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Colecția mea</p>
              <h2 id="list-title">Piese audio</h2>
            </div>
            <span className="list-count">{piese.length} piese</span>
          </div>

          <PiesaList piese={piese} />
        </section>
      </main>

      <footer className="app-footer">
        <p>Arhiva de Muzică · Proiect Tehnologii Web</p>
      </footer>
    </>
  );
}