import * as React from 'react';
import './TranslatePanel.css';
import TranslateControls from './TranslateControls/TranslateControls';
import SearchArea from './SearchArea/SearchArea';
import TerminologySection from './TerminologySection/TerminologySection';

class TranslatePanel extends React.Component {
    render() {
      return (
        <div className="translate-panel">
          <TranslateControls/>
          <SearchArea/>
          <TerminologySection/>
        </div>
      );
    }
  }
export default TranslatePanel;
  