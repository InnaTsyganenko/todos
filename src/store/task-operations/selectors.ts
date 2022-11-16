import { Tasks } from './../../types/tasks';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getTasks = (state: State): Tasks => state[NameSpace.tasks].tasksInList;

export const getFiltredMovies = (state: State): Tasks => state[NameSpace.tasks].filtredTasks;
