import React from 'react';
import './control-panel.scss';
import {motion} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGlobe, faUsers, faEye, faPhone } from '@fortawesome/free-solid-svg-icons'

const ControlPanel = () => {
	const actions = [{
		name: 'world',
		active: false,
		icon: faGlobe
	}, {
		name: 'people',
		active: false,
		icon: faUsers
	}, {
		name: 'status',
		active: false,
		icon: faEye
	}, {
		name: 'calls',
		active: false,
		icon: faPhone
	}];
	return (
		<div className="control-panel">
			<div className="action-holder">
				{
					actions.map(action => (<motion.div className="action" whileHover={{
						scale: 1.2
					}}>
						<div className="content" title={action.name}>
							<FontAwesomeIcon color={'#313131'} size="lg" icon={action.icon}/>
						</div>
					</motion.div>))
				}
			</div>
		</div>
	);
}

export default ControlPanel;