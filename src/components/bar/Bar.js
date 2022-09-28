import React from "react";

const bar = () => {
  return (
    <div className="text-left">
      <div className="flex items-center">
        <div className="w-10 m-5">
          <img src="muscle.png" alt="" />
        </div>
        <h1 className="text-4xl text-blue-600">Fitness GYM</h1>
      </div>
      <div>
        <h2 className="text-3xl font-bold m-5">Select today’s exercise</h2>
      </div>
    </div>
  );
};

export default bar;
