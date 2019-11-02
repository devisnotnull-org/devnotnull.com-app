import { Reducer, AnyAction } from 'redux';

import { ICommonContentPayload } from '../../models/common';
import { ExperianceActionTypes } from './actions';
import { IExperiancePayload } from '../../models/experiance';

export interface IExperianceState extends ICommonContentPayload<IExperiancePayload> {
  readonly loading: boolean;
  readonly errors?: string;
}

const initialState: IExperianceState = {
  total: 0,
  skip: 0,
  limit: 0,
  items: [],
  errors: undefined,
  loading: false
};

export const blog: Reducer<IExperianceState> = (
  state: IExperianceState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ExperianceActionTypes.FETCH_START: {
      return { ...state, loading: true, errors: undefined };
    }
    case ExperianceActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, errors: undefined, ...action.payload  };
    }
    case ExperianceActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default blog;
