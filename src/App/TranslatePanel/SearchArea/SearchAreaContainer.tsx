import SearchArea from './SearchArea';
import * as actions from '../../../state/actions';
import { StoreState } from '../../../state/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps(state: StoreState) {
  return {
    searchText: state.translate.from.text,
    searchResult: state.translate.to.text
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TranslateTextChange>) {
  return {
    onSearchTextChange: (searchText: string) => dispatch(actions.translateFromTextChange(searchText))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchArea);