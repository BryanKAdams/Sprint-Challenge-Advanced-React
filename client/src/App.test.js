import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Axios} from './components/Axios'
import Nav from './components/Navigation'
import { render } from '@testing-library/react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
afterEach(rtl.cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
afterEach(rtl.cleanup);
test('Axios render worked.', () => {
  render(<Axios />);
  
});
test('Axios render worked.', () => {
  render(<Nav />);
  
});