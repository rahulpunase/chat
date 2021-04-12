import React, {useEffect} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from "../../pages/home/home.page";
import {useDispatch, useSelector} from "react-redux";
import AuthStateActions from "../../redux/reducers/authstate.action";
import RegisterNLogin from "../account/registration-n-login/register-n-login.component";

const Routers = () => {
	const store = useSelector(storeState => storeState);
	const dispatch = useDispatch();
	const {authState} = store;
	useEffect(() => {
		const accountActions = new AuthStateActions();
		dispatch(accountActions.checkUserLogin());
	}, []);
	return (
		<Router>
			<Switch>
				<Route path="/" exact={true} render={() => renderFunction(authState)}/>
				<Route path="/home" exact={true}>
					<ProtectedRoute authState={authState} component={<Home/>}/>
				</Route>
				<Route path="/account">
					<PublicRoute authState={authState}/>
					{/*<LoadingComponent/>*/}
				</Route>}
			</Switch>
		</Router>
	);
}

const ProtectedRoute = (props) => {
	return (
		<React.Fragment>
			{
				<PrivateRouters {...props}/>
			}
		</React.Fragment>
	)
}

const PrivateRouters = ({authState, component}) => {
	return (
		!authState.isLoggedIn ? <Redirect to={'/account'}/> : component
	)
}

const PublicRoute = ({authState}) => {
	return (
		<React.Fragment>
			{
				!authState.isLoggedIn ? <RegisterNLogin/> :<Redirect to={'/home'}/>
			}
		</React.Fragment>
	)
}

const renderFunction = (authState) => {
	return <React.Fragment>
		{
			<Redirect to={authState.isLoggedIn ? '/home' : '/account'}/>
		}
	</React.Fragment>
}

export default Routers;