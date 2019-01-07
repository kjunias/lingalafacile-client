import * as React from 'react';
import './TranslatePanel.css';
import TranslateControlsContainer from './TranslateControls/TranslateControlsContainer';
import SearchAreaContainer from './SearchArea/SearchAreaContainer';
import TerminologySection from './TerminologySection/TerminologySection';

export interface ITranslatePanelProps {
  fromLanguage: string;
  toLanguage: string;
  fromText: string;
  getTranslation: (from: string, to: string, fromText: string) => void;
}
class TranslatePanel extends React.Component<ITranslatePanelProps> {

  private handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.getTranslation(this.props.fromLanguage, this.props.toLanguage, this.props.fromText);
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
