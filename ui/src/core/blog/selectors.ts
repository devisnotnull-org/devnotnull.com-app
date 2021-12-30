import { createSelector } from 'reselect';
import { IBlogState } from './reducer';
import { IState } from '../reducers';

export const getBlog = (state: IState): IBlogState => state?.blog;

export const getBlogItems = createSelector(getBlog, state => state?.items);

export const getPaginationTotal = createSelector(
  getBlog,
  state => state?.total
);

export const getPaginationSkip = createSelector(getBlog, state => state?.skip);

export const getPaginationLimit = createSelector(getBlog, state => state?.skip);

export const getPagination = createSelector(
  getPaginationTotal,
  getPaginationSkip,
  getPaginationLimit,
  (total, skip, limit) => ({ total, skip, limit })
);

export const getBlogItemsLoading = createSelector(
  getBlog,
  state => state?.loading
);

export const getBlogItemsErrors = createSelector(
  getBlog,
  state => state?.errors ?? undefined
);
