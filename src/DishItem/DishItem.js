import React, { Component } from "react";
import { Link } from "react-router-dom";
import modelInstance from "../data/DinnerModel";
import "./DishItem.css";

class DishItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="DishItem">

        <Link to={"/details"} onClick={()=>{
          console.log("clicked item")
          modelInstance.setCurrentDish(this.props.dish);
        }}>
        <img src="https://via.placeholder.com/150"></img>
        <div>{this.props.dish.title}</div>
        </Link>

      </div>
    );
  }
}

export default DishItem;
