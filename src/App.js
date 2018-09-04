import React from "react";
//import ComingSoon from "./components/ComingSoon/ComingSoonComponent"
import "./css/App.scss";
import { HashRouter } from "react-router-dom";
import Main from "./components/MainComponent";

const App = () => {
  return (
    <HashRouter>
      <div className="container black">
        {/*<ComingSoon />*/}
        <Main />
      </div>
    </HashRouter>
  );
};
export default App;
