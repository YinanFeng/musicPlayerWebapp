import React from "react"
import PropTypes from 'prop-types';

import './SearchView.css'
import SearchResult from '../components/searchResult/SearchResult'

const fetchJsonp = require('fetch-jsonp')


class SearchView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchBoxValue: '',
  }
    this.searchByArtistName = this.searchByArtistName.bind(this)
    this.onSearchBoxValueChanged = this.onSearchBoxValueChanged.bind(this)
  }

  onSearchBoxValueChanged(e) {
    this.setState({ searchBoxValue: e.target.value, })
}

  searchByArtistName(){
    const artistNameArray = this.state.searchBoxValue.split(' ')
    if(artistNameArray.length === 2){
      const artistName = `${artistNameArray[0]}+${artistNameArray[1]}`
      console.log(artistName)
      //jack johnson''
      const url = `https://itunes.apple.com/search?term=${artistName}&callback`
      console.log(url)
      fetchJsonp(url)
        .then(res => res.json())
        .then(res => this.props.updateNewSearch(res.results))
        .catch(err => console.log(err))
    }
  }

  render () {
    const resSongsList = this.props.searchRes.map(item =>{
      let playing = false
      if(this.props.currentSong != null && this.props.currentSong.trackId===item.trackId){
        playing = true
      }
      return (<button key={item.trackId}
                      className='search-view__preview-song'
                      onClick={() => { this.props.addToPreview(item.trackId) }}>
              <SearchResult
              imageURL={item.artworkUrl100}
              songName={item.trackName}
              artist={item.artistName}
              album={item.collectionName}
              playing={playing}
              />
            </button>)
    })

    return (
      <React.Fragment>
        <input value={this.state.searchBoxValue}
               className='search-view__search-input'
               onChange={this.onSearchBoxValueChanged} />
        <button className='search-view__search-button' onClick={this.searchByArtistName}>search</button>
        <div className='search-view__search-result-song-list'>
          {resSongsList}
        </div>
      </React.Fragment>
    );
  };
}


export default SearchView;

SearchView.propTypes = {
    searchRes:PropTypes.array.isRequired,
}
