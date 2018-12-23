import { ChangeTranslateAction } from '../actions';
import { IStoreState } from '../types/index';
import { CHANGE_TRANSLATE_FROM_LANGUAGE, CHANGE_TRANSLATE_TO_LANGUAGE } from '../constants/index';

export function translateLanguageChange(state: IStoreState, action: ChangeTranslateAction): IStoreState {
    switch (action.type) {
        case CHANGE_TRANSLATE_FROM_LANGUAGE:
            return { ...state, translate: { ...state.translate, from: { ...state.translate.from, language: action.activeLanguage } } };
        case CHANGE_TRANSLATE_TO_LANGUAGE:
        return { ...state, translate: { ...state.translate, to: { ...state.translate.to, language: action.activeLanguage } } };
    }
    return state;
}