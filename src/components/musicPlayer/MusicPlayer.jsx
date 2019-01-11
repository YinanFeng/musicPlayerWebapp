import React from 'react'
import ReactPlayer from 'react-player'

import './MusicPlayer.css'

class MusicPlayer extends React.Component{
    render() {
        return (
            <React.Fragment>
                <div className='imageDiv'>
                    {this.props.currentSong !== null ? <img src={this.props.currentSong.artworkUrl100} className='songImagePreview' />:null }
                </div>
                {this.props.currentSong === null ? <button className='playButton'><img className='imagePosition' src={require('./stop.png')} /></button>:null}
                {(this.props.currentSong !== null && this.props.currentStatus === 'playing')?<button className='playButton' onClick={ this.props.changeStatus }><img className='imagePosition' src={require('./play.jpg')} /></button>:null}
                {(this.props.currentSong !== null && this.props.currentStatus !== 'playing')?<button className='playButton' onClick={ this.props.changeStatus }><img className='imagePosition' src={require('./stop.png')} /></button>:null}
                {this.props.currentSong === null ? null:                
                    <div className='musicPlayerDiv'>
                        {this.props.currentStatus === 'playing'? <ReactPlayer url={this.props.currentSong.previewUrl} playing /> : <ReactPlayer url={this.props.currentSong.previewUrl} />}
                    </div>
                }
                <hr className='lineStyle' />
            </React.Fragment>
                
        )
    }
}


export default MusicPlayer