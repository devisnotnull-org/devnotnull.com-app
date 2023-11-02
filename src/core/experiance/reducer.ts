import { Reducer, AnyAction } from "redux";

import { ICommonContentListPayload } from "../../models/common";
import { ExperianceActionTypes } from "./actions";
import { IExperiancePayload } from "../../models/experiance";

export interface IExperianceState
  extends ICommonContentListPayload<IExperiancePayload> {
  readonly loading: boolean;
  readonly errors?: string;
}

const initialState: IExperianceState = {
  total: 0,
  skip: 0,
  limit: 0,
  items: [],
  errors: undefined,
  loading: false,
};

export const blog: Reducer<IExperianceState> = (
  state: IExperianceState = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case ExperianceActionTypes.FETCH_START: {
      return { ...state, loading: true, errors: undefined };
    }
    case ExperianceActionTypes.FETCH_SUCCESS: {
      const orderedExperiance = action.payload.payload as IExperianceState;
      orderedExperiance.items.sort((a, b) => {
        if (a.fields.order < b.fields.order) return -1;
        if (a.fields.order > b.fields.order) return 1;
        return 0;
      });
      return {
        ...state,
        loading: false,
        errors: undefined,
        ...action.payload?.payload,
      };
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
