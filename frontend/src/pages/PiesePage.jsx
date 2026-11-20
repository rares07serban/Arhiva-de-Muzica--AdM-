import { useEffect, useState } from "react";
import PiesaList from "../components/PiesaList.jsx";
import PiesaForm from "../components/PiesaForm.jsx";
import { createPiesa, deletePiesa, fetchPiese, updatePiesa } from "../api.js";
import styles from "./PiesePage.module.css";

export default function PiesePage() {
  const [piese, setPiese] = useState([]);
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

  const active = piese.filter((p) => !p.done).length;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Adaugă o piesă</h2>
        <PiesaForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <h2>Piese audio</h2>
        <p className={styles.summary}>
          {piese.length} piese, dintre care {active} active
        </p>

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
    </div>
  );
}