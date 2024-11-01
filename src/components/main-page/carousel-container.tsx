import '@styles/index.css';
import '@styles/App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const CarouselContainer: React.FC<CarouselContainerProps> = ({
	project,
	index,
}) => {
	const slideClassName = `slide-container slide-${index}`;
	const githubLink = `${project.links.github}`

	return (
		<article className={slideClassName}>
			<div className='slide'>
				<h3>{project.name}</h3>
				<div className='project-icon-container'>
					{project.icons.map((icon, index) => {
						return icon ? (
							<img
								key={index}
								className='project-icon'
								src={icon}
							/>
						) : null;
					})}
				</div>
				<div className='project-description'>
					<p>{project.description}</p>
					<ul className='project-list'>
						{project.technologies.map((tech, index) => (
							<li key={index}>
								<strong>{tech}</strong>
							</li>
						))}
					</ul>
				</div>

				<div className='carousel-links-wrapper'>
					<Link to={`/projects/${project.id}`} className='website-link'>More details</Link>
					{project.links.github ? (
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
