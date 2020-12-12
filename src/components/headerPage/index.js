/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated, deleteCookie } from '../../utils/cookie';

const Header = () => {
  const listMenu = ['home', 'profile', 'contact', 'infoCorona'];
  const logoutClicked = () => {
    if (window.confirm('And yakin ?')) {
      deleteCookie('userData');
      deleteCookie('token');
      window.location.replace('/');
    }
  };
  const menuUserAuthenticated = () => {
    console.log(isUserAuthenticated());
    if (isUserAuthenticated()) {
      return (
        <>
          <Link to="/product">
            <div className="menu">product</div>
          </Link>
          <div
            className="menu"
            style={{ cursor: 'pointer', color: '#000000aa' }}
            onClick={() => {
              logoutClicked();
            }}
          >
            logout
          </div>
        </>
      );
    }
    return '';
  };
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
      {menuUserAuthenticated()}
    </div>
  );
};
export default Header;
