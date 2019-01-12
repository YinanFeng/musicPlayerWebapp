import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeStatus, playNewSong } from '../redux/reducer'
import PreviewView from '../view/PreviewView'

const mapStateToProps = (state) => ({
    allPreviewSongs: state.allPreviewSongs,
    currentSong: state.currentSong,
    currentStatus: state.currentStatus
  })

  // const mapDispatchToProps = (dispatch) => ({
  //   changeStatus: () => dispatch(changeStatus()),
  //   playNewSong: newPreviewId => dispatch(playNewSong(newPreviewId))
  // })

  const mapDispatchToProps = (dispatch) => bindActionCreators({
    changeStatus,
    playNewSong,
  }, dispatch)

  export default connect(mapStateToProps, mapDispatchToProps)(PreviewView);
