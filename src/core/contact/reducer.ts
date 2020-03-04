import { Reducer, AnyAction } from 'redux';

import { ICommonContentListPayload } from '../../models/common';
import { ContactActionTypes } from './actions';
import { IContactPayload } from '../../models/contact';

export interface IContactState extends ICommonContentListPayload<IContactPayload> {
  readonly loading: boolean;
  readonly errors?: string;
}

const initialState: IContactState = {
  total: 0,
  skip: 0,
  limit: 0,
  items: [],
  errors: undefined,
  loading: false
};

export const blog: Reducer<IContactState> = (
  state: IContactState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ContactActionTypes.FETCH_START: {
      return { ...state, loading: true, errors: undefined };
    }
    case ContactActionTypes.FETCH_SUCCESS: {
      console.log('ContactActionTypes.FETCH_SUCCESS')
      console.log(action.payload)
      return { ...state, loading: false, errors: undefined, ...action.payload };
    }
    case ContactActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default blog;
