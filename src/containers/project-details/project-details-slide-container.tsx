import '@styles/index.css';
import '@styles/App.css';
import React from 'react';
import ContentContainer from '@/src/components/shared/content-container';

const mediaHelperFunction = (media)=>{

	let slideMedia = {
		rightBoxStyle: "right-box",
		slideMedia: ""
	}
	//If no slide media, then hide right bow)
	if(typeof(media) === "string"){
		slideMedia.rightBoxStyle = 'right-box-hide';
		
	} else {

		slideMedia.slideMedia = media.map((media, index) => (
			<img key={index} className='project-media' src={media} />
		))  				
	}

	return slideMedia

}

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
	let slideMedia = {
		rightBoxStyle: "right-box",
		slideMedia: ""
	}; 

	switch (slideType) {
		case 'overview':
			slideTitle = 'Overview';
			slideContents = project.overview.description.trim().split('\n').map((paragraph, index) => (
				<p key={index}>{paragraph}</p>
			));
			slideStyle = 'project-overview-slide'
			slideMedia = mediaHelperFunction(project.overview.media)
			break;
		case 'features':
			slideTitle = 'Features';
			slideStyle = 'project-features-slide';
			slideContents = project.features.map((feature, index) => (
				<p key={index}>{feature}</p>
			));
			slideMedia.rightBoxStyle = "right-box-hide"
			break;
		case 'technologies':
			slideTitle = 'Technologies';
			slideStyle = 'project-technologies-slide';
			slideMedia.rightBoxStyle = "right-box-hide"
			slideContents = project.full_technologies.map((technology, index) => (
				<p key={index}>{technology}</p>
			));
			break;
		case 'challenges':
			slideTitle = 'Challenges';
			slideStyle = 'project-challenges-slide';
			slideMedia.rightBoxStyle = "right-box-hide"
			slideContents = project.challenges.map((challenges, index) => (
				<p key={index}>{challenges}</p>
			));
			break;
		case 'future':
			slideTitle = 'Future Plans';
			slideStyle = 'project-future-slide';
			slideMedia.rightBoxStyle = "right-box-hide"
			slideContents = project.future.map((future, index) => (
				<p key={index}>{future}</p>
			));
			break;
		case 'code':
			slideTitle = 'Source Code';
			slideContents = project.code;
			slideStyle = 'project-code-slide';
			slideMedia.rightBoxStyle = "right-box-hide"

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
						<div className='left-box'>
							{slideContents}
						</div>

						{/* Right box */}
						<div className={slideMedia.rightBoxStyle}>
							{slideMedia.slideMedia}
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
