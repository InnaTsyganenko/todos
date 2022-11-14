import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { taskOperations } from './task-operations/task-operations';
import { persistReducer } from 'redux-persist';
import { NameSpace } from '../const';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['tasks'],
};

const tasksPersistConfig = {
  key: 'tasks',
  storage,
  whitelist: ['tasksInList'],
};

const rootReducer = combineReducers({
  [NameSpace.tasks]: persistReducer(tasksPersistConfig, taskOperations.reducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
