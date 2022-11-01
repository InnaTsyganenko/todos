/* eslint-disable @typescript-eslint/no-explicit-any */
import { store } from '../store/index.js';

export type GuitarsOperations = {
  isModalOpen: boolean,
  guitarsInCart: any[],
  isGuitarAddedInCart: boolean,
};

export interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}

export type ErrorRecord<T> = Partial<Record<keyof T, string>>;

export type Validations<T extends Record<string, any>> = Partial<Record<keyof T, Validation>>;

export interface NewReview {
  guitarId: number,
  userName: string,
  advantage: string,
  disadvantage: string,
  comment: string,
  rating: number,
}

export interface CouponPost {
  coupon: string,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
