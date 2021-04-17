export const AuthStateActions = {
	CHECK_LOGIN: 'CHECK_LOGIN',
	FAILURE: 'FAILURE',
	LOADING: 'LOADING',
	LOGOUT: 'LOGOUT',
}

export const _onLogin = (user) => ({
	type: AuthStateActions.CHECK_LOGIN,
	payload: user
});

export const _onCheckLogin = (user) => ({
	type: AuthStateActions.CHECK_LOGIN,
	payload: user
});

export const _onFailure = () => ({
	type: AuthStateActions.FAILURE,
	payload: null,
});

export const _onLoading = (isLoading) => ({
	type: AuthStateActions.LOADING,
	payload: isLoading,
});
export const _onLogout = () => ({
	type: AuthStateActions.LOGOUT,
})

