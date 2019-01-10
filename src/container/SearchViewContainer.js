import { connect } from 'react-redux'

import { updateNewSearch, addToPreview } from '../redux/reducer'
import SearchView from '../view/SearchView'
 
const mapStateToProps = (state) => ({
    searchRes: state.searchResult,
    currentSong: state.currentSong
  })
  
  const mapDispatchToProps = (dispatch) => ({
    updateNewSearch: searchRes => dispatch(updateNewSearch(searchRes)),
    addToPreview: trackId=> dispatch(addToPreview(trackId))
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
  