import React from 'react';
import {render} from 'react-dom';

//Components
import Main from './components/main/Main.js';
import App from './components/App.js'

//Router and redux
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store.js';

import cors from 'cors'

require('./stylesheets/main.scss');

//Handles Routing and Redux
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>

            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));