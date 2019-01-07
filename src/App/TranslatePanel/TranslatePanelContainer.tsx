import TranslatePanel from './TranslatePanel';
import * as actions from '../../state/actions';
import { StoreState } from '../../state/types'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps(state: StoreState) {
  return {
    fromLanguage: state.translate.from.language,
    toLanguage: state.translate.to.language,
    fromText: state.translate.from.text
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.IGetTranslation>) {
  return {
    getTranslation: (fromLanguage: string, toLanguage: string, fromText: string) => dispatch(actions.getTranslation(fromLanguage, toLanguage, fromText))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TranslatePanel);