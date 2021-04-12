import './App.scss';
import React from 'react';
import Body from "./components/body/body.component";
import {Provider} from 'react-redux';
import store from "./redux/store";

function App() {
	return (
		<div className="App theme-light-blue">
			<Provider store={store}>
				<Body/>
			</Provider>
		</div>
	);
}

export default App;
