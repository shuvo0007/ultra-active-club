import React from "react";

const activity = () => {
  return (
    <div className="bg-white h-full text-left text-2xl p-5">
      <div>
        <img src="" alt="" />
        <h2>Md. Samiul Islam Shuvo</h2>
        <p> Dhanmondi, Dhaka</p>
      </div>

      <div>
        <div>
          <p>65kg</p>
          <p>Weight</p>
        </div>
        <div>
          <p>5.7</p>
          <p>height</p>
        </div>
        <div>
          <p>27yrs</p>
          <p>Age</p>
        </div>
      </div>

      <p>Add A Break</p>

      <div>
        <button>10s</button>
        <button>20s</button>
        <button>30s</button>
        <button>40s</button>
        <button>50s</button>
      </div>

      <p>Exercise Details</p>

      <p className="">
        Exercise time
        <span className="text-gray-400 float-right">second</span>
      </p>

      <div className="w-full text-center">
        <button className="text-white bg-blue-600 my-5 py-4 w-full rounded-md">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default activity;
