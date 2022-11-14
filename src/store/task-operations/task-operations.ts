import {createSlice, nanoid} from '@reduxjs/toolkit';
import { TaskOperations } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: TaskOperations = {
  tasksInList: [],
  isGuitarAddedInCart: false,
};

export const taskOperations = createSlice({
  name: NameSpace.tasks,
  initialState,
  reducers: {
    setTaskInList: (state, action) => {
      state.tasksInList = [{value: action.payload, isActive: false, id: nanoid()}, ...state.tasksInList];
      // state.tasksInList = [];
    },
    setGuitarInCartState: (state, action) => {
      state.isGuitarAddedInCart = action.payload;
    },
  },
});

export const {
  setTaskInList,
  setGuitarInCartState,
} = taskOperations.actions;
