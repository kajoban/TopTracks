import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


let options = {limit: 10, time_range: 'long_term'}

class App extends Component {
  
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if(token){
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
  getTopTracks(){
    spotifyApi.getMyTopTracks({limit: 20, time_range: 'long_term'})
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
        <a href='http://localhost:8888'>Login to Spotify</a>
        <div>
          Top Tracks: 
        </div>
        {
          this.state.tracks.map((post) => 
          <div key={post.id}>
            <span>{post.name}</span> <br/>
            <span> <img src={post.album.images[0].url} style={{ height: 150 }}></img> </span>
          </div>
          )
        }
      { this.state.loggedIn &&
        <button onClick={() => this.getTopTracks()}>
          Get Top Tracks!
        </button>
      }
      </div>
    )
  }
}

export default App;
