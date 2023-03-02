import React, {FC, useEffect} from 'react';
// import TextDemo from './demo/TextDemo'
// import BoxDemo from './demo/BoxDemo'
// import StaticDemo from './demo/StaticDemo'
// import Transform from './demo/Transform'
// import UseInputDemo from './demo/useInputDemo'
// import UseFocusDemo from './demo/useFocusDemo'
import HomePage from './view'

const App: FC<{name?: string, cli?: Object}> = ({ cli }) => {
	// <>
	// {/* <TextDemo/> */}
	// {/* <BoxDemo /> */}
	// {/* <StaticDemo /> */}
	// {/* <Transform /> */}
	// {/* <UseInputDemo /> */}
	// {/* <UseFocusDemo /> */}
	// </>
	useEffect(() => {
		console.log('mounted:', cli)
	}, [])
	return <HomePage/>
};

module.exports = App;
export default App;
