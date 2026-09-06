import { createSlice } from "@reduxjs/toolkit";

import cars from "../Data/cars";

const initialState = {
  carList: cars,
  favourites: [],
};

const carSlice = createSlice({
  name: "cars",

  initialState,

  reducers: {

    addCar: (state, action) => {
      state.carList.push(action.payload);
    },

    updateCar: (state, action) => {

      const index = state.carList.findIndex(
        (car) => car.id === action.payload.id
      );

      if (index !== -1) {
        state.carList[index] = action.payload;
      }
    },

    deleteCar: (state, action) => {

      state.carList = state.carList.filter(
        (car) => car.id !== action.payload
      );

      state.favourites = state.favourites.filter(
        (car) => car.id !== action.payload
      );
    },

    addFavourite: (state, action) => {

      const exists = state.favourites.some(
        (car) => car.id === action.payload.id
      );

      if (!exists) {
        state.favourites.push(action.payload);
      }
    },

    removeFavourite: (state, action) => {

      state.favourites = state.favourites.filter(
        (car) => car.id !== action.payload
      );
    },

  },
});

export const {
  addCar,
  updateCar,
  deleteCar,
  addFavourite,
  removeFavourite,
} = carSlice.actions;

export default carSlice.reducer;