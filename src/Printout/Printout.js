import React, { Component } from "react";
import { Link } from "react-router-dom";
import modelInstance from "../data/DinnerModel";
import DishItem from "../DishItem/DishItem";
import "./Printout.css";

class Printout extends Component {
  render() {
    return (
      <div className="container-fluid Printout">
        <Link to="/search">
          <button>back to edit</button>
        </Link>
        {modelInstance.getMenu().map(dish => (
        <div className="row">
            <div>
              <DishItem key={dish.id} dish={dish}></DishItem>    
            </div>
          <div class="col">
              <div className="Preperation">
                <h2>Preperation</h2>
          </div>
          <div className="col">
                <div className="intructions">
                {dish.instructions}
                </div>
          </div>
          </div>
              
            </div>
          ))}
      </div>
    );
  }
}

export default Printout;
