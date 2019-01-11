import React from "react";

import './SearchResBox.css';

class SearchResBox extends React.Component {

  render () {
    return (
      <React.Fragment>
        <div className='boxLayout'>
          <div>
            <img className='songImage' src={this.props.imageURL} />
          </div>
          <div className='text'>
            <p className='textSongName'>{this.props.songName}</p>
            <p className='textArist'>{this.props.artist}</p>
            <p className='textAlbum'>{this.props.album}</p>
          </div>
          <div className='resImageDiv'>
            {this.props.playing? <img className='playImage' src={require('./musicPlaying.png')} />:null}
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  };

}

export default SearchResBox;