import { prop, pipe, propOr } from 'ramda';

import { IEducationState } from './reducer';
import { IState } from '../reducers';

export const getExperiance = (state: IState): IEducationState => prop('education', state);

export const getEducationItems = pipe(
    getExperiance,
    prop('items')
)

export const getEducationItemsLoading = pipe(
    getExperiance,
    prop('loading')
)

export const getEducationItemsErrors = pipe(
    getExperiance,
    propOr(undefined, 'errors')
)
