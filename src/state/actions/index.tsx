import * as constants from '../constants';

/* ===== Translate Panel Actions =====*/
export interface IChangeTranslateFromLanguage {
    type: constants.CHANGE_TRANSLATE_FROM_LANGUAGE;
    activeLanguage: string;
}

export interface IChangeTranslateToLanguage {
    type: constants.CHANGE_TRANSLATE_TO_LANGUAGE;
    activeLanguage: string;
}

export interface ISubmitTranslate {
    type: constants.SUBMIT_TRANSLATE;
    fromText: string;
}

export interface ITranslateFromTextChange {
    type: constants.TRANSLATE_FROM_TEXT_CHANGE;
    fromText: string;
}

export interface ITranslateToTextChange {
    type: constants.TRANSLATE_TO_TEXT_CHANGE;
    toText: string;
}

export interface IGetTranslation {
    type: constants.GET_TRANSLATION;
    fromLanguage: string;
    toLanguage: string;
    fromText: string;
}

export type TranslateAction = IChangeTranslateFromLanguage
    | IChangeTranslateToLanguage
    | ISubmitTranslate
    | ITranslateFromTextChange
    | ITranslateToTextChange;

export type TranslateTextChange = ITranslateFromTextChange | ITranslateToTextChange;

export type SubmitTranslate = ISubmitTranslate;

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

export function translateFromTextChange(fromStr: string): ITranslateFromTextChange {
    return {
        type: constants.TRANSLATE_FROM_TEXT_CHANGE,
        fromText: fromStr
    }
}

export function translateToTextChange(toStr: string): ITranslateToTextChange {
    return {
        type: constants.TRANSLATE_TO_TEXT_CHANGE,
        toText: toStr
    }
}

export function getTranslation(fromLang:string, toLang: string, fromTxt: string): IGetTranslation {
    return {
        type: constants.GET_TRANSLATION,
        fromLanguage: fromLang,
        toLanguage: toLang,
        fromText: fromTxt
    }
}
