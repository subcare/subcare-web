import React from 'react'

import './Logo.scss'

import subcareLogo from 'subcare-logo.png'

const Logo = () => {
  return (
    <img
      className="logo"
      src={subcareLogo}
      alt="Subcare Logo"
      height="128"
    />
  );
}

export default Logo
