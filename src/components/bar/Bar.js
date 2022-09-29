import React from "react";

const bar = () => {
  return (
    <div className="text-left">
      <div className="flex items-center">
        <div className="w-10 m-5">
          <img src="muscle.png" alt="" />
        </div>
        <h1 className="md:text-4xl text-3xl text-blue-600">Fitness GYM</h1>
      </div>
      <div>
        <h2 className="md:text-3xl text-2xl font-bold md:m-5 mx-5">Select today’s exercise</h2>
      </div>
    </div>
  );
};

export default bar;
