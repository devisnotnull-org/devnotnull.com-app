import { prop, pipe, propOr } from 'ramda';

import { IEducationState } from './reducer';
import { IState } from '../reducers';

export const getEducation = (state: IState): IEducationState => prop('education', state);

export const getEducationItems = pipe(
    getEducation,
    prop('items')
)

export const getEducationItemsLoading = pipe(
    getEducation,
    prop('loading')
)

export const getEducationItemsErrors = pipe(
    getEducation,
    propOr(undefined, 'errors')
)
