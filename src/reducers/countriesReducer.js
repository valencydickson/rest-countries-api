import {
  FETCH_COUNTRIES,
  FETCH_COUNTRY,
  FILTER_COUNTRIES,
  SELECT_COUNTRY,
} from "../actions/types";

const countriesReducers = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { [action.payload]: action.payload };

    case FETCH_COUNTRY:
      return { [action.payload]: action.payload };

    case FILTER_COUNTRIES:
      return { [action.payload]: action.payload };

    case SELECT_COUNTRY:
      return { [action.payload]: action.payload };

    default:
      return state;
  }
};

export default countriesReducers;
