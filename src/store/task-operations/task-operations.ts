import {createSlice, nanoid} from '@reduxjs/toolkit';
import { TaskOperations } from '../../types/state';
import { FilterItems, NameSpace } from '../../const';

const initialState: TaskOperations = {
  tasksInList: [],
  filtredTasks: [],
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
    changeTaskStatus: (state, action) => {
      state.tasksInList = state.tasksInList.reduce((acc: any, el) => (el.id === action.payload)
        ? [...acc, { ...el, isActive: !el.isActive }]
        : [...acc, el], []);
    },
    filterItems: (state, action) => {
      state.filtredTasks = FilterItems[1] === action.payload
        ? [...state.tasksInList].filter((el) => (el.isActive))
        : [...state.tasksInList].filter((el) => (!el.isActive));
    },
  },
});

export const {
  setTaskInList,
  changeTaskStatus,
  filterItems,
} = taskOperations.actions;
