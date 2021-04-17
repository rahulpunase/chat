import {HttpClientService} from "./http-client.service";

export default class GeneralServices extends HttpClientService {
	searchConversation = async (query) => {
		return this.postRequest('/general/search', {query}, false);
	}
	setConversationActive = async (receivedUserId) => {
		return this.postRequest('/general/activate', {receivedUserId}, false);
	}

	getConversations = async () => {
		return this.postRequest('/general/getConversation', {}, false);
	}
}