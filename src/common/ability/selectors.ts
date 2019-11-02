import { prop, pipe, propOr } from 'ramda';

import { IAbilityState } from './reducer';
import { IState } from '../reducers';

export const getAbility = (state: IState): IAbilityState => prop('ability', state);

export const getAbilityItems = pipe(
    getAbility,
    prop('items'),
)

export const getAbilityItemsLoading = pipe(
    getAbility,
    prop('loading')
)

export const getAbilityItemsErrors = pipe(
    getAbility,
    propOr(undefined, 'errors')
)
