import React from 'react';
import './nav.css';
import PropTypes from 'prop-types';

const Nav = ({nav}) => (
    <ul>
        <li><i class="fa fa-home" aria-hidden="true"></i>Home</li>
        <li><i class="fa fa-bolt" aria-hidden="true"></i>Moments</li>
        <li><i class="fa fa-bell-o" aria-hidden="true"></i>Notifications</li>
        <li><i class="fa fa-envelope-o" aria-hidden="true"></i>Messages</li>
        <li><img src="Twitter_Bird.png" alt="twitterbird"/></li>
        <li><input placeholder="Search"></input></li>
        <li>Profile</li>
        <li>Tweet</li>
    </ul>
    
);

Nav.propTypes = {
  nav: PropTypes.array.isRequired
};

export default Nav;