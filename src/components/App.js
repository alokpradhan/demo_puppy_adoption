import React from "react";
import "./App.css";
import JumbotronFluid from "./elements/JumbotronFluid";
import PuppyListContainer from "../containers/PuppyListContainers";
import CreatePuppyContainer from "../containers/CreatePuppyContainer";

function App() {
  return (
    <div className="App">
      <JumbotronFluid heading="Pug life" lead="Our puppies are full of love!" />
      <PuppyListContainer />
      <CreatePuppyContainer />
    </div>
  );
}

export default App;
