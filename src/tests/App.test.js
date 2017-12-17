import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../app/blocks/app/App';

it('renders without crashing', () => {
  const props = {
    configuration: { test: 'mama' },
  };
  // const div = document.createElement('div');
  expect(1).toBe(1);
});
