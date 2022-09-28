import React, { useEffect, useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5 p-5 ">
      {cards.map((card) => (
        <Card
          key={card.index}
          title={card.title}
          picture={card.picture}
          age={card.age}
          details={card.details}
          time={card.time}
          button={card.button}
        ></Card>
      ))}
    </div>
  );
};

function Card(props) {
  return (
    <div className="bg-white">
      <div className="w-60">
        <div className="">
          <img src={props.picture} alt="" />
        </div>
        <h2>{props.title}</h2>
        <p>{props.details}</p>
        <p>For Age: {props.age}</p>
        <p>Time required : {props.time}s</p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default Cards;
