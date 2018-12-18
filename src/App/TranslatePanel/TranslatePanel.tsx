import * as React from 'react';
import './TranslatePanel.css';
import TranslateControls from './TranslateControls/TranslateControls';

class TranslatePanel extends React.Component {
    render() {
      return (
        <div className="translate-panel">
          <TranslateControls/>
        </div>
      );
    }
  }
export default TranslatePanel;
  