# liri-node-app

**Liri Search Bot**

This node application at it's core is a simple SWITCH CASE statement. From the command line run the liri.js file as you would any other Node.js and provide it with any of the following commands then a search term as noted below:

## What Each Command Should Do

1. `node liri.js concert-this <artist/band name here>`

   - This will search the SeatGeek Artist Events API for an artist and render the following information about each event to the terminal:
     - Name of the venue
     - Venue location
     - Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`

   - This will show the following information about the song in your terminal/bash window:
     - Artist(s)
     - The song's name
     - A preview link of the song from Spotify
     - The album that the song is from

3. `node liri.js movie-this '<movie name here>'`

   - This will output the following information to your terminal/bash window:
     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

4. `node liri.js do-what-it-says`
   - Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     - It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     - Edit the text in random.txt to test out the feature for movie-this and concert-this.

## **Dependancies:**

- fs
- moment
- axios
- node-spotify-api

## **Pictures:**

![Concert-This](/images/concert-this.jpg)

![Spotify-This-Song](/images/spotify-this-song.jpg)

![Movie-This](/images/movie-this.jpg)

![Do-What-It-Says](/images/do-what-it-says.jpg)
