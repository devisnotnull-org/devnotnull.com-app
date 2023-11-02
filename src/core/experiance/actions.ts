import { action } from "typesafe-actions";

import { IExperiancePayload } from "../../models/experiance";

export enum ExperianceActionTypes {
  FETCH_START = "@experiance/FETCH_START",
  FETCH_SUCCESS = "@experiance/FETCH_SUCCESS",
  FETCH_ERROR = "@experiance/FETCH_ERROR",
}

export const fetchRequest = () => action(ExperianceActionTypes.FETCH_START);

export const fetchSuccess = (data: IExperiancePayload[]) =>
  action(ExperianceActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(ExperianceActionTypes.FETCH_ERROR, message);
