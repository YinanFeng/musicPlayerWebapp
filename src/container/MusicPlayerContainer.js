import { connect } from 'react-redux'

import { changeStatus } from '../redux/reducer'
import MusicPlayer from '../components/musicPlayer/MusicPlayer'
 
const mapStateToProps = (state) => ({
    currentSong: state.currentSong,
    currentStatus: state.currentStatus
  })
  
  const mapDispatchToProps = (dispatch) => ({
    changeStatus: () => dispatch(changeStatus()),
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);