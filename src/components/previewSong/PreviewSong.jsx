import React from 'react'
import PropTypes from 'prop-types';

import './PreviewSong.css'

class PreviewSong extends React.Component {

    render () {
        return (
            <React.Fragment>
                <p className='preview-song'>{this.props.songName}</p>
                <hr />
            </React.Fragment>
        )
    }
}

export default PreviewSong


PreviewSong.propTypes = {
    songName:PropTypes.string.isRequired,
}
