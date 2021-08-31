import React, {FC} from 'react';
// import TextDemo from './demo/TextDemo'
// import BoxDemo from './demo/BoxDemo'
// import StaticDemo from './demo/StaticDemo'
// import Transform from './demo/Transform'
// import UseInputDemo from './demo/useInputDemo'
import UseFocusDemo from './demo/useFocusDemo'

const App: FC<{name?: string}> = () => (
	<>
	{/* <TextDemo/> */}
	{/* <BoxDemo /> */}
	{/* <StaticDemo /> */}
	{/* <Transform /> */}
	{/* <UseInputDemo /> */}
	<UseFocusDemo />
	</>
);

module.exports = App;
export default App;
