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
    <div className="bg-white rounded-md text-left p-5">
      <div className=" ">
        <img className="h-48 w-full rounded-xl " src={props.picture} alt="" />
      </div>
      <div className="mt-5 text-xl">
        <h2 className="text-2xl font-bold">{props.title}</h2>
        <p className="text-gray-400 my-5">{props.details}</p>
        <p className="my-2">For Age: {props.age}</p>
        <p className="my-2">Time required : {props.time}s</p>
        <button className="text-white bg-blue-600 my-5 py-4 px-28 rounded-md">
          {props.button}
        </button>
      </div>
    </div>
  );
}

export default Cards;
