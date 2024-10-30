import { createContext } from 'react';

const YamlContentExample: YAMLContent = {
	root: {
		projects: [],
	},
};

const ContentContext = createContext<YAMLContent>(YamlContentExample);


export default ContentContext