import {combineReducers, createStore, applyMiddleware} from 'redux';
import {AuthStateReducer} from "./reducers/auth-state-reducer/authState.reducer";
import thunk from 'redux-thunk';
import {GeneralReducer} from "./reducers/general-reducers/general.reducer";
import {ConversationReducers} from "./reducers/conversation-reducer/conversation.reducers";


const reducers = combineReducers({
	authState: AuthStateReducer,
	generalReducer: GeneralReducer,
	conversationReducer: ConversationReducers
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;