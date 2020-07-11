import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './global/styles';
import Routes from './routes';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}
