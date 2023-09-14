import { useEffect } from "react";
import { useState } from "react";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('cards.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    return (
        <>
            
        </>
    );
};

export default Cards;