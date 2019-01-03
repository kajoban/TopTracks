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
  getTopTracks(range){
    spotifyApi.getMyTopTracks({limit: 20, time_range: range})
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
        {
        !this.state.loggedIn && 
        <a href='http://localhost:8888'>Login to Spotify</a>
        }
        <div>
          <h1>Top Tracks: </h1>
        </div>
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
        {
          this.state.tracks.map((post) => 
          <div key={post.id}>
            <span><a href={post.artists[0].external_urls.spotify} target="_blank">{post.artists[0].name}</a>: <a href={post.external_urls.spotify} target="_blank">{post.name}</a></span> <br/>
            <span><a href={post.external_urls.spotify} target="_blank"><img src={post.album.images[0].url} className='pic' style={{ height: 150 }}></img></a></span>
          </div>
          )
        }
      </div>
    )
  }
}

export default App;
