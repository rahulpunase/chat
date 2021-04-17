import GeneralServices from "../../../services/general.services";
import * as _ from "lodash";
import {_onActiveConversationFetched, _setConversationActive} from "./conversation.action";


const addExtraLocalToConversation = {
	_isSelected: false,
}

export const ConversationUtils = {
	getActiveConversation: () => {
		return (dispatch) => {
			const generalService = new GeneralServices();
			generalService.getConversations()
				.then(response => {
					if (response.success) {
						const {conversations, count} = response.result;
						const mappedConversation = _.map(conversations, (_con) => ({
							..._con,
							...addExtraLocalToConversation
						}));
						return dispatch(_onActiveConversationFetched(mappedConversation, count));
					}
				})
		}
	},
	setConversationSelected: (conversation) => {
		return dispatch => {
			return dispatch(_setConversationActive(conversation))
		}
	},
	setPeopleSelected: (people) => {
		return dispatch => {
			const generalService = new GeneralServices();
			generalService.setConversationActive(people._id)
				.then(response => {
					if (response.success) {
						const {people} = response.result;
					}
				})
		}
	}
}