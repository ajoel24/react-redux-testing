import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Headline from '../Headline/Headline';
import './App.scss';

Headline.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  temp: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    isOnline: PropTypes.bool,
  }),
  likes: PropTypes.arrayOf(
    PropTypes.shape({
      music: PropTypes.string,
      number: PropTypes.number,
    })
  ),
};

const temp = {
  name: 'Andrew Joel',
  age: 20,
  isOnline: true,
};

const likes = [
  {
    music: 'Billie Jean',
    number: 1,
  },
];

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Headline
          title="Post"
          desc="Click the button to render posts"
          temp={temp}
          likes={likes}
        />
      </main>
    </Fragment>
  );
}

export default App;
