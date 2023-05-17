import React, {useEffect} from 'react';
import './App.scss';
import NbodySimulator from 'nbody-simulator-react-p5';
import {useRef} from 'react';

const App = () => {
	const divRef = useRef(null);
	const [isLoaded, setIsLoaded] = React.useState(false);

	useEffect(() => {
		if (divRef.current) {
			setIsLoaded(true);
		}
	}, [divRef]);

	return (
		<div className='App' ref={divRef}>
			{isLoaded
				? (<NbodySimulator parentRef={divRef}/>)
				: (<div>Is loaded</div>)
			}
		</div>
	);
};

export default App;
