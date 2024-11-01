/**
 * Operate Carousel
 */
function operateCarousel(
	noOfSlides: number,
	leftArrow: string,
	rightArrow: string,
) {
	function visibleButtonState(displacementValue) {
		//Check if window is laptop screen size

		if (displacementValue === noOfSlides - 1) {
			rightButton.style.display = 'none';
		} else if (displacementValue === 0) {
			leftButton.style.display = 'none';
		} else {
			rightButton.style.display = 'block';
			leftButton.style.display = 'block';
		}
	}

	let displaceValue = 0;

	const leftButton = document.getElementById(leftArrow);
	const rightButton = document.getElementById(rightArrow);
	const slideContainers = document.querySelectorAll('.slide-container');

	//Left button does not appear on first load
	leftButton.style.display = 'none';

	//Create observer for slide container
	const carouselOptions = {
		root: document.querySelector('#carousel-container'),
		rootMargin: '100px',
		threshold: 1,
	};

	const carouselObserve = new IntersectionObserver((entries) => {
		// Pause all videos
		const videos = document.querySelectorAll('video');
		// Pause each video
		videos.forEach((video) => {
			video.pause();
		});

		// Make elements appear/disappear depending on whether in view
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				entry.target.style.opacity = 0;
			} else if (entry.isIntersecting) {
				entry.target.style.opacity = 1;
			}
		});
	}, carouselOptions);

	//Observe target elements
	slideContainers.forEach((slide) => carouselObserve.observe(slide));

	rightButton.addEventListener('click', () => {
		//Displace carousel
		if (displaceValue < noOfSlides) {
			displaceValue++;

			//Make sure that displacement amount is absolute
			const displaceAmount = 0 + displaceValue * 100;

			slideContainers.forEach((container) => {
				container.style.transform = `translateX(${-displaceAmount}%)`;
			});
		}

		//Check button state
		visibleButtonState(displaceValue);
	});

	leftButton.addEventListener('click', () => {
		//Displace carousel
		if (displaceValue > 0) {
			displaceValue--;

			//Make sure that displacement amount is absolute
			const displaceAmount = 0 + displaceValue * 100;

			slideContainers.forEach((container) => {
				container.style.transform = `translateX(${-displaceAmount}%)`;
			});
		}

		//Check button state
		visibleButtonState(displaceValue);
	});
}

const resetCarousel = () => {
	//Reset translation of slides
	const slideContainers = document.querySelectorAll('.slide-container');
	slideContainers.forEach((container) => {
		container.style.transform = `translateX(0%)`;
	});
};

export { operateCarousel, resetCarousel };
