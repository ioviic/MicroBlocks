import React from 'react';
import { Link } from 'react-router-dom';
import { BlockComponent } from '../SDK';

const HomePage = () => (
  <div className={`ui container`}>
    <BlockComponent block='App'/>
    <Link to={"/login"}>Login</Link>
  </div>
);

export default HomePage;
