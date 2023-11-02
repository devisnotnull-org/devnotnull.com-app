import { createSelector } from "reselect";
import { IContactState } from "./reducer";
import { IState } from "../reducers";

export const getContact = (state: IState): IContactState => state?.contact;

export const getContactItems = createSelector(
  getContact,
  (state) => state?.items,
);

export const getContactItemsLoading = createSelector(
  getContact,
  (state) => state?.loading,
);

export const getContactItemsErrors = createSelector(
  getContact,
  (state) => state?.errors ?? undefined,
);
