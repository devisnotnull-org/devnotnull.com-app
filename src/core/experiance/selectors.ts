import { createSelector } from 'reselect';

import { IExperianceState } from './reducer';
import { IState } from '../reducers';

export const getExperiance = (state: IState): IExperianceState =>
  state?.experiance;

export const getExperianceItems = createSelector(
  getExperiance,
  (state) => state?.items
);

export const getExperianceItemsLoading = createSelector(
  getExperiance,
  (state) => state?.loading
);

export const getExperianceItemsErrors = createSelector(
  getExperiance,
  (state) => state?.errors ?? undefined
);
