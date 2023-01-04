import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const Deck = () => {
	const [deckId, setDeckId] = useState("new");
	const [cards, setCards] = useState([]);
	const API = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;

	// When page renders, then it will grab a new deckId
	useEffect(() => {
		try {
			fetch(API)
				.then((res) => res.json())
				.then((data) => setDeckId(data.deck_id));
		} catch (error) {
			throw error;
		}
	}, []);

	async function drawCard() {
		try {
			fetch(API)
				.then((res) => res.json())
				.then((data) => setCards(prevCards => [...prevCards, data.cards[0]]));
		} catch (error) {
			throw error;
		}
	}

    console.log(cards)

	return (
		<div className="card_container">
			<button onClick={drawCard}>Draw Me</button>
			<h2>Cards:</h2>
            <div className="cards--container">
                {
                    cards.map(card => <Card image={card.image} suit={card.suit} value={card.value} key={card.code}/>)
                }
            </div>
		</div>
	);
};

export default Deck;
