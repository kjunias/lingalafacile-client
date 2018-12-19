import * as React from 'react';
import './LanguageButton.css';

export interface Props {
  name: string;
  className?: string;
  setActive: Function;
  active: string;
}

export interface LangState {
  isActive: boolean;
}

class LanguageButton extends React.Component <Props, LangState> {

  constructor (props: Props) {
    super(props);
    this.state = { isActive: false };
  }

  onLangClick = () => {
    this.props.setActive(this.props.name);
  }

  render() {
    return (
      <button 
        className={'lang-button' + (this.props.className ? ' ' + this.props.className : '') 
          + (this.props.active === this.props.name ? ' active' : '')}
        onClick={this.onLangClick}
      >
        {this.props.name}
      </button>
    );
  }
}  
export default LanguageButton;
  