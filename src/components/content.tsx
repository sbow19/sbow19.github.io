import '@styles/index.css';
import '@styles/App.css';
import React, { useEffect } from 'react';

import ProjectSlideContainer from '@containers/main-page/project-slide-container';
import ContentContainer from './shared/content-container';
import Contacts from './main-page/contacts';
import Skills from './main-page/skiills';
import AboutMe from './main-page/about-me';



const Content: React.FC = () => {
	useEffect(() => {
		// FadeIn function
		const fadeIn = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('appear');
					observer.unobserve(entry.target);
				}
			});
		};

		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1,
		};

		const observer = new IntersectionObserver(fadeIn, options);

		// Select the page blocks
		const sections = document.querySelectorAll('.content-container');

		sections.forEach((section) => {
			observer.observe(section);
		});

		// Cleanup function to disconnect observer
		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []); // Empty dependency array to run only on mount

	return (
		<main className='about'>
			{/*About me section*/}
			<ContentContainer
				classNames={['about-me-container']}
				element='section'
			>
				<AboutMe />
			</ContentContainer>
			{/*Skills section*/}
			<ContentContainer
				classNames={['my-skills-container']}
				element='section'
			>
				<Skills />
			</ContentContainer>
			{/*Projects section*/}
			<ProjectSlideContainer />

			{/*Contact details*/}
			<ContentContainer
				classNames={['contacts-aside-container']}
				element='aside'
			>
				<Contacts />
			</ContentContainer>
		</main>
	);
};

export default Content;
