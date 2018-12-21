import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './TranslateControls.css';
import LanguageButton from './LanguageButton/LanguageButton';
import SwapButton from './SwapButton/SwapButton';
import TranslateButton from './TranslateButton/TranslateButton';
import Languages from '../../../data/languages.json';

export interface ITranslateCtrlState {
  from: { active: string };
  to: { active: string };
}

export interface ILanguage {
  name: string;
}

const translateCtrlReducer: Redux.Reducer = (state: ITranslateCtrlState, action: Redux.Action) => {
  return state;
};

const translateCtrlStore: Redux.Store = Redux.createStore(translateCtrlReducer);

class TranslateControls extends React.Component<object, ITranslateCtrlState> {

  constructor(props: object) {
    super(props);
    this.state = {
      from: { active: '' },
      to: { active: '' }
    };
  }

  private setActiveFrom = (lang: string) => {
    this.setState({
      from: { active: lang }
    });
  }

  private setActiveTo = (lang: string) => {
    this.setState({
      to: { active: lang }
    });
  }

  public render() {
    return (
      <ReactRedux.Provider store={translateCtrlStore}>
        <div className="translate-controls">
          <div className="left">
            {Languages.map((lang: ILanguage, i: string) =>
              <LanguageButton key={i} name={lang.name} active={this.state.from.active} setActive={this.setActiveFrom} />
            )}
          </div>
          <div className="center">
            <SwapButton />
            <TranslateButton />
          </div>
          <div className="right">
            {Languages.map((lang: ILanguage, i: string) =>
              <LanguageButton key={i} name={lang.name} active={this.state.to.active} setActive={this.setActiveTo} />
            )}
          </div>
        </div>
      </ReactRedux.Provider>
    );
  }
}
export default TranslateControls;
