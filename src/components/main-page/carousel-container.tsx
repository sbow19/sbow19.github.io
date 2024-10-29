import '@styles/index.css';
import '@styles/App.css';
import React from 'react';

const CarouselContainer: React.FC<CarouselContainerProps> = ({ project, index }) => {

    const slideClassName = `slide-container slide-${index}`

	
	return (
		<article className={slideClassName}>
			<div className='slide'>
				<h3>{project.name}</h3>
				<div className='project-icon-container'>
					{project.icons.map((icon, index) => {
						return (icon ? (<img
								key={index}
								className='project-icon'
								src={icon}
							/>) : null
						);
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

				{project.links.github ? (
					<a
						href='https://github.com/sbow19/VocabPanda'
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
		</article>
	);
};

export default CarouselContainer;
