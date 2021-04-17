import React, {useEffect, useState} from 'react';
import './register-n-login.scss';
import '../../../styles/_global.scss';
import {Button, Container, Form, Row, Alert} from 'react-bootstrap';
import utilMethods from "../../../utils/util.methods";
import AccountService from "../../../services/account.service";
import { AuthStateActions, checkUserLogin, _onLoading, _onLogin } from "../../../redux/reducers/auth-state-reducer/authState.action";
import {useDispatch} from "react-redux";

const RegisterNLogin = () => {
	const loginState = {
		login: true,
		label: 'Login to Chat',
		buttonLabel: 'Login',
		toggleButtonLabel: 'New to Chat? Sign Up'
	};
	const signUpState = {
		login: false,
		label: 'Get Started',
		buttonLabel: 'Sign Up',
		toggleButtonLabel: 'Already have an account? Log in'
	};
	const defFormController = {
		firstName: '',
		lastName: '',
		emailAddress: '',
		password: '',
		confirmPassword: '',
		isLoggingIn: true,
	}
	const [formState, setFormState] = useState(loginState);
	const [keysWithErrors, setKeysWithErrors] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const [formController, setFormController] = useState(defFormController);
	const dispatch = useDispatch();
	const toggleFormState = () => {
		setFormState(formState.login ? signUpState : loginState);
		const currentState = {
			...formController,
			...{
				isLoggingIn: formState.login
			}
		};
		setFormController(currentState);
	}
	const handleControlOnChange = (ev) => {
		const currentState = {
			...formController,
			...{
				[ev.target.name]: ev.target.value,
				isLoggingIn: formState.login
			}
		};
		setFormController(currentState);
		setKeysWithErrors(utilMethods.nullCheck(currentState, ['isLoggingIn']));
	}
	const handleOnSubmit = (ev) => {
		ev.preventDefault();
		const accountService = new AccountService();
		dispatch(_onLoading(true));
		if (formState.login) {
			accountService.login(formController.emailAddress, formController.password)
				.then(response => {
					const { success } = response;
					if (success) {
						localStorage.setItem(accountService.AUTH_KEY, response.result.token);
						dispatch(_onLogin(response.result.user));
					} else {
						setErrorMessage(response.error.errorMessage);
					}
					dispatch(_onLoading(false));
				})
				.catch(error => {
					dispatch(_onLoading(false));
				});
		} else {
			accountService.register(formController)
				.then(response => console.log(response))
		}
	}
	return (
		<div className="register-n-login__component">
			<Container>
				<Row>
					<div className="form-holder theme-font">
						<div className="centralize">
							<div className="form-description">
								<h3 className="gbl-font-bold theme-font">Welcome to chat</h3>
								<div className="theme-font text">
									<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
								</div>
							</div>
							<div className="form-all-controls">
								{errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
								<Form onSubmit={ev => handleOnSubmit(ev)}>
									<h2>{formState.label}</h2>
									{!formState.login &&
									<>
										<Form.Group>
											<Form.Label>First Name</Form.Label>
											<Form.Control name="firstName" type="text"
												onChange={event => handleControlOnChange(event)}
												value={formController.firstName}
												required
												placeholder="Enter First Name"/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Last Name</Form.Label>
											<Form.Control name="lastName" type="text"
												onChange={event => handleControlOnChange(event)}
												value={formController.lastName}
												placeholder="Enter Last Name"/>
										</Form.Group>
									</>}
									<Form.Group>
										<Form.Label>Email Address</Form.Label>
										<Form.Control name="emailAddress" type="email"
											onChange={event => handleControlOnChange(event)}
											value={formController.emailAddress}
											placeholder="Enter Email"/>
										<Form.Text
											className="text-muted">We'll never share your email with anyone else.</Form.Text>
									</Form.Group>
									<Form.Group>
										<Form.Label>Enter Password</Form.Label>
										<Form.Control name="password" type="password"
											onChange={event => handleControlOnChange(event)}
											value={formController.password}
											placeholder="Enter Password"/>
									</Form.Group>
									{!formState.login && <Form.Group>
										<Form.Label>Confirm Password</Form.Label>
										<Form.Control name="email password" type="password"
											onChange={event => handleControlOnChange(event)}
											value={formController.confirmPassword}
											placeholder="Confirm Password"/>
									</Form.Group>}
									<Form.Group>
										<Button type="submit" disabled={false} variant="primary" block>{formState.buttonLabel}</Button>
									</Form.Group>
									<Form.Group>
										<Button onClick={() => toggleFormState()} variant="link"
											block>{formState.toggleButtonLabel}</Button>
									</Form.Group>
								</Form>
							</div>
						</div>
					</div>
				</Row>
			</Container>
		</div>
	)
}

export default RegisterNLogin;
