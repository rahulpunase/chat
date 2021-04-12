import React from 'react';
import './home.scss';
import ControlPanel from '../../components/control-panel/control-panel.component';
import ChatNInformation from "../../components/chat-n-information/chat-n-information.component";
import MessagePanel from "../../components/message-panel/message-panel.component";

const Home = () => {
	return (
		<div className="home__component">
			<div className="control-panel-holder">
				<div className="border-container">
					<div className="icon">IC</div>
					<div className="cp-panel">
						<ControlPanel/>
					</div>
				</div>
			</div>
			<div className="chat-n-information-container">
				<ChatNInformation/>
			</div>
			<div className="central-div">
				<div className="messages-holder">
					<MessagePanel/>
				</div>
			</div>
		</div>
	);
}

export default Home;