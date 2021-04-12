import Axios from 'axios';

export class HttpClientService {
	SERVER_URL = 'http://localhost:5000';
	AUTH_KEY = 'AUTH_KEY:Bearer';

	postRequest = (url, data, skipAuthentication) => {
		let headers = {};
		if (!skipAuthentication) {
			headers = {
				...headers,
				...{
					'authentication': 'bearer ' + this.getTokenFromLocalStorage(),
				},
			};
		}
		return new Promise((resolve, reject) => {
			Axios.post(
				this.SERVER_URL + url,
				data,
				{headers}
			).then(response => {
				resolve(response.data);
			}).catch(error => {
				reject(error);
			});
		});
	}

	getTokenFromLocalStorage() {
		return window.localStorage.getItem(this.AUTH_KEY);
	}


}