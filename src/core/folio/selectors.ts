import { prop } from 'ramda';

import { IFolioState } from './reducer';
import { IState } from '../reducers';

export const getFolio = (state: IState) => prop('folio', state);

export const getFolioItems = (state: IFolioState) => prop('items', state);
export const getFolioItemsErrors = (state: IFolioState) => prop('errors', state);
export const getFolioItemsLoading = (state: IFolioState) => prop('loading', state);
