// src/components/Layout/Layout.js
import React from 'react';
import Header from './Header';

const Layout = ({ children, isAuthenticated, onLogout }) => (
  <>
    <Header isAuthenticated={isAuthenticated} onLogout={onLogout} />
    <main>{children}</main>
  </>
);

export default Layout;

