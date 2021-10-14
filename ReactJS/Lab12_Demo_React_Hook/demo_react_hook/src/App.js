import "./App.css";
import ChildComponent from "./Components/ChildComponent";
import Demo1 from "./Components/Demo1";
import Demo2 from "./Components/Demo2";
import Demo3 from "./Components/Demo3";
import DemoUseMemo from "./Components/DemoUseMemo";
import DemoUseReducer from "./Components/DemoUseReducer";
import DemoUseReducerNew from "./Components/DemoUseReducerNew";
import GrandParentComponent from "./Components/GrandParentComponent";
import ParentComponent from "./Components/ParentComponent";

function App() {
  return (
    <div className="App">
      {/* <Demo2 /> */}
      {/* <Demo1 /> */}
      {/* <Demo3 /> */}
      {/* <GrandParentComponent /> */}
      {/* <DemoUseMemo /> */}
      {/* <ParentComponent /> */}
      {/* <DemoUseReducer /> */}
      <DemoUseReducerNew />
    </div>
  );
}

export default App;
