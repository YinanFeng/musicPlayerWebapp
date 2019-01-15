import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';
import AudioPlayer from "react-h5-audio-player";

import './MobilePlayer.css'

class MobilePlayer extends React.Component{
    render() {
        return (
            <div>
                <AudioPlayer

                    src={this.props.allPreviewSongs[0].previewUrl}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                />
            </div>

        )
    }
}


export default MobilePlayer


MobilePlayer.propTypes = {
    allPreviewSongs:PropTypes.array.isRequired,
}
