import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.favorites.some(
        (car) => car.id === action.payload.id
      );

      if (!exists) {
        state.favorites.push(action.payload);
      }
    },

    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (car) => car.id !== action.payload
      );
    },

    toggleFavorite: (state, action) => {
      const exists = state.favorites.some(
        (car) => car.id === action.payload.id
      );

      if (exists) {
        state.favorites = state.favorites.filter(
          (car) => car.id !== action.payload.id
        );
      } else {
        state.favorites.push(action.payload);
      }
    },

    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  toggleFavorite,
  clearFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;