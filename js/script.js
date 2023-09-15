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

	const burgerButton = document.querySelector('.menu__icon');
	function addClassOpenToDocument() {
		document.documentElement.classList.toggle('menu-open');
	}
	burgerButton.addEventListener('click', addClassOpenToDocument)

	// burger button


	// dinamic adaptive 

	const parentOriginal = document.querySelector('.header__actions'),
			parent = document.querySelector('.menu__body'),
			item = document.querySelector('.header__action');

	// window.addEventListener('resize', (e) => {
	// 	const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	// 	if(viewportWidth <= 962) {
	// 		if (!item.classList.contains('done')) {
	// 			parent.insertBefore(item, parent.children[2]);
	// 			item.classList.add('done');
	// 		}	else {
	// 			if (item.classList.contains('done')) {
	// 				parentOriginal.insertBefore(item, parentOriginal.children[2]);
	// 				item.classList.remove('done');
	// 			}
	// 		}
	// 	}
	// })
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

})