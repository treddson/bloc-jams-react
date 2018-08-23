import React, { Component } from 'react';


export default class PlayerBar extends Component {
    render() {
        return (
            <section className="player-bar">
            <section id="buttons">
           <button id="previous" onClick={this.props.handlePrevClick}>
             <span className="ion-md-skip-backward"></span>
           </button>
           <button id="play-pause" onClick={this.props.handleSongClick} >
             <span className={this.props.isPlaying ? 'ion-md-pause' : 'ion-md-play'}></span>
           </button>
           <button id="next" onClick={this.props.handleNextClick}>
             <span className="ion-md-skip-forward"></span>
           </button>
         </section>
         <section id="time-control">                                                                    
           <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
           <input 
            type="range" 
            className="seek-bar" 
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step=".01"
            onChange={this.props.handleTimeChange}
           />
           <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
         </section>
         <section id="volume-control">
           <div className="volume-icon ion-volume-high"></div>
           <input 
            type="range" 
            className="seek-bar" 
            value={this.props.volume}
            max="1"
            min="0"
            step=".001"
            onChange={this.props.handleVolumeChange} 
           />
         </section>
            </section>
        );
    }
}

