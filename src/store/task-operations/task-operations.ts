import {createSlice} from '@reduxjs/toolkit';
import { GuitarsOperations } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: GuitarsOperations = {
  isModalOpen: false,
  guitarsInCart: [],
  isGuitarAddedInCart: false,
};

export const taskOperations = createSlice({
  name: NameSpace.tasks,
  initialState,
  reducers: {
    setModalWindowState: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setGuitarInCart: (state, action) => {
      state.guitarsInCart = state.guitarsInCart.some((obj) => obj.id === action.payload.id)
        ? state.guitarsInCart.map((item) => (item.id === action.payload.id) ? action.payload : item)
        : [...state.guitarsInCart, action.payload];
    },
    setGuitarInCartState: (state, action) => {
      state.isGuitarAddedInCart = action.payload;
    },
    deleteGuitarFromCart: (state, action) => {
      state.guitarsInCart = [...state.guitarsInCart].filter((item) => item.id !== action.payload);
    },
    increaseGuitarCartQt: (state, action) => {
      state.guitarsInCart.find((item) => item.id === action.payload).guitarQt++;
    },
    decreaseGuitarCartQt: (state, action) => {
      state.guitarsInCart.find((item) => item.id === action.payload).guitarQt--;
    },
  },
});

export const {
  setModalWindowState,
  setGuitarInCart,
  setGuitarInCartState,
  deleteGuitarFromCart,
  increaseGuitarCartQt,
  decreaseGuitarCartQt,
} = taskOperations.actions;
