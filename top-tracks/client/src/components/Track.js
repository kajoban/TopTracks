import React from 'react';
//this is broken
const Track = (props) => {
    <div>
        <div key={props.post.id}>
            <span>
                <a href={props.post.artists[0].external_urls.spotify} target="_blank">{props.post.artists[0].name}</a>: <a href={props.post.external_urls.spotify} target="_blank">{props.post.name}</a>
            </span>
            <br />
            <span>
                <a href={props.post.external_urls.spotify} target="_blank">
                    <img src={props.post.album.images[0].url} className='pic' style={{ height: 150 }}></img>
                </a>
            </span>
        </div>
    </div>
}

export default Track;