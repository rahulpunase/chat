import React, {useEffect} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from "../../pages/home/home.page";
import {useDispatch, useSelector} from "react-redux";
import { AuthStateUtils } from "../../redux/reducers/auth-state-reducer/authState.utils";
import RegisterNLogin from "../account/registration-n-login/register-n-login.component";
import {LoadingComponent} from "../loading/loading";

const paths = {
	empty: '/',
	account: '/account',
	people: '/people'
}
const Routers = () => {
	const store = useSelector(storeState => storeState);
	const dispatch = useDispatch();
	const {authState} = store;
	useEffect(() => {
		dispatch(AuthStateUtils.checkUserLogin());
	}, []);
	return (
		<Router>
			<Switch>
				<Route path={paths.empty} exact={true} render={() => renderFunction(authState)}/>
				<Route path={paths.people} exact={true}>
					<ProtectedRoute authState={authState} component={<Home/>}/>
				</Route>
				<Route path={paths.account}>
					<PublicRoute authState={authState}/>
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
		authState.checking ? <PlaceHolderLoading/> : !authState.isLoggedIn ?
			<Redirect to={paths.account}/> : component
	)
}

const PublicRoute = ({authState}) => {
	return (
		<React.Fragment>
			{
				!authState.isLoggedIn ? <RegisterNLogin/> : <Redirect to={paths.people}/>
			}
		</React.Fragment>
	)
}

const renderFunction = (authState) => {
	return <React.Fragment>
		{
			authState.checking ? <PlaceHolderLoading/> :
				<Redirect to={authState.isLoggedIn ? paths.people : paths.account}/>
		}
	</React.Fragment>
}

const PlaceHolderLoading = () => {
	return <LoadingComponent placeholder={true} />
}

export default Routers;