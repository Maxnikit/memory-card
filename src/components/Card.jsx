import SVG from "react-inlinesvg";

const Card = ({ operator, handleCardClick }) => {
  return (
    <div className="card operator" onClick={() => handleCardClick(operator)}>
      <SVG
        src={operator.toSVG()}
        className="icon"
        title={operator.name}
        alt={operator.name}
        width={200}
        height="100%"
      />
      <h3 className="operator-name">{operator.name}</h3>
    </div>
  );
};
export default Card;
