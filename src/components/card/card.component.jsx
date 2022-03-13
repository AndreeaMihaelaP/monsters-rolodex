import "./card.styles.css";

const Card = ({ monster: { id, name, email } }) => (
  <div key={id} className="card-container">
    <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
