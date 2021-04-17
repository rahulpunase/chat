import { AuthStateActions } from "./authState.action";

const defaultState = {
	isLoggedIn: false,
	user: null,
	redirectionRequired: false,
	redirectionPath: '',
	checking: true,
	loading: false,
};

export const AuthStateReducer = (state = defaultState, action) => {
	const { FAILURE, CHECK_LOGIN, LOADING, LOGOUT } = AuthStateActions;
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
				loading: action.payload
			}
		}
		case LOGOUT: {
			return {
				...state,
				isLoggedIn: false,
				user: null
			}
		}
		default:
			return state;
	}
}