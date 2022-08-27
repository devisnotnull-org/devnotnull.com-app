import { Reducer, AnyAction } from 'redux';

import { BlogItemActionTypes } from './actions';
import { IBlogPostPayload } from '../../models/blog';

export interface IBlogItemState extends IBlogPostPayload {
  readonly loading: boolean;
  readonly errors?: string;
  readonly includes?: {
    Asset?: {
      sys? : {
        id?: string
      },
      fields?: {
        title?: string
        file?: {
          url?: string
        }
      }
    }[]
  }
}

const initialState: IBlogItemState = {
  includes: {},
  errors: undefined,
  loading: false,
  fields: {
    title: "",
    slug: ""
  }
};

export const blog: Reducer<IBlogItemState> = (
  state: IBlogItemState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case BlogItemActionTypes.FETCH_START: {
      return { ...state, loading: true, errors: undefined };
    }
    case BlogItemActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, errors: undefined, ...action.payload };
    }
    case BlogItemActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default blog;
