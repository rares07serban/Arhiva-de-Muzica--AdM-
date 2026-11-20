import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPiesa } from "../api.js";
import styles from "./PiesaDetaliuPage.module.css";

export default function PiesaDetaliuPage() {
  const { id } = useParams();
  const [piesa, setPiesa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchPiesa(id)
      .then((data) => {
        if (!ignore) {
          setPiesa(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă detaliile piesei...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Piesa nu a putut fi încărcată: {error}
        </p>
        <Link to="/">Înapoi la listă</Link>
      </section>
    );
  }

  const clasaGen = piesa.genre ? piesa.genre.toLowerCase() : "rock";

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        ← Înapoi la listă
      </Link>
      <h2
        className={piesa.done ? styles.done : undefined}
        data-testid="detail-title"
      >
        {piesa.title}
      </h2>
      <dl className={styles.fields}>
        <dt>Gen muzical</dt>
        <dd>
          <span className={`badge badge-${clasaGen}`}>{piesa.genre}</span>
        </dd>
        <dt>Format audio</dt>
        <dd>{piesa.audioFormat || "Nespecificat"}</dd>
        <dt>Categorie</dt>
        <dd>{piesa.category || "Uploads"}</dd>
        <dt>Creator</dt>
        <dd>{piesa.user || "Creator demo"}</dd>
        <dt>Favorită</dt>
        <dd>{piesa.isFavorite ? "Da (★)" : "Nu"}</dd>
        <dt>Status</dt>
        <dd>{piesa.done ? "Finalizată" : "Activ"}</dd>
        <dt>ID</dt>
        <dd>{piesa.id}</dd>
      </dl>
    </section>
  );
}