import React from "react";

const blog = () => {
  return (
    <div className="sm:text-3xl w-full">
      <h2 className="sm:text-4xl font-bold text-blue-500 m-5 sm:text-center text-left ">Blog Question</h2>
      <hr />
      <ol className="text-left mt-5">
        <li className="font-bold">1. How does react works?
          <p className="pl-8 font-normal text-gray-500 text-justify"><span className="text-green-500">Ans:</span> </p>
        </li>
        <li className="font-bold">2. Difference between props and states?
          <p className="pl-8 font-normal text-gray-500 text-justify"><span className="text-green-500">Ans:</span> </p>
        </li>
        <li className="font-bold">3. How useEffect is used other than loading data?
          <p className="pl-8 font-normal text-gray-500 text-justify"><span className="text-green-500">Ans:</span> </p>
        </li>
      </ol>
    </div>
  );
};

export default blog;
