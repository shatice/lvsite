// function movieMarkUp() {
//   const movieSection = document.getElementById('movieSection'); 

//   console.log(localStorage);

//   if (localStorage.movieId = 'apache') {
//     console.log('ok'); 
//   }
  
//   class coverMovie {
//     constructor(movieId, movieTitle, movieTime, movieType, movieDate, movieSelection, moviePress, movieGalery, movieLink) {
//       this.movieId = movieId; 
//       this.movieTitle = movieTitle;
//       this.movieTime = movieTime;
//       this.movieType = movieType;
//       this.movieDate = movieDate;
//       this.movieSelection = movieSelection;
//       this.moviePress = moviePress;
//       this.moviePress = movieGalery;
//       this.movieLink = movieLink;
//     }
//   }

//   const typeCourt = `<p>C</p><p>O</p><p>U</p><p>R</p><p>T</p><p>-</p><p>M</p><p>É</p><p>T</p><p>R</p><p>A</p><p>G</p><p>E</p>`,
//         dates = [`2018`, `2019`]
  
//   const apache = new coverMovie ( 
//     'apache',
//     `<p>L'</p><p>A</p><p>P</p><p>A</p><p>C</p><p>H</p><p>E</p>`, 
//     `2'20`,
//     typeCourt,
//     dates[0],
//     `<h3>Séléction Festival</h3>
//     <p>Nikon Festival : Prix des Écoles</p>`,
//     `<h3>Articles :</h3>
//     <ul>
//       <li><a href="https://www.lesinrocks.com/2019/03/29/cinema/actualite-cinema/le-nikon-film-festival-offre-un-9e-palmares-sous-le-signe-du-partage/" target="_blank">Les Inrockuptibles</a></li>
//       <li><a href="https://www.konbini.com/fr/cinema/nikon-film-festival-2019-coup-de-coeur-15-courts-metrages/" target="_blank">Konbini</a></li>
//       <li><a href="https://www.fisheyemagazine.fr/decouvertes/actu/le-palmares-du-nikon-film-festival-une-histoire-de-partage/" target="_blank">Fisheye</a></li>
//       <li><a href="https://www.artyparis.net/leonie-violain-nikon-film-festival/" target="_blank">ArtyParis</a></li>
//     </ul>`,
//     `<li><img src="../assets/imgs/apache1.jpg" alt=""></li>
//     <li><img src="../assets/imgs/apache2.jpg" alt=""></li>
//     <li><img src="../assets/imgs/apache3.jpg" alt=""></li>
//     <li><img src="../assets/imgs/apache4.jpg" alt=""></li>`,
//     `https://vimeo.com/357378807`
//   )

//   const raptus = new coverMovie ( 
//     'apache',
//     `<p>L'</p><p>A</p><p>P</p><p>A</p><p>C</p><p>H</p><p>E</p>`, 
//     `2'20`,
//     typeCourt,
//     dates[0],
//     `<h3>Séléction Festival</h3>
//     <p>Nikon Festival : Prix des Écoles</p>`,
//     `<h3>Articles :</h3>
//     <ul>
//       <li><a href="https://www.lesinrocks.com/2019/03/29/cinema/actualite-cinema/le-nikon-film-festival-offre-un-9e-palmares-sous-le-signe-du-partage/" target="_blank">Les Inrockuptibles</a></li>
//       <li><a href="https://www.konbini.com/fr/cinema/nikon-film-festival-2019-coup-de-coeur-15-courts-metrages/" target="_blank">Konbini</a></li>
//       <li><a href="https://www.fisheyemagazine.fr/decouvertes/actu/le-palmares-du-nikon-film-festival-une-histoire-de-partage/" target="_blank">Fisheye</a></li>
//       <li><a href="https://www.artyparis.net/leonie-violain-nikon-film-festival/" target="_blank">ArtyParis</a></li>
//     </ul>`,
//     `<li><img src="../assets/imgs/apache1.jpg" alt=""></li>
//     <li><img src="../assets/imgs/apache2.jpg" alt=""></li>
//     <li><img src="../assets/imgs/apache3.jpg" alt=""></li>
//     <li><img src="../assets/imgs/apache4.jpg" alt=""></li>`,
//     `https://vimeo.com/357378807`
//   )
  
//   const coverMovies = [apache, raptus];
  
//   coverMovies.forEach(coverMovie => {
//     const movieMarkUp = `
//       <section class="movieCover ${coverMovie.movieId}">
//       <div class="movieCover__infos movieCover__infos--${coverMovie.movieId}">
//         <div class="movieCover__title">
//           <div>
//             ${coverMovie.movieTitle}
//           </div>
//         </div>
//         <div class="movieCover__details">
//           <div class="movieCover__description">
//             <p class="movieCover__time">${coverMovie.movieTime}</p>
//             <div class="movieCover__type">
//               ${coverMovie.movieType}
//             </div>
//             <p class="movieCover__date">${coverMovie.movieDate}</p>
//           </div>
//           <div class="movieCover__prom desktop ${coverMovie.movieId}">
//             <div class="movieCover__selection">
//               ${coverMovie.movieSelection}
//             </div>
//             <div class="movieCover__press">
//               ${coverMovie.moviePress}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="movieCover__img movieCover__img--${coverMovie.movieId}"></div>
//     </section>
//     <div class="movieCover__prom movieCover__prom--${coverMovie.movieId} mobile">
//       <div class="movieCover__selection">
//         ${coverMovie.movieSelection}
//       </div>
//       <div class="movieCover__press">
//         ${coverMovie.moviePress}
//       </div>
//     </div>
//     <div class="galery">
//       <ul>
//         ${coverMovie.movieGalery}
//       </ul>
//     </div>
//     <button class="btnMovie btnMovie--${coverMovie.movieId}"><a href="${coverMovie.movieLink}" target="_blank">Voir le film</a></button>
//     `;
  
//     movieSection.innerHTML += movieMarkUp;
//   });
// }

// movieMarkUp(); 

