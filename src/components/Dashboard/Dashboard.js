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
      listings: reduxState.listings,
      house: []
    };

    this.getHouses = this.getHouses.bind(this);
  }

  componentDidMount() {
    this.getHouses();
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        listings: reduxState.listings
      });
    });
  }

  getParams = () => {
    axios
      .get(`http://localhost:4000/api/houses?id=${this.props.match.params.id}`)
      .then(res => {
        this.setState({ house: res.data });
      });
  };

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

  handleDelete = id => {
    axios.delete(`/api/houses/${id}`).then(res => {
      store.dispatch({
        type: UPDATE_LISTINGS,
        payload: res.data
      });
    });
  };

  render() {
    console.log(this.state.listings);
    const reduxState = store.getState();
    console.log(reduxState.listings);
    const listingsDisplay = this.state.listings.map((val, index) => {
      return (
        <>
          <div>
            <p>{val.name}</p>
            <p>{val.address}</p>
            <p>{val.city}</p>
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
    console.log(this.state.listings);
    return (
      <>
        <div>
          <Link to="/wizard">
            <button>Add New Property</button>
          </Link>
          <nav className="nav">{listingsDisplay}</nav>
          <House />
        </div>
      </>
    );
  }
}

export default Dashboard;
