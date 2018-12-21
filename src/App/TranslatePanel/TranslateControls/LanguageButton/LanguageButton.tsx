import * as React from 'react';
import './LanguageButton.css';

export interface IProps {
  name: string;
  className?: string;
  setActive: CallableFunction;
  active: string;
}

export interface ILangState {
  isActive: boolean;
}

class LanguageButton extends React.Component<IProps, ILangState> {

  constructor(props: IProps) {
    super(props);
    this.state = { isActive: false };
  }

  private onLangClick = () => {
    this.props.setActive(this.props.name);
  }

  public render() {
    return (
      <button
        type="button"
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
