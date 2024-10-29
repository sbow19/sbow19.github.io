import '../styles/Main.css';
import '../styles/App.css';
import '../styles/Index.css';
import React from 'react';

const Main: React.FC = () => {
	return (
		<main>
			{/*About me section*/}
			<section className='about-me-container content-container'>
				<div className='profile-img-wrapper'>
					<img
						alt='Sam Bowditch'
						src='../assets/Screenshot 2024-03-05 150356.png'
					/>{' '}
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
						src='../assets/arrow-circle-left-svgrepo-com.svg'
						className='left-arrow'
						id='left-arrow'
					/>
					<img
						src='../assets/arrow-circle-right-svgrepo-com.svg'
						className='right-arrow'
						id='right-arrow'
					/>

					{/*Slides*/}
					<article className='slide-container slide-one'>
						<div className='slide'>
							<h3>Vocab Panda Vocabulary App</h3>
							<div className='project-icon-container'>
								<img
									className='project-icon'
									src='../assets/react.svg'
								/>
								<img
									className='project-icon'
									src='../assets/Node.js_logo.svg'
								/>
							</div>
							<div className='project-description'>
								<p>
									React Native Android app allowing users to play vocabulary
									flash card games. Features:
								</p>
								<ul className='project-list'>
									<li>
										<strong>Deepl RESTful API calls</strong>
									</li>
									<li>
										<strong>SQLite for local storage</strong>
									</li>
									<li>
										<strong>Search functionality</strong>
									</li>
									<li>
										<strong>Flashcard game loop</strong>
									</li>
									<li>
										<strong>NodeJs/ExpressJs backend</strong>
									</li>
								</ul>
							</div>
							<a
								href='https://github.com/sbow19/VocabPanda'
								target='_blank'
								className='view-project-on-github'
							>
								<p>View on Github</p>
								<img
									src='../assets/github.svg'
									className='social-icons'
								/>
							</a>
						</div>
					</article>
					<article className='slide-container slide-two'>
						<div className='slide'>
							<h3>Vocabulary Chrome Extension</h3>
							<div className='project-icon-container'>
								<img
									className='project-icon'
									src='../assets/chrome-extension.svg'
								/>
							</div>
							<div className='project-description'>
								<p>
									Chrome Extension allowing users to translate and foreign text
									on websites. Features:
								</p>
								<ul className='project-list'>
									<li>
										<strong>Chrome API</strong>
									</li>
									<li>
										<strong>JavaScript, HTML, and CSS</strong>
									</li>
									<li>
										<strong>IndexedDB for data persistance</strong>
									</li>
									<li>
										<strong>DOM interactivity</strong>
									</li>
									<li>
										<strong>Deepl RESTful API calls</strong>
									</li>
								</ul>
							</div>
							<a
								href='https://github.com/sbow19/vocab-tracker-extension'
								target='_blank'
								className='view-project-on-github'
							>
								<p>View on Github</p>
								<img
									src='../assets/github.svg'
									className='social-icons'
								/>
							</a>
						</div>
					</article>
					<article className='slide-container slide-three'>
						<div className='slide'>
							<h3>Tkinter GUI for SQL Queries</h3>
							<div className='project-icon-container'>
								<img
									className='project-icon'
									src='../assets/sqlite.svg'
								/>
								<img
									className='project-icon'
									src='../assets/Python-logo-notext.svg'
								/>
							</div>
							<div className='project-description'>
								<p>
									Tkinter GUI to query a custom SQLite database containing
									millions of rows of data. Features:
								</p>
								<ul className='project-list'>
									<li>
										<strong>SQLite using Python</strong>
									</li>
									<li>
										<strong>Ingestion and data cleaning</strong>
									</li>
									<li>
										<strong>Flexible search functionality</strong>
									</li>
									<li>
										<strong>Database indexing</strong>
									</li>
									<li>
										<strong>RESTful API queries</strong>
									</li>
									<li>
										<strong>Plotly Gantt charts for visualisation</strong>
									</li>
								</ul>
							</div>
							{/* <a href="https://github.com/sbow19/project-name" target="_blank"
                className="view-project-on-github">
                    <p>View on Github</p>
                    <img src="../assets/github.svg" className="social-icons"/>
                </a> */}
						</div>
					</article>
					<article className='slide-container slide-four'>
						<div className='slide'>
							<h3>MHTML Parser</h3>
							<div className='project-icon-container'>
								<img
									className='project-icon'
									src='../assets/Python-logo-notext.svg'
								/>
							</div>
							<div className='project-description'>
								<p>
									MHTML parser implemented in Python to parse website
									screenshots and output data to report templates. Features:
								</p>
								<ul className='project-list'>
									<li>
										<strong>Python class and module implementations</strong>
									</li>
									<li>
										<strong>
											Custom scripts for seven highly queried sites
										</strong>
									</li>
									<li>
										<strong>PyExcel library to write to templates</strong>
									</li>
									<li>
										<strong>BeautifulSoup library for parsing MHTML</strong>
									</li>
								</ul>
							</div>
							{/* <a href="https://github.com/sbow19/project-name" target="_blank"
                className="view-project-on-github">
                    <p>View on Github</p>
                    <img src="../assets/github.svg" className="social-icons"/>
                </a> */}
						</div>
					</article>
				</div>

				{/* See more section to add, depending on no of projects <div></div> */}
			</section>
			{/*Contact details*/}
			<aside className='contacts-aside-container content-container'>
				<div className='contacts-title'>
					<h2>Contacts</h2>
				</div>

				<ul className='contacts-content-wrapper'>
					<li>
						<a href='mailto:zctlsab@gmail.com'>
							<img
								src='../assets/envelope-regular.svg'
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
								src='../assets/github.svg'
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
								src='../assets/linkedin.svg'
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

export default Main;
