console.log('The fish knows'); 

/*********** Home **********/

const movieTitles = document.querySelectorAll('.movieTitle');

let el; 

function toggleBg() {
	document.querySelector('body').classList.toggle('is-changed-' + el.id);
	document.querySelector('header').classList.toggle('is-changed');
	document.querySelector('footer').classList.toggle('is-changed');
	movieTitles.forEach(movieTitle => {
		movieTitle.classList.toggle('is-changed');
	});
}

movieTitles.forEach(movieTitle => {
	movieTitle.addEventListener('mouseover', function() {
		el = movieTitle;
		toggleBg();
	})
	movieTitle.addEventListener('mouseout', function() {
		toggleBg();
	})
});

/*********** Menu **********/

const nav = document.querySelector('.nav'),
			menu = document.querySelector('.menu'), 
			closeMenu = document.querySelector('.closeMenu'); 

menu.addEventListener('click', function() {
	menu.classList.toggle('is-clicked'); 
	nav.classList.toggle('is-clicked');
	movieTitles.forEach(movieTitle => {
		movieTitle.classList.toggle('is-clicked');
	});
}); 

