export interface IUser {
  firstName: string;
  email: string;
  id: string;
  createdAt: any;
}

export interface IAuthState {
  user: IUser | null;
  isLoading: boolean;
  error: string;
}

export interface ISignUpData {
  firstName: string;
  email: string;
  password: string;
}

export interface ISignInData {
  email: string;
  password: string;
}
