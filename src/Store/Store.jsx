import { configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Middleware and Reducer/rootReducer';
import rootSaga from '../Middleware and Reducer/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: false,
  }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
