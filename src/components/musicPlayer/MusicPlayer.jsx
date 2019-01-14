import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';

import './MusicPlayer.css'

class MusicPlayer extends React.Component{
    render() {
        return (
            <div>
                <div className='musicPlayer__imageDiv'>
                    {this.props.currentSong !== null ? <img src={this.props.currentSong.artworkUrl100} className='musicPlayer__imageDiv-songImagePreview' />:null }
                </div>
                {this.props.currentSong === null ? <button className='musicPlayer__playButton'><img className='musicPlayer__play-image' src={require('./stop.png')} /></button>:null}
                {(this.props.currentSong !== null && this.props.currentStatus === 'playing')?<button className='musicPlayer__playButton' onClick={ this.props.changeStatus }><img className='musicPlayer__play-image' src={require('./play.jpg')} /></button>:null}
                {(this.props.currentSong !== null && this.props.currentStatus !== 'playing')?<button className='musicPlayer__playButton' onClick={ this.props.changeStatus }><img className='musicPlayer__play-image' src={require('./stop.png')} /></button>:null}
                {this.props.currentSong === null ? null:
                
                    <div className='musicPlayer__audioPlayer'>
                        {this.props.currentStatus === 'playing'? <ReactPlayer url={this.props.currentSong.previewUrl} playing /> : <ReactPlayer url={this.props.currentSong.previewUrl} />}
                    </div>
                }
                {/* <hr className='musicPlayer__line' /> */}
            </div>

        )
    }
}


export default MusicPlayer


MusicPlayer.propTypes = {
    currentStatus:PropTypes.string.isRequired,
}
