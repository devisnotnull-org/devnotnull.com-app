import { clone } from 'ramda';
import { Reducer, AnyAction } from 'redux';

import { AssetActionTypes } from './actions';
import { IAssetPayload } from '../../models/asset';

export interface IAssetEntry {
  [id: string]: IAssetPayload;
}

export interface IAssetState {
  readonly loading: boolean;
  readonly errors?: string;
  readonly items: { [id: string]: IAssetPayload };
}

const initialState: IAssetState = {
  errors: undefined,
  loading: false,
  items: {}
};

export const asset: Reducer<IAssetState> = (
  state: IAssetState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case AssetActionTypes.FETCH_START: {
      return { ...state, loading: true, errors: undefined };
    }
    case AssetActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        errors: undefined,
        items: clone(state.items)
      };
    }
    case AssetActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default asset;
