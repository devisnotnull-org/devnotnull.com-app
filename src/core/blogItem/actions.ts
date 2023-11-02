import { action } from "typesafe-actions";

import { IBlogPostPayload } from "../../models/blog";

export enum BlogItemActionTypes {
  FETCH_START = "@blogItem/FETCH_START",
  FETCH_SUCCESS = "@blogItem/FETCH_SUCCESS",
  FETCH_ERROR = "@blogItem/FETCH_ERROR",
}

export const fetchRequest = () => action(BlogItemActionTypes.FETCH_START);

export const fetchSuccess = (data: IBlogPostPayload[]) =>
  action(BlogItemActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(BlogItemActionTypes.FETCH_ERROR, message);
