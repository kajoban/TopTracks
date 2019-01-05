import React from 'react';
//import Track from './Track.js';

const List = (props) => {
    return (
        <div>
            {
                props.tracks.map((post) =>
                    //<Track post={this.post}/>
                    //https://reactjs.org/docs/lists-and-keys.html
                    //how to map a component 
                    <div key={post.id}>
                        <span>
                            <a href={post.artists[0].external_urls.spotify} target="_blank">{post.artists[0].name}</a>: <a href={post.external_urls.spotify} target="_blank">{post.name}</a>
                        </span> 
                        <br/>
                        <span>
                            <a href={post.external_urls.spotify} target="_blank">
                                <img src={post.album.images[0].url} className='pic' style={{ height: 150 }}></img>
                            </a>
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default List;