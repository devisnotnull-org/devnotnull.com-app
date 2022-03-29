import { action } from 'typesafe-actions';

import { IMetadataPayload } from '../../models/metadata';

export enum MetadataActionTypes {
  FETCH_START = '@metadata/FETCH_START',
  FETCH_SUCCESS = '@metadata/FETCH_SUCCESS',
  FETCH_ERROR = '@metadata/FETCH_ERROR'
}

export const fetchRequest = (id: string) =>
  action(MetadataActionTypes.FETCH_START);
export const fetchSuccess = (data: IMetadataPayload[]) =>
  action(MetadataActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) =>
  action(MetadataActionTypes.FETCH_ERROR, message);
