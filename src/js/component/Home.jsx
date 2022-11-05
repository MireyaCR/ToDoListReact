import React, { useState } from 'react';
import Footer from './Footer.jsx';
import Inputs from './Inputs.jsx';

const Home = () => {
	const [tareas, setTareas] = useState([]);

	return (
		<div className="container-fluid w-50">
			<Inputs OnChage={(value)=>{
				setTareas([...tareas,value])
			}}/>			
			<ul className="list-group bg-success bg-opacity-10 border-light list-group-flush">
				{tareas.map((element, index) => <li key={index+'li'} className="list-group-item bg-light bg-opacity-10"
				onMouseEnter={(event)=>{
					event.target.childNodes[1].style.visibility="visible"
				}}
				onMouseLeave={(event)=>{
					event.target.childNodes[1].style.visibility="hidden"
				}}>{element}
				<button type="button" className="btn-close float-end" key={index} onClick={(event)=>{
					tareas.splice(index,1)
					setTareas([...tareas])
				}}> </button>
				</li>)}	
			</ul>
			<Footer length={tareas.length}/>							
		</div>
)};


export default Home;