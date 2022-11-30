import React from 'react';
import RoutesApp from './Routes';
import store from "./store/store";
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={store} loading={null}>
      <RoutesApp />
    </Provider>

  );
}

export default App;