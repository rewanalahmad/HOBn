import "./Card.css";

type Props = {
  name: string;
  description: string;
  category: string;
  status: "Live" | "Coming Soon";
  onClick?: () => void;
};

function Card({ name, description, category, status, onClick }: Props) {
  return (
    <div className="card" onClick={onClick}>
      <h3 className="card-title">{name}</h3>

      <p className="card-desc">{description}</p>

      <span className="card-category">{category}</span>

      <span
        className={`card-status ${
          status === "Live" ? "live" : "coming"
        }`}
      >
        {status}
      </span>

      <div className="card-button">
        <button>Open</button>
      </div>
    </div>
  );
}

export default Card;