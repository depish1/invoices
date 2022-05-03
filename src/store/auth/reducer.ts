import produce from 'immer';

import { AuthActionsType } from 'store/auth/actions';
import { IAuthState } from 'store/auth/types';

const initialState: IAuthState = {
  user: null,
  isLoading: false,
  error: '',
  needVerification: false,
};

const auth = produce((draftState: IAuthState, action: AuthActionsType) => {
  switch (action.type) {
    case 'SET_USER':
      draftState.user = action.payload;
      return draftState;
    case 'SET_LOADING':
      draftState.isLoading = action.payload;
      return draftState;
    case 'SIGN_OUT':
      draftState.user = null;
      draftState.isLoading = false;
      return draftState;
    case 'SET_ERROR':
      draftState.error = action.payload;
      return draftState;
    case 'NEED_VERIFICATION':
      draftState.needVerification = true;
      return draftState;
    default:
      return draftState;
  }
}, initialState);

export default auth;
