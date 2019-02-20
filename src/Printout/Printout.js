import React, { Component } from "react";
import { Link } from "react-router-dom";
import modelInstance from "../data/DinnerModel";
import DishItem from "../DishItem/DishItem";
import "./Printout.css";

class Printout extends Component {
  render() {
    return (
      <div className="Printout">
        <Link to="/search">
          <button>back to edit</button>
        </Link>
<<<<<<< HEAD
        {modelInstance.menu.map(dish => (
            <div>
              <DishItem key={dish.id} dish={dish}></DishItem>    
              <div className="Preperation">
                <h2>Preperation</h2>
                {dish.instructions}
              </div>
            </div>
=======

        {modelInstance.getMenu().map(dish => (
            <DishItem key={dish.id} dish={dish}></DishItem>
>>>>>>> e277cbc5a310bbc9a76cac3d2f44b2def188ba53
          ))}
      </div>
    );
  }
}

export default Printout;
