import * as React from 'react';
import './SearchArea.css';

export interface ISearchAreaProps {
  searchText: string;
  searchResult: string;
  onSearchTextChange: (searchText: string) => void;
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
          <textarea required={true} value={this.props.searchText} onChange={this.handleTextChange} />
        </div>
        <div className="to">
          <textarea disabled={true} value={this.props.searchResult}/>
        </div>
      </div>
    );
  }
}
export default SearchArea;
