import { createSelector } from 'reselect';

import { RootStateType } from 'store';

const authSelector = (state: RootStateType) => state.auth;

export const isAuthenticatedSelector = createSelector(authSelector, state => !!state.user);

export const isLoadingSelector = createSelector(authSelector, state => state.isLoading);
