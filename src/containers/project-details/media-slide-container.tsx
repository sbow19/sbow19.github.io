import '@styles/index.css';
import '@styles/App.css';
import React from 'react';

const MediaElementHelper = (media, index) => {
	if (media.includes('.mp4')) {
		return (
			<div className='video-container'>
				<video
					key={index}
					className='project-media'
					controls
				>
					<source
						src={media}
						type='video/mp4'
					/>
				</video>
			</div>
		);
	} else {
		return (
			<div className='image-container'>
				<img
					key={index}
					className='project-media'
					src={media}
				/>
			</div>
		);
	}
};

const MediaSlideContainer: React.FC = ({ media, index }) => {
	const slideClassName = `slide-container slide-${index}`;
	const MediaElement = MediaElementHelper(media, index);

	return (
		<article className={slideClassName}>
			<div className='slide'>
				{/* Media */}
				{MediaElement}
			</div>
		</article>
	);
};

export default MediaSlideContainer;
