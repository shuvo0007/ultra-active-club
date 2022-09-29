import "./App.css";
import Cards from "./components/selection-cards/Cards";
import Activity from "./components/activity/Activity";
import Bar from "./components/bar/Bar";
import Blog from "./components/blog/blog";

function App() {
  return (
    <div className="App">
      <div className="md:flex">
        <div className="md:w-3/5 md:my-40 md:mx-36 ">
          <Bar></Bar>
          <div className="md:w-auto flex justify-center ">
            <Cards></Cards>
          </div>
          <div className="p-5">
            <Blog></Blog>
          </div>
        </div>
        <div className="md:w-1/4">
          <Activity></Activity>
        </div>
      </div>
    </div>
  );
}

export default App;
