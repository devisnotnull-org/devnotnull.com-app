import { Reducer, AnyAction } from 'redux';

import { AbilitiesActionTypes } from './actions';
import { ICommonContentListPayload } from '../../models/common';
import { IAbillityPayload } from '../../models/abillity';

export interface IAbilityState
  extends ICommonContentListPayload<IAbillityPayload> {
  readonly loading: boolean;
  readonly errors?: string;
}

const initialState: IAbilityState = {
  total: 0,
  skip: 0,
  limit: 0,
  items: [],
  errors: undefined,
  loading: false
};

export const blog: Reducer<IAbilityState> = (
  state: IAbilityState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case AbilitiesActionTypes.FETCH_START: {
      return { ...state, loading: true, errors: undefined };
    }
    case AbilitiesActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, errors: undefined, ...action.payload.payload };
    }
    case AbilitiesActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default blog;
