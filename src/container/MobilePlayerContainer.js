import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeStatus } from '../redux/reducer'
import MobilePlayer from '../components/mobilePlayer/MobilePlayer'

const mapStateToProps = (state) => ({
    allPreviewSongs: state.allPreviewSongs,
  })

const mapDispatchToProps = dispatch => bindActionCreators({
    changeStatus
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MobilePlayer);