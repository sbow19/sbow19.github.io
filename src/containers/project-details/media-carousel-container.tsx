import '@styles/index.css';
import '@styles/App.css';
import React, { useEffect } from 'react';
import { operateCarousel, resetCarousel } from '@/src/utils/carousel';
import MediaSlideContainer from './media-slide-container';

const MediaCarouselContainer = ({ mediaList }) => {
	useEffect(() => {
		operateCarousel(mediaList.length, 'media-left-arrow', 'media-right-arrow');

		return (resetCarousel)
	}, [mediaList]);

	//Guard against no media
	if (typeof mediaList === 'string') {
		return <></>;
	}

	return (
		<div
			className='media-container-outer'
			id='carousel-container'
		>
			{/*Arrow icons*/}
			<img
				src='src\assets\arrow-circle-left-svgrepo-com.svg'
				className='media-left-arrow'
				id='media-left-arrow'
			/>
			<img
				src='src\assets\arrow-circle-right-svgrepo-com.svg'
				className='media-right-arrow'
				id='media-right-arrow'
			/>

			{/*Slides*/}
			{mediaList.map((media, index) => {
				return (
					<MediaSlideContainer
						key={index}
						index={index}
						media={media}
					/>
				);
			})}
		</div>
	);
};

export default MediaCarouselContainer;
