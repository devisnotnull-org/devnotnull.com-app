import { prop, pipe, propOr } from 'ramda';

import { IState } from '../reducers';
import { IFolioState } from './reducer';

export const getFolio = (state: IState): IFolioState => prop('folio', state);

export const getFolioItems = pipe(getFolio, prop('items'));

export const getFolioAssets = pipe(getFolio, prop('assets'));

export const getFolioItemsLoading = pipe(getFolio, prop('loading'));

export const getFolioItemsErrors = pipe(getFolio, propOr(undefined, 'errors'));
