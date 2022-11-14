import { Tasks } from './../../types/tasks';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getTasks = (state: State): Tasks => state[NameSpace.tasks].tasksInList;

// export const getStatusModalWindow = (state: State): boolean => state[NameSpace.tasks].isModalOpen;
