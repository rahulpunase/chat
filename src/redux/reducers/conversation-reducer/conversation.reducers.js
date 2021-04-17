import { ConversationActions } from "./conversation.action";
import * as _ from "lodash";

const defaultState = {
	activeConversation: {},
	conversations: [],
	count: 0,
}


export const ConversationReducers = (state = defaultState, action) => {
	const {SET_CONVERSATIONS, SET_SELECTED} = ConversationActions;
	switch (action.type) {
		case SET_CONVERSATIONS: {
			return {
				...state,
				conversations: action.payload.conversations,
				count: action.payload.count
			}
		}
		case SET_SELECTED: {
			return {
				...state,
				conversations: _.map(state.conversations, (con) => ({
					...con,
					_isSelected: con._id === action.payload._id
				}))
			}
		}
		default: {
			return state
		}
	}
}