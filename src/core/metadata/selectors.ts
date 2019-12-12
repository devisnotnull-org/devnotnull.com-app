import { prop, pipe, propOr } from 'ramda';

import { IMetadataState } from './reducer';
import { IState } from '../reducers';

export const getMetadata = (state: IState): IMetadataState => prop('metadata', state);

export const getMetadataTitle = pipe(
    getMetadata,
    prop('title')
)

export const getMetadataBlurb = pipe(
    getMetadata,
    prop('blurb')
)

export const getMetadataSummary = pipe(
    getMetadata,
    prop('summary')
)


export const getMetadataItemLoading = pipe(
    getMetadata,
    prop('loading')
)

export const getMetadataItemErrors = pipe(
    getMetadata,
    propOr(undefined, 'errors')
)
