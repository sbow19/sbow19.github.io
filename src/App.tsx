
import ProjectContext from './context/content_context';

import { RouterProvider } from 'react-router-dom';
import appRouter from './routes/router';

//Import Yaml file containing experience information
import Yaml from "experience.yaml"


function App() {

	// Website context info
	const YamlContent = Yaml as YAMLContent
	
	return (

		<ProjectContext.Provider value={YamlContent}>
			<RouterProvider router={appRouter}/>
		</ProjectContext.Provider>
	);
}

export default App;
