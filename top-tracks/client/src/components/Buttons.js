import React, { Component } from 'react';
//why wont this work?????
class Buttons extends Component {
    render(){
        return (
            <div>
                { //long term tracks buttons 
                    this.props.loggedIn &&
                    <button onClick={() => this.props.getTopTracks('long_term')}>
                        All Time
                </button>
                }
                { //long term tracks buttons 
                    this.props.loggedIn &&
                    <button onClick={() => this.props.getTopTracks('medium_term')}>
                        Last Year
                </button>
                }
                { //long term tracks buttons 
                    this.props.loggedIn &&
                    <button onClick={() => this.props.getTopTracks('short_term')}>
                        Recent
                </button>
                }
            </div>
        )
    } 
}

export default Buttons;