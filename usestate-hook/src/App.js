import "./App.css";
// import ClassState from "./components/ClassState";
import Hookstate from "./components/HookState";
import HookStateObject from "./components/HookStateObject";
import StateWithArray from "./components/HookStateArray";

function App() {
  return (
    <div className="App">
      {/* <ClassState /> */}
      <Hookstate />
      <HookStateObject />
      <StateWithArray />
    </div>
  );
}

export default App;
