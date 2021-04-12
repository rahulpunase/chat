import React from 'react';
import './message-input.scss';
import '../../styles/_global.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSmile} from '@fortawesome/free-solid-svg-icons'

const MessageInput = () => {
	return (
		<div className="message-input-component">
			<div className="m-i-container">
				<div className="m-i-centralize">
					<div className="c-p-panel button-holder">
						<button className="gbl-ch-button">
							<FontAwesomeIcon className="theme-font" icon={faSmile} size="lg"></FontAwesomeIcon>
						</button>
					</div>
					<div className="c-p-panel msg-input-textarea">
						<textarea name="sms" placeholder="Type your message here"></textarea>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MessageInput;