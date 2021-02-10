import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import AddTechModal from './components/techs/AddTechModal';
import EditLogModal from './components/logs/EditLogModal';
import TechListModal from './components/techs/TechListModal';
import AddBtn from './components/layout/AddBtn';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <div className="App">
      <Provider store={store}>
        <Fragment>
          <SearchBar />
          <div className="container">
            <AddBtn />
            <AddLogModal />
            <EditLogModal />
            <AddTechModal />
            <TechListModal />
            <Logs />
          </div>
        </Fragment>
      </Provider>
    </div>
  );
};

export default App;
