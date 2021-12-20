import { Reducer, AnyAction } from 'redux';

import { MetadataActionTypes } from './actions';
import { IMetadataPayload } from '../../models/metadata';
import { INetworkResponse } from '../../models/network';

export interface IMetadataState extends IMetadataPayload {
  readonly loading: boolean;
  readonly errors?: string;
}

type MetaDataType = INetworkResponse & IMetadataState;

const initialState: MetaDataType = {
  errors: undefined,
  loading: false,
  title: '',
  blurb: '',
  summary: '',
  favicon: {},
  primaryImage: {},
  secondaryImage: {}
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
      console.log("___________________")
      console.log("___________________")
      console.log("___________________")
      console.log("___________________")
      console.log("___________________")
      console.log("___________________")
      console.log("___________________")
      console.log(action)
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
