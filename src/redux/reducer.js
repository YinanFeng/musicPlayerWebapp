import { merge, } from 'ramda'

import { getPlayStatus, addToPrevious, chooseNewSong } from './utils.js'


const initialState = {
    searchResult: [],
    allPreviewSongs: [],
    currentSong: null,
    currentStatus: 'stopping',
}


export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'NEW_SEARCH':
            return merge(state, {searchResult: payload.songSearched})
        case 'CHANGE_STATUS':
            return merge(state, {currentStatus: getPlayStatus(state.currentStatus)})
        case 'ADD_PREVIEW':
            return merge(state, {allPreviewSongs: addToPrevious(payload.newPreviewTrackId,state.searchResult,state.allPreviewSongs)})
        case 'PLAY_NEW_SONG':
            return merge(state, {currentSong: chooseNewSong(payload.newPreviewId, state.searchResult)})
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
