import react,{useState} from "react";


const Inputs = () => {
	const [tareas, setTareas] = useState([]);
	
	return (
		<div className="container bg-success bg-opacity-10 h-25 mt-4 p-5 w-50 rounded">
			<h3 className="text-center text-muted">Tasks</h3>
			<div className="border border-light border-bottom-0 mt-0 rounded">
			    <input className="form-control-md w-100 border-0 bg-dark bg-opacity-10 text-muted rounded" type="text" placeholder='What needs to be done?' onKeyDown={(event)=>{
				    if (event.key === 'Enter') {
				    	setTareas([...tareas, event.target.value])
				    	event.target.value=""
		            }}}/>
            </div>
        </div>
	)}
   export default Inputs;     