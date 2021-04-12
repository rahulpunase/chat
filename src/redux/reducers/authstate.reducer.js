import AuthStateActions from "./authstate.action";

const defaultState = {
	isLoggedIn: false,
	user: null,
	redirectionRequired: false,
	redirectionPath: '',
	checking: true,
};

export const AuthStateReducer = (state = defaultState, action) => {
	const { FAILURE, CHECK_LOGIN, LOADING } = new AuthStateActions().getActions();
	switch (action.type) {
		case CHECK_LOGIN: {
			return {
				...state,
				isLoggedIn: true,
				user: action.payload,
				checking: false
			}
		}
		case FAILURE: {
			return {
				...state,
				isLoggedIn: false,
				checking: false
			}
		}
		case LOADING: {
			return {
				...state,
				checking: action.payload
			}
		}
		default:
			return state;
	}
}