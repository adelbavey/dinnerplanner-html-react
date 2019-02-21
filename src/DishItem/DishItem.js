import React, { Component } from "react";
import { Link } from "react-router-dom";
import modelInstance from "../data/DinnerModel";
import "./DishItem.css";

class DishItem extends Component {
  render() {
    let imgsrc = this.props.dish.image.includes("http") ? this.props.dish.image : `https://www.spoonacular.com/recipeImages/${this.props.dish.image}`;
    let title = this.props.dish.title.slice(0,15);

    return (
      <div className="DishItem">
        <Link to={"/details"} onClick={()=>{
          console.log("clicked item")
          modelInstance.setCurrentDish(this.props.dish);
        }}>
        <img src={imgsrc} height="150px" width="150px" alt="DishImage"></img>
        <p>{title}</p>
        </Link>
      </div>
    );
  }
}
export default DishItem;
