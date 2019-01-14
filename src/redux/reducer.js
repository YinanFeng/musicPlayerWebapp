import { merge, } from 'ramda'

import { getPlayStatus } from './utils.js'


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
            const newPreview = state.searchResult.filter(song => song.trackId === payload.newPreviewTrackId)
            const previewAfterFilter = state.allPreviewSongs.filter(song => song.trackId !== payload.newPreviewTrackId)
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
