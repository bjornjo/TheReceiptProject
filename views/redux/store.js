import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'


import rootReducer from './reducers/index.js';

const defaultState = {
    user: {
    	successRespond: false
    }
};

const finalCreateStore = compose(
    applyMiddleware(thunk, createLogger())
)(createStore);

const store = finalCreateStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;