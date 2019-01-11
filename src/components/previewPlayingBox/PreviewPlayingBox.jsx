import React from 'react'

import './PreviewPlayingBox.css'

class PreviewPlayingBox extends React.Component {

    render () {
        return (
            <React.Fragment>
                <p className='previewText'>{this.props.songName}</p>
                <hr />
            </React.Fragment>
        )
    }
}

export default PreviewPlayingBox