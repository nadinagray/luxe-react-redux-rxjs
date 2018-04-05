import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import config from 'config';

import { login, logOut } from 'actions';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
export default class Header extends React.Component {
  render() {  
  return (
      <header className="app__header">
        <div className="app__container">
          <ul className="app__header__menu">
            <li>
              <NavLink
                to="/home"
                className="app__header__link"
                activeClassName="is-active"
                exact
                alt={config.title}
              >
                <Logo />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-story"
                className="app__header__link"
                activeClassName="is-active"
                exact
              >
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-cigars"
                className="app__header__link"
                activeClassName="is-active"
                exact
              >
                Our Cigars
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/find-your-blend"
                className="app__header__link"
                activeClassName="is-active"
                exact
              >
                Find Your Blend
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/locations"
                className="app__header__link"
                activeClassName="is-active"
                exact
              >
                Locations
              </NavLink>
            </li> */}
            <li>
              <a href="http://www.facebook.com" exact activeClassName="is-active" className="app__header__link" >
                Shop
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
