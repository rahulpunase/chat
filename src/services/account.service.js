import {HttpClientService} from "./http-client.service";

export default class AccountService extends HttpClientService {
	login = async (emailAddress, password) => {
		return this.postRequest('/account/loginUser', {
			emailAddress, password
		}, true);
	}

	register = async (data) => {
		return this.postRequest('/account/createUser', data, true);
	}

	checkLogin = async () => {
		return this.postRequest('/account/checkLogin', {});
	}
}