import { createSelector } from "reselect";

import { IEducationState } from "./reducer";
import { IState } from "../reducers";

export const getEducation = (state: IState): IEducationState =>
  state?.education;

export const getEducationItems = createSelector(
  getEducation,
  (state) => state?.items,
);

export const getEducationItemsLoading = createSelector(
  getEducation,
  (state) => state?.loading,
);

export const getEducationItemsErrors = createSelector(
  getEducation,
  (state) => state?.errors ?? undefined,
);
