import '@styles/index.css';
import '@styles/App.css';
import React from 'react';
import ProjectSlide from '@/src/components/main-page/project-slide';

//Import Yaml file containing experience information
import Yaml from "experience.yaml"

const YamlContent = Yaml as YAMLContent

// Stateful container for experience carousel on main page
const ProjectSlideContainer: React.FC = () => {

    // Parse YAML content served to client 
    console.log(YamlContent.root.projects)

	return (
        
        <ProjectSlide 
            projects={YamlContent.root.projects}
        />
        
    );
};

export default ProjectSlideContainer;
