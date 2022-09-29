import React from "react";

const blog = () => {
  return (
    <div className="md:text-3xl w-full ">
      <h2 className="md:text-4xl sm:text-3xl font-bold text-blue-500 md:m-5 md:text-center text-left ">Blog Question</h2>
      <hr />
      <ol className="text-left mt-5">
        <li className="font-bold ">1. How does react works?
          <p className="pl-8 font-normal text-gray-500 text-justify"><span className="text-green-500">Ans:</span> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
        </li>
        <li className="font-bold">2. Difference between props and states?
          <p className="pl-8 font-normal text-gray-500 text-justify"><span className="text-green-500">Ans:</span> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
        </li>
        <li className="font-bold">3. How useEffect is used other than loading data?
          <p className="pl-8 font-normal text-gray-500 text-justify"><span className="text-green-500">Ans:</span> Fetching data. Reading from local storage. Registering and deregistering event listeners.</p>
        </li>
      </ol>
    </div>
  );
};

export default blog;
