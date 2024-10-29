import '@styles/index.css';
import '@styles/App.css';
import React, {useEffect} from 'react';
import CarouselContainer from './carousel-container';
import { operateCarousel } from '@/src/utils/carousel';

// Carousel Component - displays carousel containers
const ProjectSlide: React.FC<ProjectSlideProps> = ({ projects }) => {

    useEffect(()=>{

		operateCarousel(projects.length)

	}, [])
	return (
		<section className='my-projects-container content-container'>
			<div className='my-projects-title'>
				<h2>Projects</h2>
			</div>

			<div
				className='my-projects-carousel-container'
				id='carousel-container'
			>
				{/*Arrow icons*/}
				<img
					src='src\assets\arrow-circle-left-svgrepo-com.svg'
					className='left-arrow'
					id='left-arrow'
				/>
				<img
					src='src\assets\arrow-circle-right-svgrepo-com.svg'
					className='right-arrow'
					id='right-arrow'
				/>

				{/*Slides*/}
				{projects.map((project, index) => {
					return (
						<CarouselContainer
                            key={index}
							index={index}
							project={project}
						/>
					);
				})}
			</div>

			{/* See more section to add, depending on no of projects <div></div> */}
		</section>
	);
};

export default ProjectSlide;
