import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Headline from '../Headline/Headline';
import './App.scss';

Headline.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Headline title="Post" desc="Click the button to render posts" />
      </main>
    </Fragment>
  );
}

export default App;
