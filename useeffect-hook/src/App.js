import "./App.css";
// import ClassUpdateTitle from "./componets/ClassUpdateTitle";
// import HookUpdateTile from "./componets/HookUpdateTitle";
// import HookFetch from "./componets/HookFetchRepos";
import HookFetchSingleRepo from "./componets/HookFetchSingleRepo";

function App() {
  return (
    <div className="App">
      <HookFetchSingleRepo />
    </div>
  );
}

export default App;
