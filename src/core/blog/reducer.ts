import { Reducer, AnyAction } from "redux";

import { ICommonContentListPayload } from "../../models/common";
import { BlogActionTypes } from "./actions";
import { IBlogPostPayload } from "../../models/blog";

export interface IBlogState
  extends ICommonContentListPayload<IBlogPostPayload> {
  readonly loading: boolean;
  readonly errors?: string;
  readonly includes?: {
    Asset?: {
      sys?: {
        id?: string;
      };
      fields?: {
        title?: string;
        file?: {
          url?: string;
        };
      };
    }[];
  };
}

const initialState: IBlogState = {
  total: 0,
  skip: 0,
  limit: 0,
  items: [],
  includes: {},
  errors: undefined,
  loading: false,
};

export const blog: Reducer<IBlogState> = (
  state: IBlogState = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case BlogActionTypes.FETCH_START: {
      return { ...state, loading: true, errors: undefined };
    }
    case BlogActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        errors: undefined,
        ...action.payload?.payload,
      };
    }
    case BlogActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default blog;
