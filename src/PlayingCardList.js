import React from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hooks";
import { formatCard } from "./helpers";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  //
  //
  // const [cards, setCards] = useState([]);
  // const addCard = async () => {
  //   const response = await axios.get(
  //     "https://deckofcardsapi.com/api/deck/new/draw/"
  //   );
  //   console.log(response.data);
  //   setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
  // };
  //
  const [cards, addCard, reset] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/",
    formatCard
  );
  //
  //------------------------------------------
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={() => addCard()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
