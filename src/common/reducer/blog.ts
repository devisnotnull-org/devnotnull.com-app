import { Reducer, AnyAction } from 'redux'

import { BlogActionTypes, BlogState } from '../types/blog'

const initialState: BlogState = {
  data: [],
  errors: undefined,
  loading: false
}

export const blog: Reducer<BlogState> = (state: BlogState = initialState, action: AnyAction) => {
  switch (action.type) {
    case BlogActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case BlogActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case BlogActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

export default blog