import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';

import PreviewSong from '../components/previewSong/PreviewSong'
import MusicPlayerContainer from '../container/MusicPlayerContainer'
import MobilePlayerContainer from '../container/MobilePlayerContainer'

import './PreviewView.css'


class PreviewView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: window.outerWidth,
            isMobile: false,
        }
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
    }

    componentWillMount() {
        window.addEventListener('resize',this.handleWindowSizeChange)
    }

    handleWindowSizeChange() {
        this.setState({ width: window.outerWidth })
        if(this.state.width < 700){
            this.setState({ isMobile: true })
        }else{
            this.setState({ isMobile: false })
        }
    };


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
                    {((this.props.allPreviewSongs.length !== 0) && (this.state.isMobile===false)) ?<MusicPlayerContainer />:null}
                </div>

                
                {((this.props.allPreviewSongs.length !== 0) && (this.state.isMobile===false)) ?
                    <div className='preview-view__song-list'>
                        {preSongs}
                    </div>
                    :null}
                



                <div className='preview-view__mobile-player'>
                    {((this.props.allPreviewSongs.length !== 0) && (this.state.isMobile===true)) ?<MobilePlayerContainer />:null}
                </div>

            </React.Fragment>
        )
    }
}


export default PreviewView


PreviewView.propTypes = {
    allPreviewSongs:PropTypes.array.isRequired,
}
