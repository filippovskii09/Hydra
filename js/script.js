window.addEventListener('DOMContentLoaded', () => {
	// header show on scroll 
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
	// header show on scroll 

	// burger button

	const burgerButton = document.querySelector('.menu__icon'),
			html = document.documentElement,
			body = document.body;

	function addClassOpenToDocument() {
		document.documentElement.classList.toggle('menu-open');
		if (!html.classList.contains('hide') && !body.classList.contains('hide')) {
			html.classList.add('hide');
			body.classList.add('hide');
		} else {
			html.classList.remove('hide');
			body.classList.remove('hide');
		}
	}
	
	burgerButton.addEventListener('click', addClassOpenToDocument)

	// burger button


	// dinamic adaptive 

	const parentOriginal = document.querySelector('.header__actions'),
			parent = document.querySelector('.menu__body'),
			item = document.querySelector('.header__action');

	const mediaQuery = window.matchMedia('(max-width: 962px)');

	function handleMediaChange(e) {
	    if (e.matches) {
	        if (!item.classList.contains('done')) {
	            parent.insertBefore(item, parent.children[2]);
	            item.classList.add('done');
	        }
	    } else {
	        if (item.classList.contains('done')) {
	            parentOriginal.insertBefore(item, parentOriginal.children[1]);
	            item.classList.remove('done');
	        }
	    }
	}

	mediaQuery.addListener(handleMediaChange);
	handleMediaChange(mediaQuery);



	const paralax = (section) => {
		const elements = document.querySelectorAll('[data-mouse]')

		section.addEventListener('mousemove', (event) => {
			let { width, height } = section.getBoundingClientRect();
			let offX = event.pageX - (width * 0.5)
			let offY = event.pageY - (height * 0.5)
	
			// const wrapper = document.querySelector('.main__decors');
	
			elements.forEach(element => {
				const speed = element.getAttribute('data-speed');
				const x = (offX * speed) / 100;
				const y = (offY * speed) /100;
				
				element.style.transform = `translateX(${x}px) translateY(${y}px)`
			})
		})

		section.addEventListener('mouseleave', () => {
			elements.forEach(element => {
				element.style.transform = `translateX(0px) translateY(0px)`
			})
		})
	}
	
	paralax(document.querySelector('.main'));

})