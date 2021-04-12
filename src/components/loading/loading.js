import React from 'react';
import "./loading.scss";
import {ReactComponent as LoadingLogo} from "../../assets/images/Rolling-1s-200px.svg"
import {useSelector} from "react-redux";

export const LoadingComponent = (props) => {
	const {height, width} = props;
	const store = useSelector(store => store);
	return (
		<React.Fragment>
			{store.authState.checking && <div className="loading__component">
				<div className="centralized-div">
					<LoadingLogo style={{height: height ? height : 60 + 'px', width: width ? width : 60 + 'px'}}/>
				</div>
			</div>}
		</React.Fragment>
	)
}