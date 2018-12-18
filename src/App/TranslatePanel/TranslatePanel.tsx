import * as React from 'react';
import './TranslatePanel.css';
import TranslateControls from './TranslateControls/TranslateControls';
import SearchArea from './SearchArea/SearchArea';

class TranslatePanel extends React.Component {
    render() {
      return (
        <div className="translate-panel">
          <TranslateControls/>
          <SearchArea/>
        </div>
      );
    }
  }
export default TranslatePanel;
  