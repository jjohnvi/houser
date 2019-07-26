import React, { Component } from "react";
import axios from "axios";
import House from "../House/House";
import { Link } from "react-router-dom";
import store, { UPDATE_LISTINGS } from "../../redux/store";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      listings: reduxState.listings
    };
  }

  compondentDidMount() {
    this.getHouses();
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        listings: reduxState.listings
      });
    });
  }

  getHouses = () => {
    axios
      .get("/api/houses")
      .then(res =>
        store.dispatch({
          type: UPDATE_LISTINGS,
          payload: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    const listingsDisplay = this.state.listings.map((val, index) => {
      return (
        <>
          <div>
            <p>Address: {val.name}</p>
            <p>{val.address}</p>
            <p>{val.istate}</p>
            <p>{val.zipcode}</p>
            <button
              onClick={() => {
                this.handleDelete(val.id);
              }}
            >
              Delete
            </button>
          </div>
        </>
      );
    });
    return (
      <>
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        <nav className="nav">{listingsDisplay}</nav>
        <House />
      </>
    );
  }
}

export default Dashboard;
