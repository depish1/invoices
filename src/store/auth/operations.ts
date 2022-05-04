import { FirebaseError } from 'firebase/app';
import { ThunkAction } from 'redux-thunk';
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

import { firebaseAuth, firebaseDb } from 'communication/firebase';

import { AuthActionsType, setError, setLoading } from 'store/auth/actions';
import { ISignInData, ISignUpData, IUser } from 'store/types';
import { RootReducerType } from 'store';

export const signup = ({ email, firstName, password, onSuccess }: ISignUpData): ThunkAction<void, RootReducerType, null, AuthActionsType> => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      if (user) {
        const userData: IUser = {
          email,
          firstName,
          id: user.uid,
          createdAt: serverTimestamp(),
        };
        await setDoc(doc(firebaseDb, 'users', user.uid), userData);
        await sendEmailVerification(user);

        onSuccess();
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        dispatch(setError('Istnieje już konto z podanym adresie email. Zaloguj się lub załóż konto z innym adresem email.'));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getUserById = (userId: string): ThunkAction<void, RootReducerType, null, AuthActionsType> => {
  return async dispatch => {
    const docRef = doc(firebaseDb, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data() as IUser;
      dispatch({ type: 'SET_USER', payload: userData });
    }
  };
};

export const signin = ({ email, password, onSuccess, onNotVerified }: ISignInData): ThunkAction<void, RootReducerType, null, AuthActionsType> => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
      if (user.emailVerified) {
        dispatch(getUserById(user.uid));
        onSuccess();
      } else {
        onNotVerified();
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        dispatch(setError('Login lub hasło są nieprawidłowe.'));
      }
    } finally {
      dispatch(setLoading(false));
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
      dispatch(setLoading(false));
    }
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
