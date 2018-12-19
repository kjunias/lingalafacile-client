import * as React from 'react';
import './TranslateControls.css';
import LanguageButton from './LanguageButton/LanguageButton';
import SwapButton from './SwapButton/SwapButton';

export interface TranslateCtrlState {
  from: {active: string};
  to: {active: string};
}

class TranslateControls extends React.Component <object, TranslateCtrlState> {

  constructor () {
    super({});
    this.state = {
      from: {active : ''},
      to: {active : ''}
     };
  }

  setActiveFrom = (lang: string) => {
    this.setState({
      from: {active: lang}
    });
  }

  setActiveTo = (lang: string) => {
    this.setState({
      to: {active: lang}
    });
  }

  render() {
    return (
      <div className="translate-controls">
        <div className="left">
          <LanguageButton  name="Lingala" active={this.state.from.active} setActive={this.setActiveFrom}/>
          <LanguageButton  name="English" active={this.state.from.active} setActive={this.setActiveFrom}/>
          <LanguageButton  name="Fancais" active={this.state.from.active} setActive={this.setActiveFrom}/>
        </div>
        <div className="center">
          <SwapButton />
          <LanguageButton
            name="Translate"
            active={this.state.from.active}
            setActive={this.setActiveFrom}
            className="translate"
          />
        </div>
        <div className="right">
          <LanguageButton  name="Lingala"  active={this.state.to.active} setActive={this.setActiveTo}/>
          <LanguageButton  name="English" active={this.state.to.active} setActive={this.setActiveTo}/>
          <LanguageButton  name="Fancais" active={this.state.to.active} setActive={this.setActiveTo}/>
        </div>
      </div>
    );
  }
}
export default TranslateControls;
  