import React from 'react';

const Title = (props) => {
    return(
        props.loggedIn &&
        <div>
          <h1>Top Tracks: </h1>
        </div>
    )
}

export default Title;