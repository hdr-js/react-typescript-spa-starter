import { ThemeProvider } from '@mui/material/styles';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/globals.scss';
import store from './ducks/store';
import Components from './routes';
import routesConfig from './routes/dictionary.json';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Routes>
        {routesConfig.map((route) => {
          const Componennt = Components[route.element];
          return (
            <Route
              key={route.element}
              path={route.path}
              element={
                <Suspense fallback="...">
                  <Componennt />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </Provider>
  </ThemeProvider>
);

export default App;
