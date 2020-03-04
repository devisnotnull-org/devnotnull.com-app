import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSaga, { END, SagaMiddleware } from 'redux-saga';
import root from './sagas'

import rootReducers from '../core/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (history: any = undefined, reduxState = undefined) => {

  // Create our store
  const saga: SagaMiddleware = createSaga();
  const router = routerMiddleware(history);

  // Create Saga middleware
  const enhancer = composeWithDevTools(applyMiddleware(saga, router));

  // Create our store
  const store: Store = createStore(
    rootReducers,
    reduxState,
    enhancer,
  );

  // TODO: This needs to be properly types
  (store as any).runSaga = saga.run;
  (store as any).closeSagas = () => store.dispatch(END);

  // TODO: Cleanup
  if ((module as any).hot) {
    // Enable Webpack hot module replacement for reducers
    (module as any).hot.accept('../core/reducers', () => {
      const nextReducers = require('../core/reducers');
      const rootReducer = combineReducers({
        ...nextReducers,
        router: routerReducer,
      });
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};