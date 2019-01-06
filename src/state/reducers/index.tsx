import { TranslateAction } from '../actions';
import { IStoreState } from '../types/index';
import { CHANGE_TRANSLATE_FROM_LANGUAGE, CHANGE_TRANSLATE_TO_LANGUAGE, TRANSLATE_FROM_TEXT_CHANGE, TRANSLATE_TO_TEXT_CHANGE } from '../constants/index';

export function translateLanguageChange(state: IStoreState, action: TranslateAction): IStoreState {
    switch (action.type) {
        case CHANGE_TRANSLATE_FROM_LANGUAGE:
            return { ...state, translate: { ...state.translate, from: { ...state.translate.from, language: action.activeLanguage } } };
        case CHANGE_TRANSLATE_TO_LANGUAGE:
            return { ...state, translate: { ...state.translate, to: { ...state.translate.to, language: action.activeLanguage } } };
        case TRANSLATE_FROM_TEXT_CHANGE:
            return { ...state, translate: { ...state.translate, from: { ...state.translate.from, text: action.fromText } } };
        case TRANSLATE_TO_TEXT_CHANGE:
            return { ...state, translate: { ...state.translate, to: { ...state.translate.to, text: action.toText } } };
    }
    return state;
}