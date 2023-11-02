import { Reducer, AnyAction } from "redux";

import { ICommonContentListPayload } from "../../models/common";
import { EducationActionTypes } from "./actions";
import { IEducationPayload } from "../../models/education";

export interface IEducationState
  extends ICommonContentListPayload<IEducationPayload> {
  readonly loading: boolean;
  readonly errors?: string;
}

const initialState: IEducationState = {
  total: 0,
  skip: 0,
  limit: 0,
  items: [],
  errors: undefined,
  loading: false,
};

export const blog: Reducer<IEducationState> = (
  state: IEducationState = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case EducationActionTypes.FETCH_START: {
      return { ...state, loading: true, errors: undefined };
    }
    case EducationActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        errors: undefined,
        ...action.payload?.payload,
      };
    }
    case EducationActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default blog;
