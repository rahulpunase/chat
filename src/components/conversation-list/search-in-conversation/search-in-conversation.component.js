import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./search-in-conversation.scss";


const SearchInConversation = () => {
	return (
		<div className="search-in-conversation">
			<div className="input-style">
				<div className="input-holder">
					<input placeholder="Search Conversation" type="text" className="search-input"/>
				</div>
				<div className="search">
					<FontAwesomeIcon color={'#313131'} size="sm" icon={faSearch}/>
				</div>
			</div>
		</div>
	)
}

export default SearchInConversation;