import * as React from 'react';
import './MenuItem.css';

export interface IProps {
  name: string;
}

class MenuItem extends React.Component <IProps, object> {
  constructor (props: IProps) {
    super(props);
  }

  public render() {
    return (
      <div className="menuitem">
        {this.props.name}
      </div>
    );
  }
}  
export default MenuItem;
  