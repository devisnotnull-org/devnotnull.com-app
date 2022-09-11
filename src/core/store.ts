import {
  createStore,
  combineReducers,
  applyMiddleware,
  Store,
  Middleware
} from 'redux';
import createSaga, { END, SagaMiddleware } from 'redux-saga';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router'
import { isProduction } from '../utils';

import rootReducers from '../core/reducers';

export default async (history: any, reduxState = undefined) => {
  // Compose our middlewares
  const saga: SagaMiddleware = createSaga();
  const router: Middleware = createRouterMiddleware(history);
  
  let enhancer;
  // Only import dev tools if we are in dev mode
  if(isProduction) { 
    enhancer = await import('redux-devtools-extension').then(payload => payload.composeWithDevTools(applyMiddleware(saga, router)))
  } else enhancer = applyMiddleware(saga, router);

  // Compose with dev tools
  enhancer = applyMiddleware(saga, router) 
  
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
