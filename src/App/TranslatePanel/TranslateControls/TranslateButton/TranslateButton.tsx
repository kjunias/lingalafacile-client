import * as React from 'react';
import './TranslateButton.css';

export interface IProps {
  submitTranslate: CallableFunction;
}

class TranslateButton extends React.Component<IProps> {

constructor(props: IProps) {
  super(props);
  this.state = { isActive: false };
}

  public render() {
  return (
    <button className="lang-button translate" type="submit">
      Translate
      </button>
  );
}
}
export default TranslateButton;