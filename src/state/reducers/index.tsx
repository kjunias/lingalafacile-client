import { ChangeTranslateAction, SubmitTranslate } from '../actions';
import { IStoreState } from '../types/index';
import { CHANGE_TRANSLATE_FROM_LANGUAGE, CHANGE_TRANSLATE_TO_LANGUAGE, SUBMIT_TRANSLATE } from '../constants/index';

export function translateLanguageChange(state: IStoreState, action: ChangeTranslateAction): IStoreState {
    switch (action.type) {
        case CHANGE_TRANSLATE_FROM_LANGUAGE:
            return { ...state, translate: { ...state.translate, from: { ...state.translate.from, language: action.activeLanguage } } };
        case CHANGE_TRANSLATE_TO_LANGUAGE:
            return { ...state, translate: { ...state.translate, to: { ...state.translate.to, language: action.activeLanguage } } };
    }
    return state;
}

export function submitTranslate(state: IStoreState, action: SubmitTranslate): IStoreState {
    switch (action.type) {
        case SUBMIT_TRANSLATE:
            return { ...state, translate: { ...state.translate, from: { ...state.translate.from, value: action.fromString } } };
    }
    return state;
}