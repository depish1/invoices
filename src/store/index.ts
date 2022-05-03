import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import authReducer from 'store/auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootReducerType = ReturnType<typeof rootReducer>;

export type RootStateType = ReturnType<typeof store.getState>;

export default store;
