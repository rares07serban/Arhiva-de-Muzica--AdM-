import { useEffect, useState } from "react";
import PiesaList from "./components/PiesaList.jsx";
import PiesaForm from "./components/PiesaForm.jsx";
import { createPiesa, deletePiesa, fetchPiese, updatePiesa } from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [piese, setPiese] = useState([]);
  const [tema, setTema] = useState(temaInitiala);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchPiese();
        if (!ignore) setPiese(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(piesaNoua) {
    const creata = await createPiesa(piesaNoua);
    setPiese((prev) => [...prev, creata]);
  }

  async function handleToggle(id) {
    const piesa = piese.find((p) => p.id === id);
    if (!piesa) return;

    try {
      const actualizata = await updatePiesa(id, { done: !piesa.done });
      setPiese((prev) => prev.map((p) => (p.id === id ? actualizata : p)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deletePiesa(id);
      setPiese((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const active = piese.filter((p) => !p.done).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
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
        <section className="panel" aria-labelledby="add-title">
          <h2 id="add-title">Adaugă o piesă</h2>
          <PiesaForm onAdd={handleAdd} />
        </section>

        <section className="panel" aria-labelledby="list-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Colecția mea</p>
              <h2 id="list-title">Piese audio</h2>
            </div>
            <span className="list-count">{piese.length} piese</span>
          </div>

          {loading && (
            <p className="info" data-testid="loading">
              Se încarcă arhiva...
            </p>
          )}
          {error && (
            <p className="error" data-testid="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}
          {!loading && (
            <PiesaList
              piese={piese}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>

      <footer className="app-footer">
        <p>Arhiva de Muzică · Proiect Tehnologii Web</p>
      </footer>
    </>
  );
}