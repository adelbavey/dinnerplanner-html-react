import React, { Component } from "react";
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import modelInstance from "../data/DinnerModel";
import "./DishDetails.css";
import DishItem from "../DishItem/DishItem";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner"

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
        dishDetails = <Spinner/>;
        break;
      case "LOADED":
        dishDetails = 
        
        
        
        <div className="container">
        <div className="row">
        <div className="col">
          <DishItem dish ={this.state.dish}></DishItem>
          </div>

          

          <br></br>
          <div className="col">
            <h2>Preperation</h2>
            {this.state.dish.instructions}
          </div>

          <div className="dish-ingredients col table">
          {console.log(this.state.dish.extendedIngredients)}
          <table><tbody><th>name</th><th>quantity</th><th>unit</th>
          {this.state.dish.extendedIngredients.map((ingredient,i)=>(
            <tr key={i}>
              <td>{ingredient.name}</td>
              <td>{ingredient.unit}</td>
              <td>{ingredient.amount}</td>
            </tr>
          ))}
          </tbody>
          </table>
          </div>

            {console.log(this.state)}
            <button onClick={()=>modelInstance.addToMenu(this.state.dish)}>add to menu</button>

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

        <br></br>

        <Link to="/search">
          <button>back to edit</button>
        </Link>
      </div>
    );
  }
}

export default DishDetails;
