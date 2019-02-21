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
    if(!modelInstance.getCurrentDish()){
      window.location.href ="/search"
    }
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
        //we set the price of each ingredient to 1. this would otherwise be calculated if price was defined
        this.dishPrice = dish.extendedIngredients.length;
        
        this.setState({
          status: "LOADED",
          dish: dish,
          numberOfGuests: modelInstance.getNumberOfGuests()
        });

        modelInstance.addObserver(this);
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });
  }

  update(){
    this.setState(
      {numberOfGuests: modelInstance.getNumberOfGuests()}
    );
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
        <div>
          
        </div>
        <div className="row">
        <div className="col">
        <div>
          <DishItem dish ={this.state.dish}></DishItem>
        </div>
            {this.state.dish.instructions}
          </div>

          

          <br></br>
          
            
            
          
          
          <div className="dish-ingredients col table">
          {console.log(this.state.dish.extendedIngredients)}
        <div className="d-flex justify-content-between">
        <Link to="/search">
          <button>back to edit</button>
        </Link>
          <button onClick={()=>modelInstance.addToMenu(this.state.dish)}>add to menu</button>
          </div> 
          <table><tbody><th>name</th><th>quantity</th><th>unit</th><th>price</th>
          {this.state.dish.extendedIngredients.map((ingredient,i)=>(
            <tr key={i}>
              <td>{ingredient.name}</td>
              <td>{ingredient.unit}</td>
              <td>{ingredient.amount}</td>
              <td>{this.state.numberOfGuests}</td>
            </tr>
          ))}
          </tbody>
          </table>
          total cost: {this.dishPrice*this.state.numberOfGuests} SEK
          </div>

            {console.log(this.state)}

            </div>



        </div>
        break;
      default:
      dishDetails = <b>Failed to load data, please try again</b>;
        break;
    }
    
    return (
      <div className="container DishDetails">
      <div className="row">
      <div className="col-sm-12 col-md-3">
      <Sidebar model={this.props.model} />
      </div>
      <div className="col-9">
        {dishDetails}
      </div>
      </div>

        <br></br>

      </div>
    );
  }
}

export default DishDetails;
