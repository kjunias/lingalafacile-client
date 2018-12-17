import * as React from 'react';
import './MenuItem.css';

export interface Props {
  name: string;
}

class MenuItem extends React.Component <Props, object> {
  constructor (props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="menuitem">
        {this.props.name}
      </div>
    );
  }
}  
export default MenuItem;
  