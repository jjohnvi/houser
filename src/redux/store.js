import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  istate: "",
  zipcode: 0,
  listings: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_ISTATE = "UPDATE_ISTATE";
export const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
export const RESET_FIELDS = "RESET_FIELDS";
export const UPDATE_LISTINGS = "UPDATE_LISTINGS";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload };
    case UPDATE_ADDRESS:
      return { ...state, address: payload };
    case UPDATE_ISTATE:
      return { ...state, istate: payload };
    case UPDATE_ZIPCODE:
      return { ...state, zipcode: payload };
    case RESET_FIELDS:
      return { ...state, name: "", address: "", istate: "", zipcode: 0 };
    default:
      return state;
  }
}

export default createStore(reducer);
