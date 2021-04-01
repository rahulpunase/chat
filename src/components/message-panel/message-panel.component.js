import React from 'react';
import "./message-panel.scss";
import MessagesList from "./messages-list/messages-list.component";

const MessagePanel = () => {
	return (
		<div className="message-panel">
			<div className="panel-header">
				<div className="left-section">
					<div className="pic"/>
					<div className="details">
						<div className="name">Mildred Cooley</div>
					</div>
				</div>
			</div>
			<div className="messages-container">
				<MessagesList/>
			</div>
		</div>
	)
}

export default MessagePanel