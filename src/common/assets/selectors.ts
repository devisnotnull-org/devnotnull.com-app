import { prop, pipe, propOr, path } from 'ramda';

import { IAssetState } from './reducer';
import { IState } from '../reducers';
import { stat } from 'fs';

export const getAsset = (state: IState): IAssetState => prop('assets', state);

export const getAssetItem = (state, assetId) => pipe(
    getAsset,
    prop('items'),
    prop(assetId)
)(state)

export const getAssetItemsLoading = pipe(
    getAsset,
    prop('loading')
)

export const getAssetItemsErrors = pipe(
    getAsset,
    propOr(undefined, 'errors')
)

export const getPropertyAssetId = path(['sys', 'id'])
