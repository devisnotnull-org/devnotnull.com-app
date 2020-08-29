import { prop, pipe, propOr } from 'ramda';

import { IContactState } from './reducer';
import { IState } from '../reducers';

export const getContact = (state: IState): IContactState =>
  prop('contact', state);

export const getContactItems = pipe(getContact, prop('items'));

export const getContactItemsLoading = pipe(getContact, prop('loading'));

export const getContactItemsErrors = pipe(
  getContact,
  propOr(undefined, 'errors')
);
