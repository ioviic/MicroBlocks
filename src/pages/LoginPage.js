import React from 'react';
import { Link } from 'react-router-dom';
import { BlockComponent } from '../SDK';


const LoginPage = () => (
  <div>
    <BlockComponent block='Login' />
    <Link to={"/"}>Home</Link>
  </div>
);

export default LoginPage;
