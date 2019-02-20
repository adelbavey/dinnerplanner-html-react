import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dishes from "../Dishes/Dishes";
import "./SelectDish.css";

class SelectDish extends Component {
  render() {
    return (
      <div className="SelectDish">

        {/* We pass the model as property to the Sidebar component */}
        <div className="container-fluid">
          <div className="row">
          <div className="col-sm-12 col-md-3">
            <Sidebar model={this.props.model} />
          </div>
          <div className="col-9 container">
            <Dishes />
          </div>
          </div>
      </div>
      </div>
    );
  }
}

export default SelectDish;
