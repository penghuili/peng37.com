import React from 'react';
import Router from './router/Router';
import { apps } from './shared/js/apps';
import AppContainer from './shared/react-pure/AppContainer';
import createTheme from './shared/react-pure/createTheme';
import initShared from './shared/react/initShared';

initShared({
  logo: `${process.env.REACT_APP_ASSETS_FOR_CODE}/watcher37-logo-231017.png`,
  app: apps.watcher37.name,
});

const theme = createTheme(apps.file37.color);

function App() {
  return (
    <AppContainer theme={theme} themeMode="dark">
      <Router />
    </AppContainer>
  );
}

export default App;
