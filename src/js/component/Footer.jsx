import propTypes from 'prop-types';
import React from 'react';

const Footer = (props) => {
	return (
        <div >
				<div className="bg-success bg-opacity-10 border-light border-top shadow-sm mt-0 p-1 rounded"><small>{props.length} Task</small></div>
				<div className="bg-success bg-opacity-10 border-light shadow-sm mt-0 p-1 mx-2 rounded"></div>
				<div className="bg-success bg-opacity-10 border-light shadow-sm mt-0 p-1 mx-3 rounded"></div>			
		</div>
    )
};

Footer.propTypes={
    length:propTypes.number
};


export default Footer;