import Card from "./Card";
const CardContainer = ({ operatorArray, handleCardClick }) => {
  const cards = operatorArray.map((operator) => (
    <Card
      key={operator.id}
      operator={operator}
      handleCardClick={handleCardClick}
    />
  ));
  return <div className="card-container">{cards}</div>;
};
export default CardContainer;
