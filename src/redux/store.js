import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  istate: "",
  zipcode: 0,
  listings: [],
  imageurl: "",
  mortgage: 0,
  rent: 0
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_ISTATE = "UPDATE_ISTATE";
export const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
export const RESET_FIELDS = "RESET_FIELDS";
export const UPDATE_LISTINGS = "UPDATE_LISTINGS";
export const UPDATE_IMAGEURL = "UPDATE_IMAGEURL";
export const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
export const UPDATE_RENT = "UPDATE_RENT";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload };
    case UPDATE_ADDRESS:
      return { ...state, address: payload };
    case UPDATE_CITY:
      return { ...state, city: payload };
    case UPDATE_ISTATE:
      return { ...state, istate: payload };
    case UPDATE_ZIPCODE:
      return { ...state, zipcode: payload };
    case RESET_FIELDS:
      return {
        ...state,
        name: "",
        address: "",
        city: "",
        istate: "",
        zipcode: 0
      };
    case UPDATE_LISTINGS:
      return { ...state, listings: payload };
    case UPDATE_IMAGEURL:
      return { ...state, imageurl: payload };
    case UPDATE_MORTGAGE:
      return { ...state, mortgage: payload };
    case UPDATE_RENT:
      return { ...state, rent: payload };
    default:
      return state;
  }
}

export default createStore(reducer);
