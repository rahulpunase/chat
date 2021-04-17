import AccountService from "../../../services/account.service";
import {_onCheckLogin, _onFailure} from "./authState.action";

export const AuthStateUtils = {
	checkUserLogin: () => {
		return (dispatch) => {
			const accountService = new AccountService();
			return accountService.checkLogin()
				.then(response => {
					if (response.success) {
						return dispatch(_onCheckLogin(response.result.user));
					} else {
						return dispatch(_onFailure());
					}
				}).catch(error => {
					return dispatch(_onFailure());
				});
		}
	}
}