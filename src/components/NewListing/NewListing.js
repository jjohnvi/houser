import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import store, { UPDATE_MORTGAGE, UPDATE_RENT } from "../../redux/store";

class NewListing extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    };
  }

  handleMortgage = e => {
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: e.target.value
    });
  };

  handleRent = e => {
    store.dispatch({
      type: UPDATE_RENT,
      payload: e.target.value
    });
  };

  render() {
    const reduxState = store.getState();
    return (
      <div>
        <h3>Monthly Mortgage Amount</h3>
        <input onChange={this.handleMortgage} value={reduxState.mortgage} />
        <h3>Desired Monthly Rent</h3>
        <input onChange={this.handleRent} value={reduxState.rent} />
      </div>
    );
  }
}

export default NewListing;
