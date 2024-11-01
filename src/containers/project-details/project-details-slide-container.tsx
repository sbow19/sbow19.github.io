import '@styles/index.css';
import '@styles/App.css';
import React from 'react';
import ContentContainer from '@/src/components/shared/content-container';
import MediaCarouselContainer from './media-carousel-container';

const mediaHelperFunction = (media) => {
	//If no slide media, then hide right bow)
	if (typeof media === 'string') {
		return 'right-box-hide';
	} else {
		return 'right-box';
	}
};

const ProjectDetailsSlideContainer: React.FC = ({
	project,
	slideType,
	isSlideTurnedOn,
	handleSetInfo,
	selectedInfo,
}) => {
	//Slide title
	let slideTitle;
	let slideContents;
	let slideStyle;
	let rightBoxStyle;

	switch (slideType) {
		case 'overview':
			slideTitle = 'Overview';
			slideContents = project.overview.description
				.trim()
				.split('\n')
				.map((paragraph, index) => (
					<p key={index}>
						{paragraph}
						<hr />
					</p>
				));
			slideStyle = 'project-overview-slide';
			rightBoxStyle = mediaHelperFunction(project.overview.media);
			break;
		case 'features':
			slideTitle = 'Features';
			slideStyle = 'project-features-slide';
			slideContents = project.features.map((feature, index) => (
				<p key={index}>
					{feature}
					<hr />
				</p>
			));
			rightBoxStyle = 'right-box-hide';
			break;
		case 'technologies':
			slideTitle = 'Technologies';
			slideStyle = 'project-technologies-slide';
			rightBoxStyle = 'right-box-hide';
			slideContents = project.full_technologies.map((technology, index) => (
				<p key={index}>
					{technology} <hr />
				</p>
			));
			break;
		case 'challenges':
			slideTitle = 'Challenges';
			slideStyle = 'project-challenges-slide';
			rightBoxStyle = 'right-box-hide';
			slideContents = project.challenges.map((challenges, index) => (
				<p key={index}>
					{challenges}
					<hr />
				</p>
			));
			break;
		case 'future':
			slideTitle = 'Future Plans';
			slideStyle = 'project-future-slide';
			rightBoxStyle = 'right-box-hide';
			slideContents = project.future.map((future, index) => (
				<p key={index}>
					{future}
					<hr />
				</p>
			));
			break;
		case 'code':
			slideTitle = 'Source Code';
			slideStyle = 'project-code-slide';
			rightBoxStyle = 'right-box-hide';

			// If url then add <a> element
			if (project.code.includes('https')) {
				slideContents = (
					<a
						href={project.code}
						className='project-code-link'
					>
						{project.code}
					</a>
				);
			} else {
				slideContents = <p className='project-code-no-content'>{project.code}</p>;
			}

			break;
	}
	return (
		<>
			{isSlideTurnedOn ? (
				<ContentContainer
					element='section'
					classNames={[' project-slide', slideStyle]}
				>
					{/* Title */}
					<div className='project-info-title-wrapper'>
						<h3>{slideTitle}</h3>
					</div>

					<div className='project-details-boxes-wrapper'>
						{/* Left Box */}
						<div className='left-box'>{slideContents}</div>

						{/* Right box && carousel container */}
						<div className={rightBoxStyle}>
							<MediaCarouselContainer mediaList={project.overview.media} />
						</div>
					</div>
				</ContentContainer>
			) : (
				<ContentContainer
					element='section'
					classNames={[
						' p-s-minimised',
						selectedInfo === slideType ? 'info-button-highlighted' : '',
					]}
				>
					<button
						onClick={() => {
							handleSetInfo(slideType);
						}}
					>
						<h3>{slideTitle}</h3>
					</button>
				</ContentContainer>
			)}
		</>
	);
};
export default ProjectDetailsSlideContainer;
