import '@styles/index.css';
import '@styles/App.css';
import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import ContentContext from '@/src/context/content_context';

import { useParams } from 'react-router';

//Content containers
import ContentContainer from '@/src/components/shared/content-container';
import ProjectDetailsIntro from '@/src/components/project-details/project-details-intro';
import ProjectDetailsDropdown from '@/src/components/project-details/project-names-dropdown';
import ScrollToTop from '@/src/utils/scroll-to-top';
import ProjectDetailsContainer from './project-details-cotainer';

const ProjectsOverviewContainer: React.FC = ()=>{

    // Fetch YAML content from context
    const YamlContent = useContext(ContentContext)

    //Get Search params
    const { name } = useParams();

    //Project selection state
    const [ selectedProject, setSelectedProject ] = useState("");
    const [ selectedProjectDetails, setSelectedProjectDetails ] = useState("")

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>)=>{
        setSelectedProject(event.target.value)

        setSelectedProjectDetails((prev)=>{
            return  {...YamlContent.root.projects.find(project=>project.name === event.target.value)}
        })
    }

    //Set project details
    useEffect(()=>{

        const projects = YamlContent.root.projects;

        if(projects.some(project=>{
            return project.id === name;
        })){
            setSelectedProject(name)
        }

        setSelectedProjectDetails((prev)=>{
            return  {...YamlContent.root.projects.find(project=>project.id === name)}
        })
        
    }, [])

    return (
		<main className='projects'>
            {/* Ensures that we scroll to top on redirect */}
            <ScrollToTop/>
            {/* Projects list home page */}
            <ContentContainer classNames={["projects-intro-container"]} element='section'>
                <ProjectDetailsIntro />
            </ContentContainer>
            {/* Project Dropdown */}
            <ContentContainer element='div' classNames={["projects-dropdown-container"]}>
                <ProjectDetailsDropdown 
                    projects={YamlContent.root.projects}
                    onSelect={handleSelect}
                />
            </ContentContainer>

            {/* Project details */}
            <ProjectDetailsContainer project={selectedProjectDetails}/>
            
      
		</main>
	);
}

export default ProjectsOverviewContainer