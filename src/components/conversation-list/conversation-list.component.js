import React from 'react';
import data from "../data/conversation.data.js";
import utilMethods from "../../utils/util.methods"
import "./conversation-list.scss";

const ConversationList = () => {
	const conversation = data;
	return (
		conversation.map(con => (
			<div className="conversation-list-element" key={con.index}>
				<div className="container-elem">
					<div className="pic">
						<img src={con.picture}/>
					</div>
					<div className="details">
						<div className="name">{con.name}</div>
						<div className="message">{utilMethods.getSmallerString(con.message, 28)}</div>
					</div>
					<div className="time">11:30</div>
				</div>
			</div>
		))
	);
}

export default ConversationList;