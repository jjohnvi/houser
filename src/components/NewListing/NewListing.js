import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import store, {
  UPDATE_MORTGAGE,
  UPDATE_RENT,
  RESET_FIELDS
} from "../../redux/store";

class NewListing extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        mortgage: reduxState.mortgage,
        rent: reduxState.rent
      });
    });
  }

  handleMortgage = e => {
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: e.target.value
    });
  };

  handleAdd = () => {
    const reduxState = store.getState();
    console.log(reduxState);
    axios
      .post("/api/houses", {
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        istate: reduxState.istate,
        zipcode: reduxState.zipcode,
        image: reduxState.imageurl,
        monthly_mortgage: reduxState.mortgage,
        desired_rent: reduxState.rent
      })
      .then(
        store.dispatch({
          type: RESET_FIELDS
        })
      );
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
        <div>
          <Link to="/wizard2">Previous</Link>
          <Link to="/" onClick={this.handleAdd}>
            Complete
          </Link>
        </div>
      </div>
    );
  }
}

export default NewListing;
