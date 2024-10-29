/**
 * Operate Carousel
 */

function operateCarousel(noOfSlides: number) {
	function visibleButtonState(displacementValue) {
		//Check if window is laptop screen size
		if (window.innerWidth > 1024) {
			return;
		}
	
		if (displacementValue === noOfSlides) {
			rightButton.style.display = 'none';
		} else if (displacementValue === 0) {
			leftButton.style.display = 'none';
		} else {
			rightButton.style.display = 'block';
			leftButton.style.display = 'block';
		}
	}
	
	let displaceValue = 0;
	
	const leftButton = document.getElementById('left-arrow');
	const rightButton = document.getElementById('right-arrow');
	const slideContainers = document.querySelectorAll('.slide-container');
	
	//Left button does not appear on first load
	leftButton.style.display = 'none';
	
	//Create observer for slide container
	const carouselOptions = {
		root: document.querySelector('#carousel-container'),
		rootMargin: '0px',
		threshold: 1,
	};
	
	const carouselObserve = new IntersectionObserver((entries) => {
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




export {
	operateCarousel,
};
