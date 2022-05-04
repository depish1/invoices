import { FieldValue } from 'firebase/firestore';

export interface IUser {
  firstName: string;
  email: string;
  id: string;
  createdAt: FieldValue;
}

export interface IAuthState {
  user: IUser | null;
  isLoading: boolean;
  error: string;
  needVerification: boolean;
}

export interface ISignUpData {
  firstName: string;
  email: string;
  password: string;
  onSuccess: () => void;
}

export interface ISignInData {
  email: string;
  password: string;
  onSuccess: () => void;
  onNotVerified: () => void;
}
