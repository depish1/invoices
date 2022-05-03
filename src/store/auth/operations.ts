import { FirebaseError } from 'firebase/app';
import { ThunkAction } from 'redux-thunk';
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

import { AuthActionsType } from 'store/auth/actions';
import { ISignInData, ISignUpData, IUser } from 'store/types';
import { RootReducerType } from 'store';
import { firebaseAuth, firebaseDb } from 'communication/firebase';

export const signup = ({ email, firstName, password }: ISignUpData): ThunkAction<void, RootReducerType, null, AuthActionsType> => {
  return async dispatch => {
    try {
      const res = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      if (res.user) {
        const userData: IUser = {
          email,
          firstName,
          id: res.user.uid,
          createdAt: serverTimestamp(),
        };
        await setDoc(doc(firebaseDb, 'user', res.user.uid), userData);
        await sendEmailVerification(res.user);
        dispatch({ type: 'NEED_VERIFICATION' });
        dispatch({ type: 'SET_USER', payload: userData });
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
    }
  };
};

export const getUserById = (userId: string): ThunkAction<void, RootReducerType, null, AuthActionsType> => {
  return async dispatch => {
    try {
      const docRef = doc(firebaseDb, 'users', userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data() as IUser;
        dispatch({ type: 'SET_USER', payload: userData });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setLoading = (isLoading: boolean): ThunkAction<void, RootReducerType, null, AuthActionsType> => {
  return dispatch => {
    return dispatch({ type: 'SET_LOADING', payload: isLoading });
  };
};

export const signin = ({ email, password }: ISignInData): ThunkAction<void, RootReducerType, null, AuthActionsType> => {
  return async dispatch => {
    try {
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      return userCredential;
    } catch (error) {
      if (error instanceof FirebaseError) {
        dispatch(setError(error.message));
        dispatch(setLoading(false));
      }
    }
  };
};

export const signout = (): ThunkAction<void, RootReducerType, null, AuthActionsType> => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      await signOut(firebaseAuth);
      dispatch({ type: 'SIGN_OUT' });
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };
};

export const setError = (msg: string): ThunkAction<void, RootReducerType, null, AuthActionsType> => {
  return dispatch =>
    dispatch({
      type: 'SET_ERROR',
      payload: msg,
    });
};

export const setNeedVerification = (): ThunkAction<void, RootReducerType, null, AuthActionsType> => {
  return dispatch => {
    dispatch({ type: 'NEED_VERIFICATION' });
  };
};

export const sendResetEmail = (email: string): ThunkAction<void, RootReducerType, null, AuthActionsType> => {
  return async dispatch => {
    try {
      await sendPasswordResetEmail(firebaseAuth, email);
    } catch (error) {
      console.log(error);
      if (error instanceof FirebaseError) {
        dispatch(setError(error.message));
      }
    }
  };
};
