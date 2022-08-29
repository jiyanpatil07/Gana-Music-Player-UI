import React, { useEffect, useState } from 'react'
import Login from './Login'
import { getTokenFromResponce } from './spotify'
import './App.css';
import Player from './Player'
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValues } from './DataLayer';
import Footer from './Footer'

const spotify = new SpotifyWebApi()
function App() {
  // const [token, settoken] = useState(null)
  const [{ user, token }, dispatch] = useDataLayerValues()

  useEffect(() => {
    const hash = getTokenFromResponce();
    window.location.hash = ""
    const _token = hash.access_token
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      // settoken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        console.log(user)
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })
      spotify.getPlaylist('4GpBODwgLjOwL6JcBunQcr').then(response => {
        console.log("DJiyan");
        console.log("jiyan patil", response)
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })
    }
    // console.log(_token);
  }, [])
  // console.log(user)
  // console.log("😂", token);
  return (
    <div className="App">
      {
        token ? <Player spotify={spotify} /> :

          <Login />
      }
      {/* spotify logo */}
      {/* Login with spotify button */}
      <Footer></Footer>
    </div>
  );
}

export default App;
