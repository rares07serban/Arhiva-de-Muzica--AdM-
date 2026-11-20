import { Link } from "react-router-dom";
import styles from "./PiesaCard.module.css";

export default function PiesaCard({ piesa, onToggle, onDelete }) {
  const clasaGen = piesa.genre ? piesa.genre.toLowerCase() : "rock";

  return (
    <li
      className={piesa.done ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={piesa.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={piesa.done}
          onChange={() => onToggle(piesa.id)}
          aria-label={`Marchează ${piesa.title}`}
          data-testid="item-toggle"
        />
        <div>
          <div className={styles.titleRow}>
            <Link
              to={`/piese/${piesa.id}`}
              className={styles.title}
              data-testid="item-link"
            >
              {piesa.title}
            </Link>
            <span
              className={
                piesa.isFavorite ? styles.favorite : styles.notFavorite
              }
              aria-label={
                piesa.isFavorite ? "Piesă favorită" : "Piesă nefavorită"
              }
            >
              {piesa.isFavorite ? "★" : "☆"}
            </span>
          </div>
          <div className={styles.meta}>
            <span className={`badge badge-${clasaGen}`}>{piesa.genre}</span>
            {piesa.audioFormat && (
              <span className={styles.format}>{piesa.audioFormat}</span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <span className={styles.status}>
          {piesa.done ? "Finalizată" : "Activ"}
        </span>
        <button
          className="btn-danger"
          onClick={() => onDelete(piesa.id)}
          aria-label={`Șterge ${piesa.title}`}
          data-testid="item-delete"
        >
          Șterge
        </button>
      </div>
    </li>
  );
}