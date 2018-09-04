import React from "react";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./SidebarComponent";
import Work from "./WorkComponent";
import Blog from "./BlogComponent";
import Contact from "./ContactComponent";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <div className="main">
          <Switch>
            <Route path="/home" component={() => <Home />} />
            <Route path="/work" component={() => <Work />} />
            <Route path="/blog" component={() => <Blog />} />
            <Route path="/contact" component={() => <Contact />} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
