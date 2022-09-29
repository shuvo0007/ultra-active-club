import "./App.css";
import Cards from "./components/selection-cards/Cards";
import Activity from "./components/activity/Activity";
import Bar from "./components/bar/Bar";
import Blog from "./components/blog/blog";

function App() {
  return (
    <div className="App">
      <div className="sm:flex">
        <div className="sm:w-3/5 sm:my-40 sm:mx-36 ">
          <Bar></Bar>
          <div className=" w-auto">
            <Cards></Cards>
          </div>
          <div className="p-5">
            <Blog></Blog>
          </div>
        </div>
        <div className="w-1/4">
          <Activity></Activity>
        </div>
      </div>
    </div>
  );
}

export default App;
