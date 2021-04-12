import {combineReducers, createStore, applyMiddleware} from 'redux';
import {AuthStateReducer} from "./reducers/authstate.reducer";
import thunk from 'redux-thunk';


const reducers = combineReducers({
	authState: AuthStateReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;