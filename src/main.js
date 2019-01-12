import React from 'react';
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './style.css'

import SearchViewContainer from './container/SearchViewContainer'
import PreviewViewContainer from './container/PreviewViewContainer'
import reducer from './redux/reducer'


// require('es6-promise').polyfill()
const store = createStore(reducer)

render(
    <Provider store={store}>
        <div className='main'>
            <div className='main__searchView'>
                <SearchViewContainer />
            </div>
            <div className='main__previewView'>
                <PreviewViewContainer/>
            </div>
        </div>
    </Provider>
    , document.getElementById('root'));
