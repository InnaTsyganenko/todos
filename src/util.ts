import { FilterType } from './const';

export const filter = {
  [FilterType.ALL]: (tasks) => tasks,
  [FilterType.ACTIVE]: (tasks) => tasks.filter((el) => (!el.isCompleted)),
  [FilterType.COMPLETED]: (tasks) => tasks.filter((el) => (el.isCompleted)),
};
