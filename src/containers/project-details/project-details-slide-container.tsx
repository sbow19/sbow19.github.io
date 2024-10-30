import '@styles/index.css';
import '@styles/App.css';
import React from 'react';
import ContentContainer from '@/src/components/shared/content-container';

const ProjectDetailsSlideContainer: React.FC = ({
	project,
	slideType,
	isSlideTurnedOn,
	handleSetInfo,
    selectedInfo
}) => {
	//Slide title
	let slideTitle;
	let slideContents;

	switch (slideType) {
		case 'overview':
			slideTitle = 'Overview';
			slideContents = project.overview;
			break;
		case 'features':
			slideTitle = 'Features';
			slideContents = project.features;
			break;
		case 'technologies':
			slideTitle = 'Technologies';
			slideContents = project.full_technologies;
			break;
		case 'challenges':
			slideTitle = 'Challenges';
			slideContents = project.challenges;
			break;
		case 'future':
			slideTitle = 'Future Plans';
			slideContents = project.future;
			break;
		case 'code':
			slideTitle = 'Source Code';
			slideContents = project.code;

			break;
	}
	return (
		<>
			{isSlideTurnedOn ? (
				<ContentContainer
					element='section'
					classNames={[' project-slide']}
				>
					{/* Title */}
					<div className='project-info-title-wrapper'>
						<h3>{slideTitle}</h3>
					</div>

					<div className='project-details-boxes-wrapper'>
						{/* Left Box */}
						<div>Left box</div>

						{/* Right box */}
						<div>Right box</div>
					</div>
				</ContentContainer>
			) : (
				<ContentContainer
					element='section'
					classNames={[
                        ' p-s-minimised',
                        selectedInfo === slideType ? 'info-button-highlighted' : ""
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
