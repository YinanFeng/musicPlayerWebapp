import { connect } from 'react-redux'

import { changeStatus, playNewSong } from '../redux/reducer'
import PreviewView from '../view/PreviewView'
 
const mapStateToProps = (state) => ({
    allPreviewSongs: state.allPreviewSongs,
    currentSong: state.currentSong,
    currentStatus: state.currentStatus
  })
  
  const mapDispatchToProps = (dispatch) => ({
    changeStatus: () => dispatch(changeStatus()),
    playNewSong: newPreviewId => dispatch(playNewSong(newPreviewId))
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(PreviewView);
