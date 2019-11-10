import { prop, pipe, propOr } from 'ramda';

import { IMetadataState } from './reducer';
import { IState } from '../reducers';

export const getMetadata = (state: IState): IMetadataState => prop('metadata', state);

export const getMetadataItem = pipe(
    getMetadata,
    prop('items'),
)

export const getMetadataItemLoading = pipe(
    getMetadata,
    prop('loading')
)

export const getMetadataItemErrors = pipe(
    getMetadata,
    propOr(undefined, 'errors')
)
