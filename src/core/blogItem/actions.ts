import { action } from 'typesafe-actions';

import { IBlogPostPayload } from '../../models/blog';

export enum BlogActionTypes {
  FETCH_START = '@blogItem/FETCH_START',
  FETCH_SUCCESS = '@blogItem/FETCH_SUCCESS',
  FETCH_ERROR = '@blogItem/FETCH_ERROR'
}

export const fetchRequest = () => action(BlogActionTypes.FETCH_START);

export const fetchSuccess = (data: IBlogPostPayload[]) =>
  action(BlogActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(BlogActionTypes.FETCH_ERROR, message);
