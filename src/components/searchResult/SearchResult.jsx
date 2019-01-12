import React from "react";

import './SearchResult.css';

class SearchResultList extends React.Component {

  render () {
    return (
      <React.Fragment>
        <div className='search-result'>
          <div>
            <img className='search-result__song-image' src={this.props.imageURL} />
          </div>
          <div className='search-result__text'>
            <p className='search-result__text-song-name'>{this.props.songName}</p>
            <p className='search-result__text-artist'>{this.props.artist}</p>
            <p className='search-result__text-album'>{this.props.album}</p>
          </div>
          <div className='search-result__image-playing-div'>
            {this.props.playing? <img className='search-result__image-playing' src={require('./musicPlaying.png')} />:null}
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  };

}

export default SearchResultList;
