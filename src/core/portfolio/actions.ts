import { action } from "typesafe-actions";

import { IFolioPayload } from "../../models/folio";

export enum FolioActionTypes {
  FETCH_START = "@folio/FETCH_START",
  FETCH_SUCCESS = "@folio/FETCH_SUCCESS",
  FETCH_ERROR = "@folio/FETCH_ERROR",
}

export const fetchRequest = () => action(FolioActionTypes.FETCH_START);

export const fetchSuccess = (data: IFolioPayload[]) =>
  action(FolioActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(FolioActionTypes.FETCH_ERROR, message);
