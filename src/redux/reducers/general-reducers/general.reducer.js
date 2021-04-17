import { GeneralAction } from "./general.action";
const defaultState = {
	conversationSearchQuery: '',
	caller: null,

}
export const GeneralReducer = (state = defaultState, action) => {
	const { CHANGE_QUERY, EVENT } = GeneralAction;
	switch (action.type) {
		case CHANGE_QUERY: {
			return {
				...state,
				conversationSearchQuery: action.payload
			}
		}
		case EVENT: {
			return {
				...state,
				caller: {
					event: action.payload.event,
					name: action.payload.name
				}
			}
		}
		default:
			return state;

	}
}