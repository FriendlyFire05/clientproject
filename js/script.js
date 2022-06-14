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
let imageUrl = `https://image.tmb.org/t/p/w500`;
let genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=ba641dd317ef0ebb223f092b37068838`
let searchOutput = [];

$("#sortDescending").click(function() {
  searchOutput.sort(function(a,b){
    return a.popularity < b.popularity;   
})
    $(".results").empty();
  searchOutput.forEach((element, index) => {
    let output = elementToHTML(element);  
    $(".results").append(output)
  })
})
$("#sortAscending").click(function() {
  searchOutput.sort(function(a,b){
    return a.popularity > b.popularity;                                  
})

  $(".results").empty();
  searchOutput.forEach((element, index) => {
    let output = elementToHTML(element);  
    $(".results").append(output)
  });
})  
$("#searchButton").click(function() {
  let SearchedMovie = $("#searchText").val();
  $(".results").empty()

  
let SearchEngine = `https://api.themoviedb.org/3/search/movie?api_key=ba641dd317ef0ebb223f092b37068838&query=${SearchedMovie}`  

fetch(SearchEngine)
  .then(function(response) {
    return response.json();
})
  .then(function(data) {
    let searchOutputTemp = [];
    data.results.forEach((element, index) =>                  
    {
    console.log(data);
    let apiMoveIdUrl = `https://api.themoviedb.org/3/movie/${element.id}?api_key=ba641dd317ef0ebb223f092b37068838`
    searchOutputTemp.push(element);
    let output = elementToHTML(element);  
    $(".results").append(output)   
    })
    searchOutput = searchOutputTemp;
    })

  
});

function elementToHTML(element) {
  let popularityScoreClass = "popularScore";
      if(element.popularity >= 90){
        popularityScoreClass = "popularScore"
      }
      if(element.popularity > 50 && element.popularity< 90){
        popularityScoreClass = "semipopularScore"
      }
      if(element.popularity < 50){
        popularityScoreClass = "unpopularScore"
      }
    
    let ratingClass = "ratingClass";
      if(element.vote_average >= 7.5) {
        ratingClass = "highRating"
      }
      if(element.vote_average > 4.5 && element.vote_average < 7.5) {
        ratingClass = "midRating"
      }
      if(element.vote_average < 4.5) {
        ratingClass = "lowRating"
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
                  <div class="resultEntry"><b>Rating by Votes:</b> <div class="${ratingClass}">${element.vote_average}</div></div>
                  <b>Votes:</b> ${element.vote_count}
                  <p><img src="https://image.tmb.org/t/p/w500${element.poster_path}" alt+"${element.original_title}"></p>
                  </div>
                  <hr>
                  </div>
                  <br>
                  </br>
                  </ul>
                  `
  return output;
  }



// fetch("https://youtube.googleapis.com/youtube/v3/search?key=",{headers: {
//       'Accept': 'application/json',
//     },}).then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//         console.log(data);
//     });
// });
