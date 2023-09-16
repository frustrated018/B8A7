import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({handlSelect}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("cards.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);


  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card key={card.id} card={card} handlSelect={handlSelect}></Card>
        ))}
      </div>
    </div>
  );
};
Cards.propTypes = {
    handlSelect : PropTypes.func.isRequired,
    
  };

export default Cards;
