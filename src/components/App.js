import React from 'react';
import PropTypes from 'prop-types';
import Header from "./common/Header";
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <Header/>
      {this.props.children}
      </div>
    );
  }
}

App.PropTypes ={
  children:PropTypes.element.isRequired
};

export default App;
