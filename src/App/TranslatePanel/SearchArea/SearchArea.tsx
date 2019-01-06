import * as React from 'react';
import './SearchArea.css';

export interface ISearchAreaProps {
  text: string;
  onTextChange: (text: string) => void;
}

class SearchArea extends React.Component<ISearchAreaProps> {

  private handleTextChange = (event: React.ChangeEvent) => {
    const text = typeof event.target.nodeValue === "string" ? event.target.nodeValue : "";
    this.props.onTextChange(text);
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
