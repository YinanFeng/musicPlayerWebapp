import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';

import PreviewSong from '../components/previewSong/PreviewSong'
import MusicPlayerContainer from '../container/MusicPlayerContainer'

import './PreviewView.css'


class PreviewView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const preSongs = this.props.allPreviewSongs.map(item =>
            <button
              className='preview-view__song-option'
              key={item.trackId}
              onClick={() => { this.props.playNewSong(item.trackId) }}>
              <PreviewSong songName={item.trackName} />
            </button>)
        return (
            <React.Fragment>
                <div>
                    {this.props.allPreviewSongs.length !== 0?<MusicPlayerContainer />:null}
                </div>
                <div className='preview-view__song-list'>
                    {preSongs}
                </div>
            </React.Fragment>
        )
    }
}


export default PreviewView


PreviewView.propTypes = {
    allPreviewSongs:PropTypes.array.isRequired,
}
