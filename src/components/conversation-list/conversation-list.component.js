import React, {useEffect, useRef} from 'react';
import data from "../data/conversation.data.js";
import utilMethods from "../../utils/util.methods"
import "./conversation-list.scss";
import "../../styles/_global.scss";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArchive, faTrash} from '@fortawesome/free-solid-svg-icons';

const ConversationList = () => {
	useEffect(() => {

	})
	const motionDiv = useRef({});
	const conversation = data;

	const handleOnDragEnd = (index, event, info) => {
	};

	return (
		conversation.map((con, index) => (
			<div className="conversation-list-component" key={con._id}
			     /*ref={(element) => motionDiv.current[index] = element}*/>
				<div className="motion">
					<motion.div
						className="motion-div"
						drag
						dragConstraints={{
							top: -0,
							left: -50,
							right: 50,
							bottom: 0,
						}}
						onDrag={(event, info) => handleOnDragEnd(index, event, info)}
					>
						<div className="motion-swipe-to-del">
							<div className="action">
								<button className="gbl-ch-button">
									<FontAwesomeIcon icon={faTrash}/>
								</button>
							</div>
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
							<div className="action">
								<button className="gbl-ch-button">
									<FontAwesomeIcon icon={faArchive}/>
								</button>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		))
	)
}

export default ConversationList;