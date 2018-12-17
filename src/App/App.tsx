import * as React from 'react';
import './App.css';
import Header from './Header/Header';
import TranslatePanel from './TranslatePanel/TranslatePanel';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <TranslatePanel/>
      </div>
    );
  }
}

export default App;
