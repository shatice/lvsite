console.log('The fish knows'); 

/*********** HOME BGS **********/

function homeEffects() {

	const movieTitles = document.querySelectorAll('.movieTitle');

	let el; 

	function toggleBg() {
		document.querySelector('body').classList.toggle('is-changed-' + el.id);
		document.querySelector('header').classList.toggle('is-changed');
		movieTitles.forEach(movieTitle => {
			movieTitle.classList.toggle('is-changed');
		});
	}

	movieTitles.forEach(movieTitle => {
		movieTitle.addEventListener('mouseover', function() {
			el = movieTitle;
			toggleBg();
		})

		movieTitle.addEventListener('click', function() {
			localStorage.setItem('movieId', movieTitle.id); 
			console.log(localStorage); 
		})

		movieTitle.addEventListener('mouseout', function() {
			toggleBg();
		})
	});

}

homeEffects(); 



