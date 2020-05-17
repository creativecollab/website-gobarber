import React from 'react';

import Reset from './styles/Reset';
import Routes from './Routes';

import AppProvider from './Hooks';

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
};

export default App;
