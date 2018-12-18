import * as React from 'react';
import './LanguageButton.css';

export interface Props {
  name: string;
  className?: string;
}

class LanguageButton extends React.Component <Props, object> {
  constructor (props: Props) {
    super(props);
  }

  render() {
    return (
      <button className={'lang-button ' + (this.props.className ? this.props.className : '')}>
        {this.props.name}
      </button>
    );
  }
}  
export default LanguageButton;
  