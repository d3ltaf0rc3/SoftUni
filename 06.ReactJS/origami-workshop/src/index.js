import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation';
import Auth from './Auth';

ReactDOM.render(
  <React.StrictMode>
    <Auth>
      <Navigation />
    </Auth>
  </React.StrictMode>,
  document.getElementById('root')
);