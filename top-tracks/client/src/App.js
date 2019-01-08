import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './components/LogIn.js';
import Title from './components/Title.js';
//import Buttons from './components/Buttons.js';
import List from './components/List.js';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

/*
TODO:
-figure out whats up with the buttons 
-add top artists section 
-add landing page for login 
*/

let options = { limit: 10, time_range: 'long_term' }

class App extends Component {

  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      tracks: []
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }
  getTopTracks(range) {
    spotifyApi.getMyTopTracks({ limit: 20, time_range: range })
      .then((response) => {
        console.log(response)
        this.setState({
          tracks: response.items
        });
        console.log(this.state.tracks)
      })
  }
  render() {
    return (
      <div className='App'>
        <LogIn loggedIn={this.state.loggedIn}/>
        <Title loggedIn={this.state.loggedIn}/>
        <div>
          { //long term tracks buttons 
              this.state.loggedIn &&
              <button onClick={() => this.getTopTracks('long_term')}>
                  All Time
              </button>
          }
          { //long term tracks buttons 
              this.state.loggedIn &&
              <button onClick={() => this.getTopTracks('medium_term')}>
                  Last Year
              </button>
          }
          { //long term tracks buttons 
              this.state.loggedIn &&
              <button onClick={() => this.getTopTracks('short_term')}>
                  Recent
              </button>
          }
        </div>        
        <List tracks={this.state.tracks}/>
      </div>
    )
  }
}

export default App;
