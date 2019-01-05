import React from 'react';

const Buttons = (props) => {
    return (
        <div>
            { //long term tracks buttons 
                props.loggedIn &&
                <button onClick={() => props.getTopTracks('long_term')}>
                    All Time
            </button>
            }
            { //long term tracks buttons 
                props.loggedIn &&
                <button onClick={() => props.getTopTracks('medium_term')}>
                    Last Year
            </button>
            }
            { //long term tracks buttons 
                props.loggedIn &&
                <button onClick={() => props.getTopTracks('short_term')}>
                    Recent
            </button>
            }
        </div>
    )
}

export default Buttons;