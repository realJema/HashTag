import React, { Component } from 'react';
import './index.css';

class Jumbo extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="jumbo_title">{this.props.title}</h1>
        <p className="jumbo_slogan">{this.props.slogan}</p>
      </div>
    );
  }
}


export default Jumbo;