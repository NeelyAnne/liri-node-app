require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var axios = require("axios");

var choice = process.argv[2];
var query = process.argv[3];

var spotify = new Spotify(keys.spotify);
switch (choice) {
  case "movie-this":
    movieMe(query);
    break;
  case "spotify-this-song":
    spotifyMe(query);
    break;
  case "concert-this":
    concertMe(query);
    break;
  default:
    fs.readFile("random.txt", "utf8", function(error, data) {
      var data = data.split(",");
      var finalData = data[1];
      if (error) {
        return console.log(error);
      }
      spotifyMe(finalData);
    });
}

function spotifyMe(songName) {
  spotify.search({ type: "track", query: songName }, function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(
      "\n_Song Information_" +
        "\nArtist: " +
        data.tracks.items[0].artists[0].name +
        "\nSong: " +
        data.tracks.items[0].name +
        "\nExternal Link: " +
        data.tracks.items[0].external_urls.spotify +
        "\nAlbum: " +
        data.tracks.items[0].album.name +
        "\n" +
        "\nI love that song, got any more?"
    );
  });
}

function movieMe(movieName) {
  if (!movieName) {
    movieName = "Dunkirk";
  }
  var queryUrl =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  axios.get(queryUrl).then(function(response) {
    if (!movieName) {
      movieName = "Dunkirk";
    }
    console.log(
      "\n_Movie Information_" +
        "\nTitle: " +
        response.data.Title +
        "\nRelease Year: " +
        response.data.Year +
        "\nRating: " +
        response.data.Rated +
        "\nRelease Country: " +
        response.data.Country +
        "\nLanguage: " +
        response.data.Language +
        "\nPlot: " +
        response.data.Plot +
        "\nActors: " +
        response.data.Actors +
        "\n" +
        "\nI wish they made a million of these!"
    );
  });
}

function concertMe(artist) {
  var queryURL =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=codingbootcamp";
  axios.get(queryURL).then(function(response) {
    console.log("_Upcoming Events_");
    console.log(
      "\nArtist:" +
        artist +
        "\nVenue: " +
        response.data[0].venue.name +
        "\nLocation: " +
        response.data[0].venue.country +
        "\nDate: " +
        response.data[0].datetime +
        "\nGrab that Ticket!"
    );
  });
}
