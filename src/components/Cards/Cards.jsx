import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('cards.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    return (
        <div className=" w-[80%]">
            <div className="grid grid-cols-3 gap-6">{
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }</div>
        </div>
    );
};

export default Cards;