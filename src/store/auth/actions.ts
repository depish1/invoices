import { IUser } from 'store/auth/types';

export const SET_USER = 'SET_USER' as const;
export const SIGN_OUT = 'SIGN_OUT' as const;
export const SET_LOADING = 'SET_LOADING' as const;
export const SET_ERROR = 'SET_ERROR' as const;
export const NEED_VERIFICATION = 'NEED_VERIFICATION' as const;

export const setUser = (payload: IUser) => ({ type: SET_USER, payload });
export const setLoading = (payload: boolean) => ({ type: SET_LOADING, payload });
export const signOut = { type: SIGN_OUT };
export const setError = (payload: string) => ({ type: SET_ERROR, payload });
export const needVerification = { type: NEED_VERIFICATION };

type SetUserActionType = ReturnType<typeof setUser>;
type SetLoadingActionType = ReturnType<typeof setLoading>;
type SignOutActionType = typeof signOut;
type SetErrorActionType = ReturnType<typeof setError>;
type NeedVerifcationActionType = typeof needVerification;

export type AuthActionsType = SetUserActionType | SetLoadingActionType | SignOutActionType | SetErrorActionType | NeedVerifcationActionType;
