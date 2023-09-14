window.addEventListener('DOMContentLoaded', () => {

	const header = document.querySelector('.header');

	window.addEventListener('scroll', () => {
		let scrollPos = window.scrollY;

		console.log(scrollPos);
		if (scrollPos > 150) {
			header.classList.add('fixed')
		} else {
			header.classList.remove('fixed')
		}
	})
})