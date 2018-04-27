import React from 'react';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/" activeClassName="active">Home</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
{" |"}
      <Link to="/course" activeClassName="active">Course</Link>      
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;