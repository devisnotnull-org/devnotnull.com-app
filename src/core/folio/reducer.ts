import { Reducer, AnyAction } from 'redux';

import { ICommonContentListPayload } from '../../models/common';
import { FolioActionTypes } from './actions';
import { IFolioPayload } from '../../models/folio';

export interface IFolioState extends ICommonContentListPayload<IFolioPayload> {
  readonly loading: boolean;
  readonly errors?: string;
}

const initialState: IFolioState = {
  total: 0,
  skip: 0,
  limit: 0,
  items: [],
  errors: undefined,
  loading: false
};

export const blog: Reducer<IFolioState> = (
  state: IFolioState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case FolioActionTypes.FETCH_START: {
      return { ...state, loading: true, errors: undefined };
    }
    case FolioActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, errors: undefined, ...action.payload  };
    }
    case FolioActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default blog;
