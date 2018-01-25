import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter, getCurrentPathname } from 'react-router';
import classNames from 'classnames';

import Home from './Home.js'

require('./../../stylesheets/main.scss');

class Main extends React.Component {

	contextTypes: {
		router: PropTypes.object
	};

    render(){
        return (
        	<div>
        		<Home actions={this.props.actions} props={this.props}/>
        	</div>
            
        )
    }
}

export default withRouter(Main);
