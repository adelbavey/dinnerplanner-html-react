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
        <div className="container-fluid">
          {modelInstance.menu.map(dish => (
        <div className="row">
        
          <div className="col ">
             <DishItem key={dish.id} dish={dish}></DishItem>    
          </div>
          <div className="Preperation col">
            <h2>Preperation</h2>
              {dish.instructions}
          </div>
            
          </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Printout;
