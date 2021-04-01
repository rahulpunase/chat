import React from 'react';
import data from '../../data/messages.data.js';
import './messages-list.scss';

const MessagesList = () => {
	const messages = data;
	return (
		messages.map((message) => (
			<div className="message-list-component">
				{message.messageDirection === 0 && <div className="ac-message right-sent-message">
					<div className="content">
						<div className="message-text">{message.text}</div>
						<div className="details"></div>
						<div className="time">You at 11:21</div>
					</div>
				</div>}
				{message.messageDirection !== 0 && <div className="ac-message left-received-message">
					<div className="content">
						<div className="details"></div>
						<div className="message-text">{message.text}</div>
						<div className="time">{message.name.first} at 11:21</div>
					</div>
				</div>}
			</div>
		))
	)
}

export default MessagesList;