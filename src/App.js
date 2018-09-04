import React from "react";
//import ComingSoon from "./components/ComingSoon/ComingSoonComponent"
import "./css/App.scss";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container black">
        {/*<ComingSoon />*/}
        <Main />
      </div>
    </BrowserRouter>
  );
};
export default App;
