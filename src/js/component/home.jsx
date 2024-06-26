import React, { useState, useEffect } from "react";
import './styles.css'

//include images into your bundle

//create your first component
const Home = () => {
	const [color, setColor] = useState('');
	return (
		<div className="traffic-light">
			<div onClick={() => setColor('red')} className={`light red ${(color === 'red') ? 'active' : ''} `}></div>
			<div onClick={() => setColor('yellow')} className={`light yellow ${(color === 'yellow') ? 'active' : ''} `}></div>
			<div onClick={() => setColor('green')} className={`light green ${(color === 'green') ? 'active' : ''} `}></div>
		</div>
	);
};

export default Home;


