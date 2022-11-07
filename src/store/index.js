import { configureStore } from '@reduxjs/toolkit';
import juegosSlice from '../features/juegosSlice';

const store = configureStore({
  reducer: {
    juegos: juegosSlice,
  },
});

export default store;