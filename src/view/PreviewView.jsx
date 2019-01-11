import React from 'react'
import ReactPlayer from 'react-player'

import PreviewPlayingBox from '../components/previewPlayingBox/PreviewPlayingBox'
import MusicPlayerContainer from '../container/MusicPlayerContainer'

import './PreviewView.css'


class PreviewView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const preSongs = this.props.allPreviewSongs.map(item => 
            <button
              className='previewOption'
              key={item.trackId} 
              onClick={() => { this.props.playNewSong(item.trackId) }}>
              <PreviewPlayingBox songName={item.trackName} />
            </button>)
        return (
            <React.Fragment>
                <div>
                    {this.props.allPreviewSongs.length !== 0?<MusicPlayerContainer />:null}
                </div>
                <div className='previewSongList'>
                    {preSongs}
                </div>
            </React.Fragment>
        )
    }
}
// <ReactPlayer url='https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/08/d9/c5/08d9c56d-73e5-be1c-1eda-071a48284440/mzaf_8565025008024189274.plus.aac.p.m4a' playing />

export default PreviewView