import * as React from 'react';
import './TranslatePanel.css';
import TranslateControlsContainer from './TranslateControls/TranslateControlsContainer';
import SearchAreaContainer from './SearchArea/SearchAreaContainer';
import TerminologySection from './TerminologySection/TerminologySection';

class TranslatePanel extends React.Component {
  private handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  public render() {
    return (
      <form className="translate-panel" onSubmit={this.handleSubmit}>
        <TranslateControlsContainer/>
        <SearchAreaContainer/>
        <TerminologySection/>
      </form>
    );
  }
}
export default TranslatePanel;
