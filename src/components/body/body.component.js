import React from 'react';
import './body.scss';
import Home from "../../pages/home/home.page";
import Routers from "../routers/routers.component";
import {LoadingComponent} from "../loading/loading";

const Body = () => {
	return (
		<div className="body__component">
			<div className="body-com-center">
				<LoadingComponent/>
				<Routers/>
			</div>
		</div>
	);
}

export default Body;