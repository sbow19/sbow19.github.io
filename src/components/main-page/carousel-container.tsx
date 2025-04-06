/**
 * Container for a particular project
 */
import '@styles/index.css';
import '@styles/App.css';
import React from 'react';
import ProjectContainer from './project-container';

const CarouselContainer: React.FC<CarouselContainerProps> = ({
	project,
	index,
}) => {
	const slideClassName = `slide-container slide-${index}`;
	const githubLink = `${project.links?.github ?? ""}`

	return (
		<article className={slideClassName} key={index}>
			<div className='slide'>

				{/* Header */}
				<h3>{project.name}</h3>
				
				{/* Content Container*/}
				<div className='project-container'>
					<ProjectContainer project={project}/>
				</div>

				{/* Github link wrapper */}
				<div className='carousel-links-wrapper'>
					{project.links?.github ?? "" ? (
						<a
							href={githubLink}
							target='_blank'
							className='view-project-on-github'
						>
							<p>View on Github</p>
							<img
								src='src\assets\github.svg'
								className='social-icons'
							/>
						</a>
					) : null}
				</div>
			</div>
		</article>
	);
};

export default CarouselContainer;
