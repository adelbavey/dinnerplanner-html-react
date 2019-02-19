import React, { Component } from "react";
import "./DishItem.css";

class DishItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="DishItem">

        <img src="https://via.placeholder.com/150"></img>
        <div>{this.props.title}</div>

      </div>
    );
  }
}

export default DishItem;
