import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import store, {
  UPDATE_NAME,
  UPDATE_ADDRESS,
  UPDATE_ISTATE,
  UPDATE_ZIPCODE,
  RESET_FIELDS
} from "../../redux/store";

class Wizard extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      istate: reduxState.istate,
      zipcode: reduxState.zipcode
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        istate: reduxState.istate,
        zipcode: reduxState.zipcode
      });
    });
  }

  handleName = e => {
    store.dispatch({
      type: UPDATE_NAME,
      payload: e.target.value
    });
  };

  handleAddress = e => {
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: e.target.value
    });
  };

  handleState = e => {
    store.dispatch({
      type: UPDATE_ISTATE,
      payload: e.target.value
    });
  };

  handleZip = e => {
    store.dispatch({
      type: UPDATE_ZIPCODE,
      payload: e.target.value
    });
  };

  handleAdd = () => {
    const reduxState = store.getState();
    axios
      .post("/api/houses", {
        name: reduxState.name,
        address: reduxState.address,
        istate: reduxState.istate,
        zipcode: reduxState.zipcode
      })
      .then(
        store.dispatch({
          type: RESET_FIELDS
        })
      );
  };

  handleCancel = () => {
    const reduxState = store.getState();
  };

  render() {
    const reduxState = store.getState();
    return (
      <>
        <h3>
          Name:
          <input
            type="text"
            onChange={this.handleName}
            value={reduxState.name}
          />
        </h3>
        <h3>
          Address:
          <input
            type="text"
            onChange={this.handleAddress}
            value={reduxState.address}
          />
        </h3>
        <h3>
          State:
          <input
            type="text"
            onChange={this.handleState}
            value={reduxState.istate}
          />
        </h3>
        <h3>
          Zipcode:
          <input
            type="text"
            onChange={this.handleZip}
            value={reduxState.zipcode}
          />
        </h3>
        <button onClick={this.handleAdd}>Add House</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </>
    );
  }
}

export default Wizard;
