import '@styles/index.css';
import '@styles/App.css';
import React from 'react';

const Contacts: React.FC = ()=>{
    return (<>
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
    </>)
}

export default Contacts;