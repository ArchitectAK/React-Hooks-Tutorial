import "./App.css";
// import ClassUpdateTitle from "./componets/ClassUpdateTitle";
// import HookUpdateTile from "./componets/HookUpdateTitle";
import HookFetch from "./componets/HookFetchRepos";
import FetchSingleRepo from "./componets/HookFetchSingleRepo";

function App() {
  return (
    <div className="App">
      <FetchSingleRepo />
    </div>
  );
}

export default App;
