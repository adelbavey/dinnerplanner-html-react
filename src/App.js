import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import modelInstance from "./data/DinnerModel";
import SelectDish from "./SelectDish/SelectDish";
import DishDetails from "./DishDetails/DishDetails"
import Overview from "./Overview/Overview"
import "./App.css";
import Printout from "./Printout/Printout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Dinner Planner"
    };
  }

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>

          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={Welcome} />
          <Route
            path="/search"
            render={() => <SelectDish model={modelInstance} />}
            />
          <Route
            path="/details"
            render={() => <DishDetails model={modelInstance} />}
            />
          <Route
            path="/overview"
            render={() => <Overview model={modelInstance} />}
            />
          <Route
            path="/printout"
            render={() => <Printout model={modelInstance} />}
            />
        </header>
      </div>
      
    );
  }
}

export default App;
