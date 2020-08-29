import { prop, pipe, propOr } from 'ramda';

import { IBlogState } from './reducer';
import { IState } from '../reducers';

export const getBlog = (state: IState): IBlogState => prop('blog', state);

export const getBlogItems = pipe(getBlog, prop('items'));

export const getBlogItemsLoading = pipe(getBlog, prop('loading'));

export const getBlogItemsErrors = pipe(getBlog, propOr(undefined, 'errors'));
