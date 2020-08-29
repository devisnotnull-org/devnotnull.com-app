import { prop, pipe, propOr } from 'ramda';

import { IExperianceState } from './reducer';
import { IState } from '../reducers';

export const getExperiance = (state: IState): IExperianceState =>
  prop('experiance', state);

export const getExperianceItems = pipe(getExperiance, prop('items'));

export const getExperianceItemsLoading = pipe(getExperiance, prop('loading'));

export const getExperianceItemsErrors = pipe(
  getExperiance,
  propOr(undefined, 'errors')
);
