import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Photos from './Photos';

class App extends React.Component {

    render() {
      return (
        <HashRouter>
          <div className="App">
          <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/photos" component={Photos} />
          </div>
        </HashRouter>
      );
    }
  }
  
  export default App;