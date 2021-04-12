import React from 'react';
import data from '../../data/messages.data.js';
import './messages-list.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

const MessagesList = () => {
	const messages = data;
	return (
		messages.map((message) => (
			<div className="message-list-component">
				<MessageMenuAndContent message={message}/>
			</div>
		))
	)
}

const MessageMenuAndContent = ({message}) => {
	return (
		<div className={`ac-message ${message.messageDirection ? 'left-received-message' : 'right-sent-message'}`}>
			<div className="content">
				<div className="details"/>
				<div className="message-content">
					<div className="message-text">
						<span>{message.text}</span>
					</div>
					<div className="menu">
						<button className="gbl-menu-button"><FontAwesomeIcon icon={faEllipsisH}/></button>
					</div>
				</div>
				<div className="time">{message.name.first} at 11:21</div>
			</div>
		</div>
	)
}

export default MessagesList;