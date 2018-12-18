import * as React from 'react';
import './SearchArea.css';

class SearchArea extends React.Component {
    render() {
      return (
        <div className="search-area">
          <div className="from">
            <textarea />
          </div>
          <div className="to">
            <textarea disabled={true}/>
          </div>
        </div>
      );
    }
  }
export default SearchArea;
  