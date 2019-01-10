import React from "react"
//with fetch

import './SearchView.css'
import SearchResBox from '../components/searchResBox/SearchResBox'

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
    console.log(e.target.value)
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
    console.log(this.props.searchRes)
    const resSongs = this.props.searchRes.map(item => 
      <button
        key={item.trackId}
        onClick={() => { this.props.addToPreview(item.trackId) }}>
        {item.trackName}
      </button>)

    const resSongsList = this.props.searchRes.map(item =>{
      let playing = false
      if(this.props.currentSong != null && this.props.currentSong.trackId===item.trackId){
        playing = true
      }
      return (<button key={item.trackId} 
                     onClick={() => { this.props.addToPreview(item.trackId) }}>
              <SearchResBox  
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
        <input value={this.state.searchBoxValue} onChange={this.onSearchBoxValueChanged} />
        <button onClick={this.searchByArtistName}>search</button>
        {resSongsList}
      </React.Fragment>
    );
  };
}


export default SearchView;