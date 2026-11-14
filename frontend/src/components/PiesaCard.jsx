export default function PiesaCard({ piesa, onToggle, onDelete }) {
  const clasaGen = piesa.genre ? piesa.genre.toLowerCase() : "rock";

  return (
    <li
      className={piesa.done ? "item-card done" : "item-card"}
      data-testid="item"
      data-id={piesa.id}
    >
      <div className="item-main">
        <label className="item-title-row">
          <input
            type="checkbox"
            checked={piesa.done}
            onChange={() => onToggle(piesa.id)}
            data-testid="item-toggle"
          />
          <h3 data-testid="item-title">{piesa.title}</h3>
          <span
            className={piesa.isFavorite ? "favorite" : "favorite not-favorite"}
            aria-label={piesa.isFavorite ? "Piesă favorită" : "Piesă nefavorită"}
          >
            {piesa.isFavorite ? "★" : "☆"}
          </span>
        </label>
        <div className="item-meta">
          <span className={`badge badge-${clasaGen}`}>{piesa.genre}</span>
          {piesa.audioFormat && (
            <span className="format">{piesa.audioFormat}</span>
          )}
        </div>
      </div>
      <div>
        <span className="status">{piesa.done ? "Finalizată" : "Activ"}</span>
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