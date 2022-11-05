import React from 'react';
import propTypes from 'prop-types';

const Inputs = (props) => {	
	return (
		<div className="bg-success bg-opacity-10 h-20 mt-4 rounded">
			<h3 className="text-center text-muted">Tasks</h3>
			<div className="border border-light border-bottom-0 mt-0 rounded">
			    <input className="form-control-md w-100 border-0 bg-dark bg-opacity-10 text-muted rounded" type="text" placeholder='What needs to be done?' onKeyDown={(event)=>{
				    if (event.key === 'Enter') {
				    	props.OnChage(event.target.value)
				    	event.target.value=""
		            }}}/>
            </div>
        </div>
	)
}

Inputs.propTypes={
    OnChage:propTypes.func
};

export default Inputs;     

