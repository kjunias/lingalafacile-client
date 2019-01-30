import * as React from 'react';
import SearchAreaContainer from './SearchArea/SearchAreaContainer';
import TerminologySection from './TerminologySection/TerminologySection';
import TranslateControlsContainer from './TranslateControls/TranslateControlsContainer';
import './TranslatePanel.css';

export interface ITranslatePanelProps {
  fromLanguage: string;
  toLanguage: string;
  fromText: string;
  getTranslation: (from: string, to: string, fromText: string) => void;
}
class TranslatePanel extends React.Component<ITranslatePanelProps> {

  private handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (this.handleValidation()) {
      // tslint:disable-next-line
      debugger
      this.props.getTranslation(this.props.fromLanguage, this.props.toLanguage, this.props.fromText);
    }
  }

  private handleValidation(): boolean {
    return this.props.fromLanguage !== null && this.props.fromLanguage !== ''
    && this.props.toLanguage !== null && this.props.toLanguage !== ''
    && this.props.fromText !== null && this.props.fromText !== '';
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
