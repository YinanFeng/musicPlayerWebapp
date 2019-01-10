import { merge, } from 'ramda'


const initialState = {
    searchResult: [],
    allPreviewSongs: [],
    currentSong: null,
    currentStatus: 'stopping',
}


export default (state = initialState, action) => {
    console.log('in reducerrrrrrr')
    const { type, payload } = action
    switch (type) {
        case 'NEW_SEARCH':
            return merge(state, {searchResult: payload.songSearched})
        case 'CHANGE_STATUS':
            if(state.currentStatus === 'playing') {
                return merge(state, {currentStatus: 'stopping'})
            }
            return merge(state, {currentStatus: 'playing'})
        case 'ADD_PREVIEW':
            const newPreview = state.searchResult.filter(song => song.trackId === payload.newPreviewTrackId)
            const previewAfterFilter = state.allPreviewSongs.filter(song => song.trackId !== payload.newPreviewTrackId)
            console.log(state.allPreviewSongs)
            //TODO: unique the prelist
            const preList = [...newPreview, ...previewAfterFilter]
            return merge(state, {allPreviewSongs: preList})
        case 'PLAY_NEW_SONG':
            const newSong = state.searchResult.filter(song => song.trackId === payload.newPreviewId).pop()
            return merge(state, {currentSong: newSong})
        default:
            return state
    }
}

export const updateNewSearch = res => ({
    type: 'NEW_SEARCH', payload: { songSearched: res }
})

export const addToPreview = trackId => ({
    type: 'ADD_PREVIEW', payload: { newPreviewTrackId: trackId }
})

export const changeStatus = () => ({
    type: 'CHANGE_STATUS', payload: null
})

export const playNewSong = trackId => ({
    type: 'PLAY_NEW_SONG', payload: { newPreviewId: trackId }
})