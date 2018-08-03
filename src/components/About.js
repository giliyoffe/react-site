import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
//import './style.css';

const AboutItem = ({ match }) => {
  return <div>Id number: {match.params.id}</div>;
};
class About extends Component {
  render() {
    return (
      <div>
        <Link to="/about/12">About12</Link>

        <Route path="/about/:id" component={AboutItem}/>
        <p>
          'We are ....'
        </p>
      </div>
    );
  }
}

export default About;
