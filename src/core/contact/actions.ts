import { action } from 'typesafe-actions';

import { IContactPayload } from '../../models/contact';

export enum ContactActionTypes {
  FETCH_START = '@contact/FETCH_START',
  FETCH_SUCCESS = '@contact/FETCH_SUCCESS',
  FETCH_ERROR = '@contact/FETCH_ERROR'
}

export const fetchRequest = () => action(ContactActionTypes.FETCH_START);

export const fetchSuccess = (data: IContactPayload[]) =>
  action(ContactActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(ContactActionTypes.FETCH_ERROR, message);
