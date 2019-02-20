import React, { Component } from "react";
import { Link } from "react-router-dom";
import modelInstance from "../data/DinnerModel";
import "./Overview.css";
import DishItem from "../DishItem/DishItem";

class Overview extends Component {
  render() {
    return (
      <div className="Overview">
        <p>Overview</p>

        <Link to="/search">
          <button>back to edit</button>
        </Link>

        {modelInstance.getMenu().map(dish => (
            <DishItem key={dish.id} dish={dish}></DishItem>
          ))}

        <Link to="/printout">
          <button>Print Receipt</button>
        </Link>
      </div>
    );
  }
}

export default Overview;
