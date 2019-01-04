import * as constants from '../constants';

/* ===== Translate Languages =====*/
export interface IChangeTranslateFromLanguage {
    type: constants.CHANGE_TRANSLATE_FROM_LANGUAGE;
    activeLanguage: string;
}

export interface IChangeTranslateToLanguage {
    type: constants.CHANGE_TRANSLATE_TO_LANGUAGE;
    activeLanguage: string;
}

export type ChangeTranslateAction = IChangeTranslateFromLanguage | IChangeTranslateToLanguage;

export function changeTranslateToLanguage(activeLang: string): IChangeTranslateToLanguage {
    return {
        type: constants.CHANGE_TRANSLATE_TO_LANGUAGE,
        activeLanguage: activeLang
    }
}

export function changeTranslateFromLanguage(activeLang: string): IChangeTranslateFromLanguage {
    return {
        type: constants.CHANGE_TRANSLATE_FROM_LANGUAGE,
        activeLanguage: activeLang
    }
}

/* ===== Submit Translate ===== */

export interface ISubmitTranslate {
    type: constants.SUBMIT_TRANSLATE;
    fromString: string;
}

export type SubmitTranslate = ISubmitTranslate;

export function submitTranslate(fromStr: string): ISubmitTranslate {
    return {
        type: constants.SUBMIT_TRANSLATE,
        fromString: fromStr
    }
}

