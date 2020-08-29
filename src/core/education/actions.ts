import { action } from 'typesafe-actions';

import { IEducationPayload } from '../../models/education';

export enum EducationActionTypes {
  FETCH_START = '@education/FETCH_START',
  FETCH_SUCCESS = '@education/FETCH_SUCCESS',
  FETCH_ERROR = '@education/FETCH_ERROR'
}

export const fetchRequest = () => action(EducationActionTypes.FETCH_START);

export const fetchSuccess = (data: IEducationPayload[]) =>
  action(EducationActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(EducationActionTypes.FETCH_ERROR, message);
