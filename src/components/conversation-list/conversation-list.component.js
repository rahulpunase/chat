import React, {useEffect, useState} from 'react';
import "./conversation-list.scss";
import "../../styles/_global.scss";
import {ConversationUtils} from "../../redux/reducers/conversation-reducer/conversation.utils";
import {useDispatch, useSelector} from "react-redux";


const ConversationList = ({searchedList}) => {
	const dispatch = useDispatch();
	const store = useSelector(storeState => storeState);
	const [people, setPeople] = useState(null);
	const [localSearchedList, setLocalSearchedList] = useState(searchedList);
	const {conversations} = store.conversationReducer;
	useEffect(() => {
		setLocalSearchedList(searchedList);
	}, [searchedList])

	useEffect(() => {
		dispatch(ConversationUtils.getActiveConversation());
	}, []);

	const setConversationActive = (conversation) => {
		dispatch(ConversationUtils.setConversationSelected(conversation));
	}

	useEffect(() => {
		if (people) {
			const findConversation = conversations.find(con => con.user._id === people._id);
			dispatch(ConversationUtils.setConversationSelected(findConversation));
			setLocalSearchedList([]);
		}
	}, [conversations.length]);

	const setSearchedPeopleActive = (people) => {
		setPeople(people);
		dispatch(ConversationUtils.setPeopleSelected(people));
		dispatch(ConversationUtils.getActiveConversation());
	}

	return (
		<React.Fragment>
			{!localSearchedList.length && conversations.map((con, index) => (
				<div className="conversation-list__component"
				     key={con._id}
				     onClick={() => setConversationActive(con)}
				>
				<div className="motion">
					<div className="motion-swipe-to-del">
						<div className={`conversation-list-element ${con._isSelected ? 'active' : ''}`}>
							<div className="container-elem">
								<div className="pic">
									<img src={con.user.profilePicUrl}/>
								</div>
								<div className="details">
									<div className="name">{con.user.firstName} {con.user.lastName}</div>
									{/*<div
										className="message">{utilMethods.getSmallerString(con.lastMessage, 28)}</div>*/}
								</div>
								<div className="time">11:30</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			))}
			{!!localSearchedList.length && <div className={"search-conversation-holder"}>
				<div className="title">People</div>
				{searchedList.map((people, index) => (
					<div className="conversation-list__component"
					     key={people._id}
					     onClick={() => setSearchedPeopleActive(people)}>
						<div className="motion">
							<div className="motion-swipe-to-del">
								<div className="conversation-list-element">
									<div className="container-elem">
									<div className="pic">
										<img src={people.profilePicUrl}/>
									</div>
									<div className="details">
										<div className="name">{people.firstName} {people.lastName}</div>
									</div>
								</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>}
		</React.Fragment>
	)
}

export default ConversationList;