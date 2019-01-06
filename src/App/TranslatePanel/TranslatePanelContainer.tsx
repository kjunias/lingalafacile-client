import TranslatePanel from './TranslatePanel';
import * as actions from '../../state/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapDispatchToProps(dispatch: Dispatch<actions.ITranslateToTextChange>) {
  return {
    translateToTextChange: (translatedText: string) => dispatch(actions.translateToTextChange(translatedText))
  }
}

export default connect(null, mapDispatchToProps)(TranslatePanel);