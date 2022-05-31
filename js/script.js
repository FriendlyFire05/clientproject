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
let RanGenNum = 0

$("button").click(function() {
  let SearchedMovie = $("input").val();
  $(".results").empty()
  
let SearchEngine = `https://api.themoviedb.org/3/search/movie?api_key=ba641dd317ef0ebb223f092b37068838&query=${SearchedMovie}`  

fetch(SearchEngine)
  .then(function(response) {
    return response.json();
})
  .then(function(data) {
    data.results.forEach((element, index) =>                  
    {
    console.log(element);
    let popularityScoreClass = "popularScore";
      if(element.popularity > 90){
        popularityScoreClass = "popularScore"
      }
      if(element.popularity > 50 && element.popularity< 90){
        popularityScoreClass = "semipopularScore"
      }
      if(element.popularity < 50){
        popularityScoreClass = "unpopularScore"
      }
    
    let output = `
                  <ul>
                  <div class="movieInfo">
                  <hr>
                  <div class="title"><b>${element.original_title}</b></div>
                  <div class="info">
                  <b>Description:</b> ${element.overview}
                  <br>
                  <b>Language:</b> ${element.original_language}
                  <br>
                  <b>Year of Release:</b> ${element.release_date}
                  <br>
          
                  <div class="resultEntry"><b>Popularity Score:</b> <div class="${popularityScoreClass}">${element.popularity}</div></div>
                  </div>
                  <hr>
                  </div>
                  <br>
                  </br>
                  </ul>
                  
                  `
    if(element.original_language === "en") {
      
    }
      

      
      
    $(".results").append(output)
      
        
    })
    
  })

});




// fetch("https://youtube.googleapis.com/youtube/v3/search?key=",{headers: {
//       'Accept': 'application/json',
//     },}).then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//         console.log(data);
//     });
// });
