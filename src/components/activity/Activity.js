import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

let time = 0;
function BreakTime(totalBreakTime) {
  time = totalBreakTime;
  window.localStorage.setItem("time", time);
  const breakTimeDiv = document.getElementById("breakTimeId");

  breakTimeDiv.innerHTML = `${time}
  `;
}

const activity = () => {
  const notify = () =>
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="bg-white h-full text-left text-2xl p-10">
      <div className="flex mb-5">
        <img src="img.jpg" alt="pro pic" className="w-14 rounded-xl m-2" />
        <div>
          <h2 className="font-bold">Md Samiul Islam</h2>
          <div className="flex">
            <img className="w-8" src="location.png" alt="" />
            <p> Dhanmondi, Dhaka</p>
          </div>
        </div>
      </div>

      <div className="flex my-5 bg-slate-100 rounded-md justify-evenly">
        <div className="m-5">
          <p className="font-bold">65kg</p>
          <p className="text-gray-400">Weight</p>
        </div>
        <div className="m-5">
          <p className="font-bold">5.7</p>
          <p className="text-gray-400">height</p>
        </div>
        <div className="m-5">
          <p className="font-bold">27yrs</p>
          <p className="text-gray-400">Age</p>
        </div>
      </div>

      <p className="font-bold py-5 ">Add A Break</p>

      <div className="bg-slate-100 flex justify-evenly rounded-md my-5">
        <button
          onClick={() => BreakTime(10)}
          className="bg-white rounded-full p-2 my-5 ml-2 hover:bg-blue-600"
        >
          10s
        </button>
        <button
          onClick={() => BreakTime(20)}
          className="bg-white rounded-full p-2 my-5 ml-2 hover:bg-blue-600"
        >
          20s
        </button>
        <button
          onClick={() => BreakTime(30)}
          className="bg-white rounded-full p-2 my-5 ml-2 hover:bg-blue-600"
        >
          30s
        </button>
        <button
          onClick={() => BreakTime(40)}
          className="bg-white rounded-full p-2 my-5 ml-2 hover:bg-blue-600"
        >
          40s
        </button>
        <button
          onClick={() => BreakTime(50)}
          className="bg-white rounded-full p-2 my-5 ml-2 hover:bg-blue-600"
        >
          50s
        </button>
      </div>

      <p className="font-bold py-5">Exercise Details</p>

      <p className="bg-slate-100 p-5 rounded-md my-5">
        <span className="font-bold">Exercise time:</span>
        <span className="text-gray-400 float-right">
          <span id="exerciseTime">0</span> second
        </span>
      </p>
      <p className="bg-slate-100 p-5 rounded-md my-5">
        <span className="font-bold">Break time: </span>
        <span className="text-gray-400 float-right">
          <span id="breakTimeId">{window.localStorage.getItem("time")}</span>{" "}
          second
        </span>
      </p>

      <div className="w-full text-center">
        <button
          className="text-white bg-blue-600 my-5 py-4 w-full rounded-md hover:bg-green-600"
          onClick={notify}
        >
          Activity Completed
        </button>
        <ToastContainer
          theme="colored"
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default activity;
