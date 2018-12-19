import * as React from 'react';
import './TranslatePanel.css';
import TranslateControls from './TranslateControls/TranslateControls';
import SearchArea from './SearchArea/SearchArea';
import TerminologySection from './TerminologySection/TerminologySection';

class TranslatePanel extends React.Component {
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  render() {
    return (
      <form className="translate-panel" onSubmit={this.handleSubmit}>
        <TranslateControls/>
        <SearchArea/>
        <TerminologySection/>
      </form>
    );
  }
}
export default TranslatePanel;
