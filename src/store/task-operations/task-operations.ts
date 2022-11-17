import { DEFAULT_FILTER } from './../../const';
import {createSlice, nanoid} from '@reduxjs/toolkit';
import { TaskOperations } from '../../types/state';
import { NameSpace } from '../../const';
import { filter } from '../../util';

const initialState: TaskOperations = {
  tasksInList: [],
  filtredTasks: [],
  activeFilter: DEFAULT_FILTER,
};

export const taskOperations = createSlice({
  name: NameSpace.tasks,
  initialState,
  reducers: {
    setTaskInList: (state, action) => {
      state.tasksInList = [{value: action.payload, isCompleted: false, id: nanoid()}, ...state.tasksInList];
      // state.tasksInList = [];
    },
    changeTaskStatus: (state, action) => {
      state.tasksInList = state.tasksInList.reduce((acc: any, el) => (el.id === action.payload)
        ? [...acc, { ...el, isCompleted: !el.isCompleted }]
        : [...acc, el], []);
    },
    filterItems: (state, action) => {
      state.activeFilter = action.payload;
      state.tasksInList = [...state.tasksInList];
      state.filtredTasks = filter[state.activeFilter](state.tasksInList);
    },
    clearCompleted: (state) => {
      state.tasksInList = state.tasksInList.filter((el) => (!el.isCompleted));
      state.filtredTasks = state.tasksInList;
      state.activeFilter = DEFAULT_FILTER;
    },
    resetFilter: (state) => {
      state.activeFilter = DEFAULT_FILTER;
    },
  },
});

export const {
  setTaskInList,
  changeTaskStatus,
  filterItems,
  clearCompleted,
  resetFilter,
} = taskOperations.actions;
