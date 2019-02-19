import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Overview.css";

class Overview extends Component {
  render() {
    return (
      <div className="Overview">
        <p>Overview</p>

        <Link to="/printout">
          <button>Print Receipt</button>
        </Link>
      </div>
    );
  }
}

export default Overview;
