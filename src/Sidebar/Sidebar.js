import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import modelInstance from "../data/DinnerModel";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests(),
      menu: this.props.model.getMenu()
    };
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    this.props.model.addObserver(this);
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this);
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests(),
      menu: this.props.model.getMenu()
    });
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = e => {
    this.props.model.setNumberOfGuests(e.target.value);
  };

  render() {
    
    return (

          <div className="Sidebar">
            <p>
              People:
              <input
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.onNumberOfGuestsChanged}
                />
              <br />
              Total number of guests: {this.state.numberOfGuests}
            </p>

            {this.state.menu.map(dish => (
              <p key={dish.id}>{dish.title} {modelInstance.getDishPrice(dish)*this.state.numberOfGuests} SEK</p>
              ))}
            <p>Cost: {modelInstance.getMenuPrice()*this.state.numberOfGuests} SEK</p>
            <Link to="/overview">
              <button>Checkout</button>
            </Link>
            </div>
    );
  }
}

export default Sidebar;
