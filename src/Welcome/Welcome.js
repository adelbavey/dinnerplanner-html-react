import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <p>Welcome to the dinner planner!</p>

        <Link to="/search">
          <button className="btn btn-primary btn-sm">Start planning</button>
        </Link>
      </div>
    );
  }
}

export default Welcome;
