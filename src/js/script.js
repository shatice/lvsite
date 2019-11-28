console.log('The fish knows'); 

/*********** Home **********/

const movieTitles = document.querySelectorAll('.movieTitle');

let el; 

// function toggleBg() {
// 	document.querySelector('body').classList.toggle('is-changed-' + el.id);
// 	document.querySelector('header').classList.toggle('is-changed');
// 	document.querySelector('footer').classList.toggle('is-changed');
// 	movieTitles.forEach(movieTitle => {
// 		movieTitle.classList.toggle('is-changed');
// 	});
// }

// movieTitles.forEach(movieTitle => {
// 	movieTitle.addEventListener('mouseover', function() {
// 		el = movieTitle;
// 		toggleBg();
// 	})
// 	movieTitle.addEventListener('mouseout', function() {
// 		toggleBg();
// 	})
// });

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

// function openMovie() {
// 	let movies = document.querySelectorAll('.movie');
// 	let movieInfos = document.querySelector('.desiderareMovie');
// 	let back = document.getElementById('back'); 
// 	let moviesLinks = document.getElementById('moviesLinks'); 
// 	let body = document.querySelector('body'); 

// 	document.querySelector('.movieTitle p').addEventListener('click', function() {
// 		console.log('ok'); 

// 		back.classList.add('is-clicked'); 
// 		movieInfos.classList.add('is-clicked'); 
// 		moviesLinks.classList.add('is-removed'); 
// 		body.classList.add('is-hidden');  
	
// 		// movies.forEach(movie => {
// 		// 	movie.style.display = "none"; 
// 		// });
// 	})
	
// 	back.addEventListener('click', function() {
// 		console.log('back'); 
// 		back.classList.remove('is-clicked'); 
// 		movieInfos.classList.remove('is-clicked'); 
// 		moviesLinks.classList.remove('is-removed'); 
// 		body.classList.remove('is-hidden'); 

// 		// movies.forEach(movie => {
// 		// 	movie.style.display = "flex"; 
// 		// });
	
// 	})
// }

// openMovie(); 

