import { Reducer, AnyAction } from 'redux';

export interface IConfigState {
  readonly cdn: string;
}

export const initialState: IConfigState = {
  cdn: ""
};

export const config: Reducer<IConfigState> = (
  state: IConfigState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default config;
