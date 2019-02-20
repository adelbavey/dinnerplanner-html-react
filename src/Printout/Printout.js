import React, { Component } from "react";
import { Link } from "react-router-dom";
import modelInstance from "../data/DinnerModel";
import DishItem from "../DishItem/DishItem";
import "./Printout.css";

class Printout extends Component {
  render() {
    return (
      <div className="Printout">
        <p>Printout</p>

        <Link to="/search">
          <button>back to edit</button>
        </Link>

        {modelInstance.getMenu().map(dish => (
            <DishItem key={dish.id} dish={dish}></DishItem>
          ))}
      </div>
    );
  }
}

export default Printout;
