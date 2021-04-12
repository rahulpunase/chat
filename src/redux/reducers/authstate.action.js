import AccountService from "../../services/account.service";
export default class AuthStateActions {
	constructor() {
		this.Actions = {
			CHECK_LOGIN: 'CHECK_LOGIN',
			FAILURE: 'FAILURE',
			LOADING: 'LOADING'
		}
	}

	getActions() {
		return this.Actions;
	}

	checkUserLogin = () => {
		return (dispatch) => {
			const accountService = new AccountService();
			return accountService.checkLogin()
				.then(response => {
					if (response.success) {
						return dispatch(this._onCheckLogin(response.result.user));
					} else {
						return dispatch(this._onFailure());
					}
				}).catch(error => {
					return dispatch(this._onFailure());
				});
		}
	}

	_onLogin = (user) => ({
		type: this.getActions().CHECK_LOGIN,
		payload: user
	});

	_onCheckLogin = (user) => ({
		type: this.getActions().CHECK_LOGIN,
		payload: user
	});

	_onFailure = () => ({
		type: this.getActions().FAILURE,
		payload: null,
	});

	_onLoading = (isLoading) => ({
		type: this.getActions().LOADING,
		payload: isLoading,
	});
}

