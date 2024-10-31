import '@styles/index.css';
import '@styles/App.css';
import React from 'react';

const ProjectDetailsDropdown: React.FC<ProjectDetailsDropdownProps> = ({projects, onSelect: handleSelect})=>{

    return(
        <div className="project-list-dropdown">
            <label for="projects-list">Choose a project:</label>
            <select id="projects-list" name="projects-list" onChange={handleSelect}>
                <option value="">--Select project--</option>
                {projects.map((project, index)=>{
                    return (
                        <option 
                            className='dropdown-options'
                            value={project.name}
                            key={index}
                        >
                            {project.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default ProjectDetailsDropdown;