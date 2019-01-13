import * as React from 'react';
import './App.css';
import Header from './Header/Header';
import TranslatePanelContainer from './TranslatePanel/TranslatePanelContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
        <TranslatePanelContainer/>
      </div>
    );
  }
}

export default App;
