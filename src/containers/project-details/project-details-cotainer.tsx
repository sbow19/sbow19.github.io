import '@styles/index.css';
import '@styles/App.css';
import React, { useState, useCallback } from 'react';
import ContentContainer from '@/src/components/shared/content-container';
import ProjectDetailsSlideContainer from './project-details-slide-container';

const ProjectDetailsContainer: React.FC<ProjectDetails> = ({ project }) => {
	//Selected information point
	const [selectedInfo, setSelectedInfo] = useState('overview');

	const slides = [
		'overview',
		'features',
		'technologies',
		'challenges',
		'future',
		'code',
	];

	const handleSetInfo = useCallback((slideType) => {
		setSelectedInfo(slideType);
	}, []); // Add selectedInfo as a dependency

	if (Object.keys(project).length < 1) {
		return (
			<ContentContainer
				element='div'
				classNames={['project-details-container-empty']}
			>
				<p className='select-project-prompt'>Please Select project...</p>
			</ContentContainer>
		);
	}
	{
		return (
			<ContentContainer
				element='div'
				classNames={['project-details-container']}
			>
				<h2 className='project-details-title'>{project.name}</h2>

				{/* Selected info pane */}
				<ProjectDetailsSlideContainer
					slideType={selectedInfo}
					project={project}
					isSlideTurnedOn={true}
				/>

				<div className='info-buttons-wrapper'>
					{/* Set floating/clickable info buttons */}
					{slides.map((slideType, index) => {
						return (
							<ProjectDetailsSlideContainer
								slideType={slideType}
								project={project}
								isSlideTurnedOn={false}
								handleSetInfo={handleSetInfo}
								key={slideType}
								selectedInfo={selectedInfo}
							/>
						);
					})}
				</div>
			</ContentContainer>
		);
	}
};

export default ProjectDetailsContainer;
