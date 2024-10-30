import '@styles/index.css';
import '@styles/App.css';
import React, {useContext} from 'react';
import ProjectSlide from '@/src/components/main-page/project-slide';

//Import contexts
import ContentContext from '@/src/context/content_context';

// Stateful container for experience carousel on main page
const ProjectSlideContainer: React.FC = () => {

    // Parse YAML content served to client 
    const projectsList: YAMLContent = useContext(ContentContext)

	return (
        
        <ProjectSlide 
            projects={projectsList.root.projects}
        />
        
    );
};

export default ProjectSlideContainer;
