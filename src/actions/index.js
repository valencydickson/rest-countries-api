import countriesApi from "../api/countriesApi";
import {
  FETCH_COUNTRIES,
  FETCH_COUNTRY,
  FILTER_COUNTRIES,
  SELECT_COUNTRY,
  DARK_MODE,
} from "./types";

import history from "../components/history";

export const fetchCountries = () => async (dispatch) => {
  const response = await countriesApi.get("/all");

  dispatch({
    type: FETCH_COUNTRIES,
    payload: response.data,
  });
};

export const fetchCountry = (name) => async (dispatch) => {
  const response = await countriesApi.get(`/name/${name}`);

  dispatch({
    type: FETCH_COUNTRY,
    payload: response.data,
  });
};

export const filterCountries = (region) => async (dispatch) => {
  const response = await countriesApi.get(`/region/${region}`);

  dispatch({
    type: FILTER_COUNTRIES,
    payload: response.data,
  });
};

export const selectCountry = (name) => async (dispatch) => {
  const response = await countriesApi.get(`/name/${name}`);

  dispatch({
    type: SELECT_COUNTRY,
    payload: response.data,
  });

  history.push(`/name/${name}`);
};

export const setDarkMode = (status) => {
  return {
    type: DARK_MODE,
    payload: !status,
  };
};
