import {
  createStore,
  combineReducers,
  applyMiddleware,
  Store,
  Middleware
} from 'redux';
import createSaga, { END, SagaMiddleware } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import rootReducers from '../core/reducers';

export default (history: any, reduxState = undefined) => {
  // Compose our middlewares
  const saga: SagaMiddleware = createSaga();
  const router: Middleware = routerMiddleware(history);

  // Compose with dev tools
  const enhancer = composeWithDevTools(applyMiddleware(saga, router));

  // Create our store
  const store: Store = createStore(rootReducers(history), reduxState, enhancer);

  // TODO: This needs to be properly types
  (store as any).runSaga = saga.run;
  (store as any).closeSagas = () => store.dispatch(END);

  // TODO: Cleanup
  if ((module as any).hot) {
    // Enable Webpack hot module replacement for reducers
    (module as any).hot.accept('../core/reducers', () => {
      // eslint-disable-next-line
      const nextReducers = require('../core/reducers');
      const rootReducer = combineReducers({
        ...nextReducers
      });
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};
