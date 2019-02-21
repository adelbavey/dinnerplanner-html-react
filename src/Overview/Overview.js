import React, { Component } from "react";
import { Link } from "react-router-dom";
import modelInstance from "../data/DinnerModel";
import "./Overview.css";
import DishItem from "../DishItem/DishItem";

class Overview extends Component {
  render() {
    return (
      <div className="Overview">
        <p>My Dinner {modelInstance.getNumberOfGuests()} People</p>
        
        <Link to="/search">
          <button>back to edit</button>
        </Link>
        <div className="container">
        <div className="row">
        {modelInstance.getMenu().map(dish => (
          <div className="col">
            <DishItem key={dish.id} dish={dish}></DishItem>
            <p>{modelInstance.getDishPrice(dish)*modelInstance.getNumberOfGuests()} SEK</p>
          </div>
          ))}

          </div>
        </div>
        <p>Cost: {modelInstance.getMenuPrice()*modelInstance.getNumberOfGuests()} SEK</p>
        <Link to="/printout">
          <button>Print Receipt</button>
        </Link>
      </div>
    );
  }
}

export default Overview;
