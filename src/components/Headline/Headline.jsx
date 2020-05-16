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
        <section className="headline">
          <h1>{title}</h1>
          <p>{desc}</p>
        </section>
      )
    );
  }
}

export default Headline;
