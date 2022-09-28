import "./App.css";
import Cards from "./components/selection-cards/Cards";
import Activity from "./components/activity/Activity";
import Bar from "./components/bar/Bar";

function App() {
  return (
    <div className="App">
      <div className="flex ">
        <div className="w-3/5 my-40 mx-36">
          <Bar></Bar>
          <div className="">
            <Cards></Cards>
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
