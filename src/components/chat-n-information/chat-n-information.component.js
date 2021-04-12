import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faUsers} from '@fortawesome/free-solid-svg-icons';
import "./chat-n-information.scss";
import '../../styles/_global.scss';
import ConversationList from "../conversation-list/conversation-list.component";
import SearchInConversation from "../conversation-list/search-in-conversation/search-in-conversation.component";

const ChatNInformation = () => {
	return (
		<div className="chat-n-information">
			<div className="header">
				<span>
					<FontAwesomeIcon className="theme-font" size="lg" icon={faUsers}/>
					<span className="action-selected theme-font">People</span>
				</span>
			</div>
			<div className="profile-section">
				<div className="profile-central">
					<div className="setting-holder gbl-menu-button">
						<button>
							<FontAwesomeIcon className="theme-font" size="sm" icon={faCog}/>
						</button>
					</div>
					<div className="profile-pic-holder">
						<div className="profile-img">
							<div className="status-circle"/>
							<img src="" alt=""/>
						</div>
					</div>
					<div className="name theme-font">
						<span>Rahul Punase</span>
					</div>
				</div>
			</div>
			<div className="conversation-search">
				<SearchInConversation/>
			</div>
			<div className="conversation-list scrollable">
				<ConversationList/>
			</div>
		</div>
	);
}

export default ChatNInformation;