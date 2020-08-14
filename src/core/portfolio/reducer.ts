import { Reducer, AnyAction } from 'redux';

import { FolioActionTypes } from './actions';
import { ICommonContentListPayload } from '../../models/common';
import { IFolioPayload } from '../../models/folio';
import { IAssetPayload } from '../../models/asset';

export interface IFolioState extends ICommonContentListPayload<IFolioPayload> {
  readonly loading: boolean;
  readonly assets: IAssetPayload[];
  readonly errors?: string;
}

const initialState: IFolioState = {
  total: 0,
  skip: 0,
  limit: 0,
  items: [],
  assets: [],
  errors: undefined,
  loading: false
};

export const portfolio: Reducer<IFolioState> = (
  state: IFolioState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case FolioActionTypes.FETCH_START: {
      return { ...state, loading: true, errors: undefined };
    }
    case FolioActionTypes.FETCH_SUCCESS: {
      console.log(JSON.stringify(action.payload))
      return { ...state, loading: false, errors: undefined, items: action?.payload?.items ?? [], assets: action?.payload?.includes?.Asset  };
    }
    case FolioActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default portfolio;
