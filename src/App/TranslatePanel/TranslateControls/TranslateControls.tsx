import * as React from 'react';
import './TranslateControls.css';
import LanguageButton from './LanguageButton/LanguageButton';
import SwapButton from './SwapButton/SwapButton';
import TranslateButton from './TranslateButton/TranslateButton';
import Languages from '../../../data/languages.json';

export interface ITranslateCtrlProps {
  from: { active: string };
  to: { active: string };
  changeTranslateFromLanguage: (active: string) => void;
  changeTranslateToLanguage: (active: string) => void;
}

export interface ILanguage {
  name: string;
}

class TranslateControls extends React.Component<ITranslateCtrlProps> {
  public render() {
    return (
      <div className="translate-controls">
        <div className="left">
          {Languages.map((lang: ILanguage, i: string) =>
            <LanguageButton key={i} name={lang.name} active={this.props.from.active} setActive={this.props.changeTranslateFromLanguage} />
          )}
        </div>
        <div className="center">
          <SwapButton />
          <TranslateButton />
        </div>
        <div className="right">
          {Languages.map((lang: ILanguage, i: string) =>
            <LanguageButton key={i} name={lang.name} active={this.props.to.active} setActive={this.props.changeTranslateToLanguage} />
          )}
        </div>
      </div>
    );
  }
}
export default TranslateControls;
