import { action } from 'typesafe-actions';

import { IAssetPayload } from '../../models/asset';

export enum AssetActionTypes {
  FETCH_START = '@asset/FETCH_START',
  FETCH_SUCCESS = '@asset/FETCH_SUCCESS',
  FETCH_ERROR = '@asset/FETCH_ERROR'
}

export const fetchRequest = () => action(AssetActionTypes.FETCH_START);
export const fetchSuccess = (data: IAssetPayload[]) =>
  action(AssetActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) =>
  action(AssetActionTypes.FETCH_ERROR, message);
