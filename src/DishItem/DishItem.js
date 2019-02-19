import React, { Component } from "react";
import { Link } from "react-router-dom";
import modelInstance from "../data/DinnerModel";
import "./DishItem.css";

class DishItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let imgsrc = this.props.dish.image.includes("http") ? this.props.dish.image : `https://www.spoonacular.com/recipeImages/${this.props.dish.image}`;
    return (
      <div className="DishItem">

        <Link to={"/details"} onClick={()=>{
          console.log("clicked item")
          modelInstance.setCurrentDish(this.props.dish);
        }}>
        <img src={imgsrc} height="150px" width="150px"></img>
        <div>{this.props.dish.title}</div>
        </Link>

      </div>
    );
  }
}

export default DishItem;
