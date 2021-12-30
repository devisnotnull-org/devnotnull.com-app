import { createSelector } from 'reselect';

import { IState } from '../reducers';
import { IFolioState } from './reducer';

export const getFolio = (state: IState): IFolioState => state?.folio;

export const getFolioItems = createSelector(getFolio, state => state?.items);

export const getFolioAssets = createSelector(getFolio, state => state?.assets);

export const getFolioItemsLoading = createSelector(
  getFolio,
  state => state?.loading
);

export const getFolioItemsErrors = createSelector(
  getFolio,
  state => state?.errors ?? undefined
);
