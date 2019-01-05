import React from 'react';

const LogIn = (props) => {
    return (
        !props.loggedIn && 
        <a href='http://localhost:8888'>Login to Spotify</a>
    )
}

export default LogIn;