import { Reducer, AnyAction } from 'redux';

import { MetadataActionTypes } from './actions';
import { ICommonContentPayload } from '../../models/common';
import { IMetadataPayload } from '../../models/metadata';

export interface IMetadataState extends IMetadataPayload {
  readonly loading: boolean;
  readonly errors?: string;
}

const initialState: IMetadataState = {
  errors: undefined,
  loading: false
};

export const blog: Reducer<IMetadataState> = (
  state: IMetadataState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case MetadataActionTypes.FETCH_START: {
      return { ...state, loading: true, errors: undefined };
    }
    case MetadataActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, errors: undefined, ...action.payload };
    }
    case MetadataActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default blog;
