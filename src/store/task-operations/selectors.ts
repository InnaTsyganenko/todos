import { Tasks } from './../../types/tasks';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getTasks = (state: State): Tasks => state[NameSpace.tasks].tasksInList;

export const getFiltredTasks = (state: State): Tasks => state[NameSpace.tasks].filtredTasks;

export const getActiveFilter = (state: State): string => state[NameSpace.tasks].activeFilter;

export const getCurrentHeightTaskList = (state: State): number => state[NameSpace.tasks].heightTaskList;
