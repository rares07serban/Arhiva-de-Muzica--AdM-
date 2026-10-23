export default function PiesaCard({ piesa }) {
  const clasaGen = piesa.genre ? piesa.genre.toLowerCase() : "rock";

  return (
    <li className={piesa.done ? "item-card done" : "item-card"}>
      <div className="item-main">
        <div className="item-title-row">
          <h3>{piesa.title}</h3>
          <span
            className={piesa.isFavorite ? "favorite" : "favorite not-favorite"}
            aria-label={piesa.isFavorite ? "Piesă favorită" : "Piesă nefavorită"}
          >
            {piesa.isFavorite ? "★" : "☆"}
          </span>
        </div>
        <div className="item-meta">
          <span className={`badge badge-${clasaGen}`}>{piesa.genre}</span>
          {piesa.audioFormat && (
            <span className="format">{piesa.audioFormat}</span>
          )}
        </div>
      </div>
      <span className="status">{piesa.done ? "Finalizată" : "Activ"}</span>
    </li>
  );
}