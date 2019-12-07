console.log('The fish knows'); 
console.log('And its the right url'); 

/*********** Home **********/

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
			console.log('OOOK'); 
			el = movieTitle;
			toggleBg();
		})
		movieTitle.addEventListener('mouseout', function() {
			toggleBg();
		})
	});

}

homeEffects(); 


