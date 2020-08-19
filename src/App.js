import React, { useEffect } from 'react';
import './css/App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player';
import { useDataLayerValue } from './Components/DataLayer';

// Gives us access to spotifies web api
const spotify = new SpotifyWebApi();

function App() {
  // This uses destructuring to get the object with the user,
  // Rips the user out and dispatches it back to the client 
  const [{ user, token }, dispatch] = useDataLayerValue();
  
  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    // If there is a token
    if (_token) {
      dispatch({
        type: "SET_TOKEN", 
        token: _token
      });

      // Set spotify's access token, so your allowed to go back and forth on the site
      spotify.setAccessToken(_token);

      // This gets the users profile
      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS", 
          playlists: playlists
        })
      });

      spotify.getPlaylist('37i9dQZEVXcHdJK6KY9K4n').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY", 
          discover_weekly: response
        })
      });
    }
  }, []);

  return (
    <div className="app">
      {
        // If we have a token show h1, else show login page
        token ? <Player spotify = {spotify} /> : <Login/>
      }
    </div>
  );
}

export default App;
