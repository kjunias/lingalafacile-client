import * as React from 'react';
import './SearchArea.css';

export interface ISearchAreaProps {
  text: string;
  onSearchTextChange: (text: string) => void;
}

class SearchArea extends React.Component<ISearchAreaProps> {

  private handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    this.props.onSearchTextChange(event.target.value);
  }

  public render() {
    return (
      <div className="search-area">
        <div className="from">
          <textarea required={true} value={this.props.text} onChange={this.handleTextChange} />
        </div>
        <div className="to">
          <textarea disabled={true} />
        </div>
      </div>
    );
  }
}
export default SearchArea;
