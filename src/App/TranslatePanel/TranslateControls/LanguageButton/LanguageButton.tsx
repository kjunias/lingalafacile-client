import * as React from 'react';
import './LanguageButton.css';

export interface Props {
  name: string;
  className?: string;
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
    this.setState({
      isActive: true
    });
  }

  render() {
    return (
      <button 
        className={'lang-button' + (this.props.className ? ' ' + this.props.className : '') 
          + (this.state.isActive ? ' active' : '')}
        onClick={this.onLangClick}
      >
        {this.props.name}
      </button>
    );
  }
}  
export default LanguageButton;
  