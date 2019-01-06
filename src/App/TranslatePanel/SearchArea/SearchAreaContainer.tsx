import SearchArea from './SearchArea';
import * as actions from '../../../state/actions';
import { StoreState } from '../../../state/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps(state: StoreState) {
  return {
    text: state.translate.from.text
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ITranslateFromTextChange>) {
  return {
    onSearchTextChange: (text: string) => dispatch(actions.translateFromTextChange(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchArea);