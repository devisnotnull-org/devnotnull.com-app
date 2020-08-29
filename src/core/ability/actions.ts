import { action } from 'typesafe-actions';

import { IAbillityPayload } from '../../models/abillity';

export enum AbilitiesActionTypes {
  FETCH_START = '@abilities/FETCH_START',
  FETCH_SUCCESS = '@abilities/FETCH_SUCCESS',
  FETCH_ERROR = '@abilities/FETCH_ERROR'
}

export const fetchRequest = () => action(AbilitiesActionTypes.FETCH_START);
export const fetchSuccess = (data: IAbillityPayload[]) =>
  action(AbilitiesActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) =>
  action(AbilitiesActionTypes.FETCH_ERROR, message);
