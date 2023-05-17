import React from 'react';
import './App.scss';
import NbodySimulator from 'nbody-simulator-react-p5';
import {useRef} from 'react';

const App = () => {
	const divRef = useRef(null);
	return (
		<div className='App' ref={divRef}>
			<NbodySimulator parentRef={divRef}/>
		</div>
	);
};

export default App;
