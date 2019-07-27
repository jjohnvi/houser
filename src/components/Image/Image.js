import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import store, { UPDATE_IMAGEURL } from "../../redux/store";

class Image extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      imageurl: reduxState.imageurl
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        name: reduxState.imageurl
      });
    });
  }

  handleImage = e => {
    store.dispatch({
      type: UPDATE_IMAGEURL,
      payload: e.target.value
    });
  };

  handleCancel = () => {
    this.props.history.push("/");
  };

  render() {
    const reduxState = store.getState();
    return (
      <div>
        <h3>
          Image URL:
          <input
            type="text"
            onChange={this.handleImage}
            value={reduxState.imageurl}
          />
        </h3>
        <div>
          <Link to="/wizard">
            <button>Previous</button>
          </Link>
          <Link to="/wizard3">
            <button>Next</button>
          </Link>
        </div>

        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    );
  }
}

export default Image;
