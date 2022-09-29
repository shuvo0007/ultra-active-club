import React, { useEffect, useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="md:grid md:grid-cols-3 md:gap-5 md:p-5 sm:w-screen md:w-full md:pl-10 md:pt-5 w-96">
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

let totalTime = 0;

function Card(props) {
  return (
    <div className="bg-white rounded-md text-left p-5 mb-5">
      <div className="">
        <img
          className="md:h-48 w-full rounded-xl "
          src={props.picture}
          alt=""
        />
      </div>
      <div className="mt-5 md:text-xl">
        <h2 className="md:text-2xl sm:text-2xl text-xl font-bold">
          {props.title}
        </h2>
        <p className="text-gray-400 my-5">{props.details}</p>
        <p className="my-2">For Age: {props.age}</p>
        <p className="my-2">Time required : {props.time}s</p>
        <div className="w-full text-center">
          <button
            onClick={() => TimeCalculation(props.time)}
            className="text-white bg-blue-600 my-5 py-4 w-full rounded-md hover:bg-green-600"
          >
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
}

function TimeCalculation(props) {
  totalTime = totalTime + props;
  const exerciseTimeDiv = document.getElementById("exerciseTime");
  exerciseTimeDiv.innerHTML = `${totalTime}`;
}

export default Cards;
