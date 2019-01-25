import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import Page from './containers/Page/Page';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Page />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
