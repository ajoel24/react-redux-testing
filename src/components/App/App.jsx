import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Headline from '../Headline/Headline';
import './App.scss';

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
