import '@styles/index.css';
import '@styles/App.css';
import React from 'react';

const AboutMe: React.FC = () => {
	return (
		<>
			<div className='profile-img-wrapper'>
				<img
					alt='Sam Bowditch'
					src='src\assets\Screenshot 2024-03-05 150356.png'
				/>
				{/* Must be of proper resolution for screen size*/}
			</div>
			<div className='about-me-text-container'>
				<div className='about-me-title'>
					<h2>About me</h2>
				</div>
				<div className='about-me-text'>
					I am an aspiring self-taught developer with a strong analytical
					background in corporate intelligence and law. I decided to take a career
					break after learning how to program in my free time at my previous
					job.

					<br/>
					<br/>
					
					I have been making use of online teaching platforms like MDN Web Docs and CodeCademy, while working on
					personal projects to put these news skills into practice. I have taken
					a keen interest in developing Android and Chrome Extension
					applications using React and React Native, so my current strengths
					center around JavaScript/Typescript and NodeJs. I am now confident
					enough to gain professional experience in a professional developer
					environment.

					<br/>
					<br/>

					I am based in Rio de Janeiro, Brazil
				</div>
			</div>
		</>
	);
};

export default AboutMe;
