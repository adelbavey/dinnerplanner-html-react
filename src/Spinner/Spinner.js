import React, { Component } from "react";

class Spinner extends Component{
  render(){
    return(
      <div className="loadingSpinner">
        <img src="spinner.gif"></img>
      </div>
    )
  }
}
export default Spinner