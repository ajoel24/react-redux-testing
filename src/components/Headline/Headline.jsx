import React, { Component } from 'react';
import './Headline.scss';

class Headline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, desc } = this.props;
    return (
      title && (
        <section className="headline" data-test="headline">
          <h1 data-test="title">{title}</h1>
          <p data-test="desc">{desc}</p>
        </section>
      )
    );
  }
}

export default Headline;
