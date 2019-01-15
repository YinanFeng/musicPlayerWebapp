
export const getPlayStatus = (status) => {
  switch(status) {
    case 'playing':
      return 'stopping';
    case 'stopping':
      return 'playing';
    default:
      return 'stopping'
  }
}

export const addToPrevious = ( trackID, searchResultList, previewList ) => {
  const newPreview = searchResultList.filter(song => song.trackId === trackID)
  const previewAfterFilter = previewList.filter(song => song.trackId !== trackID)
  const preList = [...newPreview, ...previewAfterFilter]
  return preList
}

export const chooseNewSong = ( trackID, searchResultList ) => {
  return searchResultList.filter(song => song.trackId === trackID).pop()
}