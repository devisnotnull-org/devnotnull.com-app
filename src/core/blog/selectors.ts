import { createSelector } from 'reselect';
import { IBlogState } from './reducer';
import { IState } from '../reducers';

export const getBlog = (state: IState): IBlogState => state?.blog;

export const getBlogItems = createSelector(getBlog, (state) => state?.items);

export const getBlogItemsLoading = createSelector(
  getBlog,
  (state) => state?.loading
);

export const getBlogItemsErrors = createSelector(
  getBlog,
  (state) => state?.errors ?? undefined
);
