import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getStatusModalWindow = (state: State): boolean => state[NameSpace.tasks].isModalOpen;

export const getGuitarAddInCartStatus = (state: State): boolean => state[NameSpace.tasks].isGuitarAddedInCart;
