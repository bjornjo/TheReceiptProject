import React, {PropTypes} from 'react';
import { Link, withRouter, getCurrentPathname } from 'react-router';
import reactCSS from 'reactcss';
import classNames from 'classnames';

const Logo = require('-!babel-loader!svg-react-loader!./../../img/zeipt.svg?name=Icon');

require('./../../stylesheets/main.scss');

export default class NavigationBar extends React.Component {
    render(){
        return (
            <div className='nav-wrapper'>
                <ul className='nav-bar'>
                    <li className='nav-link'><Logo className='logo'/></li>
                </ul>
            </div>
        )
    }
}