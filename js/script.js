/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

// 'https://youtube.googleapis.com/youtube/v3/search?q=doctorstrange&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed





// fetch(apiMovieUrl).then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//         console.log(data);
//     });
// });
let apiMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=ba641dd317ef0ebb223f092b37068838&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

$("button").click(function() {
  let SearchedMovie = $("input").val();

let SearchEngine = `https://api.themoviedb.org/3/search/movie?api_key=ba641dd317ef0ebb223f092b37068838&query=${SearchedMovie}`  

fetch(SearchEngine)
  .then(function(response) {
    return response.json();
})
  .then(function(data) {
    console.log(data);
  
});
});



// fetch("https://youtube.googleapis.com/youtube/v3/search?key=",{headers: {
//       'Accept': 'application/json',
//     },}).then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//         console.log(data);
//     });
// });
