import TranslateControls from './TranslateControls';
import * as actions from '../../../state/actions';
import { StoreState } from '../../../state/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps(state: StoreState) {
  return {
    from: { active: state.translate.from.language },
    to: { active: state.translate.to.language }
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TranslateAction>) {
  return {
    changeTranslateFromLanguage: (fromLanguage: string) => dispatch(actions.changeTranslateFromLanguage(fromLanguage)),
    changeTranslateToLanguage: (toLanguage: string) => dispatch(actions.changeTranslateToLanguage(toLanguage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TranslateControls);