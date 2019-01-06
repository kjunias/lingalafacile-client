import * as React from 'react';
import './TranslatePanel.css';
import TranslateControlsContainer from './TranslateControls/TranslateControlsContainer';
import SearchAreaContainer from './SearchArea/SearchAreaContainer';
import TerminologySection from './TerminologySection/TerminologySection';

export interface ITranslatePanelProps {
  translateToTextChange: (translatedText: string) => void;
}
class TranslatePanel extends React.Component<ITranslatePanelProps> {

  private handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.translateToTextChange("Testing");
  }

  public render() {
    return (
      <form className="translate-panel" onSubmit={this.handleSubmit}>
        <TranslateControlsContainer />
        <SearchAreaContainer />
        <TerminologySection />
      </form>
    );
  }
}
export default TranslatePanel;
