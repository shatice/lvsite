// /***** HOMEPAGE CONTENT *****/

// function hpMarkUp() {
// 	const homeSection = document.getElementById('homeSection');

// 	class homeMovie {
// 		constructor(movieId, movieTitle) {
// 			this.movieId = movieId; 
// 			this.movieTitle = movieTitle;
// 		}
//   }

// 	const desiderare = new homeMovie ( 
//     'desiderare',
// 		'DESIDERARE:<br>cor ne adito'
// 	)

// 	const apache = new homeMovie ( 
//     'apache',
// 		`L'Apache`
// 	)
	
// 	const raptus = new homeMovie ( 
//     'raptus',
// 		`Raptus`
// 	)
	
// 	const piscine = new homeMovie ( 
//     'piscine',
// 		`5H MOINS 20<br>à la piscine`
// 	)
	
// 	const chienne = new homeMovie ( 
//     'chienne',
// 		`Chienne`
// 	)
	
// 	const homeMovies = [desiderare, apache, raptus, piscine, chienne];
  
//   homeMovies.forEach(homeMovie => {
//     const hpMarkUp = `
// 			<article class="movie movie--${homeMovie.movieId}">
// 			<div id="${homeMovie.movieId}" class="movieTitle">
// 				<a href="./pages/${homeMovie.movieId}.html">${homeMovie.movieTitle}</a>
// 			</div>
// 			</article>
//     `;
  
//     homeSection.innerHTML += hpMarkUp;
// 	});
	

// }

// hpMarkUp();