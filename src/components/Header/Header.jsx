import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav className="container" data-test="container" role="navigation">
        <div className="logo" data-test="logo">
          Testing!
        </div>
      </nav>
    </header>
  );
};

export default Header;
