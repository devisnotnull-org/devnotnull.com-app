import { createSelector } from "reselect";
import { IAbilityState } from "./reducer";
import { IState } from "../reducers";

export const getAbility = (state: IState): IAbilityState => state?.ability;

export const getAbilityItems = createSelector(
  getAbility,
  (state) => state?.items,
);

export const getAbilityItemsLoading = createSelector(
  getAbility,
  (state) => state?.loading,
);

export const getAbilityItemsErrors = createSelector(
  getAbility,
  (state) => state?.errors ?? undefined,
);
