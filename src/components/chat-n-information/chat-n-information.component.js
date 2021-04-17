import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faUser, faUsers} from '@fortawesome/free-solid-svg-icons';
import "./chat-n-information.scss";
import '../../styles/_global.scss';
import ConversationList from "../conversation-list/conversation-list.component";
import SearchInConversation from "../conversation-list/search-in-conversation/search-in-conversation.component";
import {useSelector} from "react-redux";
import {Dropdown} from "react-bootstrap";
import GeneralServices from "../../services/general.services";

const ChatNInformation = () => {
	const store = useSelector(store => store);
	const {user} = store.authState;
	const [searchedList, setSearchedList] = useState([]);
	const generalService = new GeneralServices();
	const onSearchInputChange = (query) => {
		if (!query) {
			setSearchedList([]);
			return;
		}
		generalService.searchConversation(query)
			.then(response => {
				if (response.success) {
					const {people} = response.result;
					setSearchedList(people);
				}
			})
	}
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
						<Dropdown>
							<Dropdown.Toggle variant="success" id="dropdown-basic">
								<FontAwesomeIcon className="theme-font" size="sm" icon={faCog}/>
							</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="profile-pic-holder">
						<div className="profile-img">
							<div className="status-circle"/>
							<img src="" alt=""/>
							<FontAwesomeIcon className="place-holder-image" size="6x" icon={faUser}/>
						</div>
					</div>
					<div className="name theme-font">
						<span>{`${user.firstName} ${user.lastName}`}</span>
					</div>
				</div>
			</div>
			<div className="conversation-search">
				<SearchInConversation onSearchInputChange={onSearchInputChange}/>
			</div>
			<div className="conversation-list scrollable">
				<ConversationList searchedList={searchedList}/>
			</div>
		</div>
	);
}

export default ChatNInformation;