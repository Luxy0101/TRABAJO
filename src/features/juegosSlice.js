import { createSlice } from "@reduxjs/toolkit";
import { juegosData } from "../data/juegosData";

const juegosSlice = createSlice({
  name: 'products',
  initialState: {
    juegos: juegosData,
    carrito: [],
    gameDetail: null,
    biblioteca: [],
  },
  reducers: {
    getGameInfo: (state, { payload }) => {
      const existItem = state.juegos?.map((x) => x.id === payload)
      if (existItem) {
        return {
          ...state,
          gameDetail: state.juegos?.find((x) => x.id === payload)
        }
      }
    },
    addBiblioteca: (state, action) => {
      const game = action.payload;
      const gameExist = state.biblioteca.find((x) => x.id === game.id);
      if (gameExist) {
        return {
          ...state,
          biblioteca: state.biblioteca.map((x) =>
            x.id === gameExist.id ? game : x
          ),
        };
      } else {
        return {
          ...state,
          biblioteca: [...state.biblioteca, game],
        }
      }
    },
    removedToBiblioteca: (state, action) => {
      return {
        ...state,
        biblioteca: state.biblioteca.filter(item => item.id !== action.payload.id)
      }
    }
  }
});
export const { hola, getGameInfo, addBiblioteca, removedToBiblioteca } = juegosSlice.actions;
export const selectJuegos = (state) => state.juegos.juegos
export const selectJuegoInfo = (state) => state.juegos.juegoInfo
export const selectBiblioteca = (state) => state.juegos.biblioteca
export default juegosSlice.reducer
