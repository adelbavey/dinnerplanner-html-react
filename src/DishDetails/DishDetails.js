import React, { Component } from "react";
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import modelInstance from "../data/DinnerModel";
import "./DishDetails.css";
import DishItem from "../DishItem/DishItem";
import Sidebar from "../Sidebar/Sidebar";

class DishDetails extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
    this.state = {
      status: "LOADING",
    };
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount() {
    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance
      .getDish(modelInstance.getCurrentDish().id)
      .then(dish => {
        this.setState({
          status: "LOADED",
          dish: dish
        });
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });
  }

  render() {
    let dishDetails = null;
    console.log(this.state.dish);

    
    

    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case "LOADING":
        dishDetails = <em>Loading...</em>;
        break;
      case "LOADED":
        dishDetails = 
        <div>
          <DishItem dish ={this.state.dish}></DishItem>

          <br></br>
          <div class="dish-ingredients">
          {this.state.dish.extendedIngredients.map(ingredient=>(
            <div>{ingredient.name}</div>
          ))}
          </div>
          

          </div>
        break;
      default:
        dishDetails = <b>Failed to load data, please try again</b>;
        break;
    }

    return (
      <div className="DishDetails">
        <Sidebar model={this.props.model} />
        {dishDetails}

      </div>
    );
  }
}

export default DishDetails;
