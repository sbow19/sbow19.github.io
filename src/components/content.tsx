import '@styles/index.css';
import '@styles/App.css';
import React, { useEffect } from 'react';

import ProjectSlideContainer from '@containers/main-page/project-slide-container';

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
		<main>
			
			{/*About me section*/}
			<section className='about-me-container content-container'>
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
						background in corporate intelligence and law. I am keen to leverage
						two-and-a-half years experience at a large multi-national audit firm
						to transition to software development. I decided to take a career
						break after learning how to program in my free time at my previous
						job. As the basis of my learning, I have been making use of online
						teaching platforms like MDN Web Docs and CodeCademy, while working
						on personal projects to put these news skills into practice. I have
						taken a keen interest in developing Android and Chrome Extension
						applications using React and React Native, so my current strengths
						center around JavaScript/Typescript and NodeJs. I am now confident
						enough to gain professional experience in a professional developer
						environment. I am based in Brazil for the next year and anticipate
						staying here for the medium term
					</div>
				</div>
			</section>
			{/*Skills section*/}
			<section className='my-skills-container content-container'>
				<div className='my-skills-title'>
					<h2>Skills</h2>
				</div>
				<div className='my-skills-content-container'>
					<ul className='skills-list-container'>
						<li className='skill-container'>
							<h3>Programming languages: </h3>
							<p>
								Proficient in <strong>JavaScript</strong> and{' '}
								<strong>TypeScript</strong> (intermediate level), with
								experience in <strong>Python</strong> (intermediate level).
							</p>
						</li>
						<li className='skill-container'>
							<h3>Web technologies:</h3>
							<p>
								Skilled in creating responsive and accessible web pages using{' '}
								<strong>HTML5</strong> and <strong>CSS3</strong>.
							</p>
						</li>
						<li className='skill-container'>
							<h3>Frameworks:</h3>
							<p>
								Experience in building developing a dynamic mobile application
								using <strong>React Native</strong> (basic to intermediate
								level).{' '}
							</p>
						</li>
						<li className='skill-container'>
							<h3>Other technologies:</h3>
							<p>
								{' '}
								Knowledgeable in version control with <strong>Git</strong>,
								managing databases with <strong>SQLite</strong> and{' '}
								<strong>MySQL</strong>, designing <strong>RESTful APIs</strong>,
								and backend development with <strong>Node.js</strong>.
								Proficient in using <strong>VSCode</strong> as a development
								environment.
							</p>
						</li>
						<li className='skill-container'>
							<h3>Soft skills:</h3>
							<p>
								Proven ability in <strong>project management</strong>, keen{' '}
								<strong>attention to detail</strong>, strong{' '}
								<strong>team-player</strong> qualities, and a{' '}
								<strong>creative thinker</strong> capable of innovative
								solutions.
							</p>
						</li>
					</ul>
				</div>
			</section>
			{/*Projects section*/}
			<ProjectSlideContainer/>
			
			{/*Contact details*/}
			<aside className='contacts-aside-container content-container'>
				<div className='contacts-title'>
					<h2>Contacts</h2>
				</div>

				<ul className='contacts-content-wrapper'>
					<li>
						<a href='mailto:zctlsab@gmail.com'>
							<img
								src='src\assets\envelope-regular.svg'
								className='social-icons'
							/>
							<p>Email: zctlsab@gmail.com</p>
						</a>
					</li>

					<li>
						<a
							href='https://github.com/sbow19'
							target='_blank'
						>
							<img
								src='src\assets\github.svg'
								className='social-icons'
							/>
							<p>Github</p>
						</a>
					</li>

					<li>
						<a
							href='https://www.linkedin.com/in/sam-bowditch-b777032bb'
							target='_blank'
						>
							<img
								src='src\assets\linkedin.svg'
								className='social-icons'
							/>
							<p>LinkedIn</p>
						</a>
					</li>
				</ul>
			</aside>
		</main>
	);
};

export default Content;
