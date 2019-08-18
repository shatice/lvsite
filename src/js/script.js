console.log('The fish knows');

let pathName = window.location.pathname; 

/********** Home -- Generate movies articles **********/

class Movie {
	constructor(modifier, title) {
		this.modifier = modifier; 
		this.title = title; 
	}
}

const desiderare = new Movie (
	'desiderare',
	'<p>DESIDERARE: <br>cor ne adito</p>'
)

const apache = new Movie (
	'apache',
	'<p>L\'APACHE</p>'
)

const raptus = new Movie (
	'raptus',
	'<p>RAPTUS</p>'
)

const piscine = new Movie (
	'piscine',
	'<p>5H MOINS 20 <br>à la piscine</p>'
)

const chienne = new Movie (
	'chienne',
	'<p>CHIENNE</p>'
)

const movies = [desiderare, apache, raptus, piscine, chienne]; 

let markup, 
		main = document.querySelector('main');

if (main.className = 'homeSection') {
	movies.forEach(movie => {
		markup = `
			<article class="movie movie--${movie.modifier}">
				<div class="movieTitle">
					${movie.title}
				</div>
			</article> 
		`;
		main.innerHTML += markup;
	});
}

const moviesItems = document.querySelectorAll('.movieTitle p'),
			header = document.querySelector('header'), 
			footer = document.querySelector('footer'), 
			nav = document.querySelector('.nav'); 

moviesItems.forEach( moviesItem => {
	moviesItem.addEventListener('click', function() {
		window.location.replace('/movies.html'); 
	})
});

/********** Home -- Burger menu **********/

const menu = document.querySelector('.menu'), 
			movieTitles = document.querySelectorAll('.movieTitle'), 
			closeMenu = document.querySelector('.closeMenu'); 

menu.addEventListener('click', function() {
	menu.classList.toggle('is-clicked'); 
	nav.classList.toggle('is-clicked');
	movieTitles.forEach(movieTitle => {
		movieTitle.classList.toggle('is-clicked');
	});
}); 

/********** Movies -- Generate movies' content **********/

console.log(pathName);

if (pathName === '/movies.html') { 
	footer.style.display = 'none'; 
	markup = `
		<section class="movieCover">
			<div class="movieCover__title">
				<p class="movieCover__time">2'20</p>
				<p>L'</p><p>A</p><p>P</p><p>A</p><p>C</p><p>H</p><p>E</p>
				<p class="movieCover__date">2018</p>
			</div>
			<div class="movieCover__type">
				<p>C</p><p>O</p><p>U</p><p>R</p><p>T</p><p>-</p><p>M</p><p>É</p><p>T</p><p>R</p><p>A</p><p>G</p><p>E</p>
			</div>
			<div class="movieCover__img"></div>
		</section>
	`; 
	main.innerHTML = markup;
}

/********** Menu && Press / Contact pages **********/

const tab = {
	'accueil' : 'Accueil', 
	'press' : 'Press', 
	'contact' : 'Contact'
}; 

for (var key in tab) {
	console.log(Object.keys(tab));
	nav.innerHTML += `<li class="navItem">${tab[key]}</li>`;
}

if (pathName === '/press.html' || pathName === '/contact.html') {
	main.innerHTML = 'En attente de contenu';
}