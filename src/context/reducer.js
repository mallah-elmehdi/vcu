import { ACTION_FINISHED, ACTION_IN_PROGRESS, LANG_EN, LANG_FR, REMOVE_ALERT, RESET_GENERAL_STATES, SET_ALERT } from './actionsType';
import { LANG } from '../constants/landing';

export const initialData = {
    // ============ general states
    loader: false,
    alert: null,
    lang: LANG.FR,
};

export const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        // ====== STATES
        case RESET_GENERAL_STATES:
            return { ...initialData, ...state, loader: initialData.loader, alert: initialData.alert };

        // ====== PROGRESS
        case ACTION_IN_PROGRESS:
            return { ...state, loader: true };
        case ACTION_FINISHED:
            return { ...state, loader: false };

        // ======= ALERT
        case SET_ALERT:
            return { ...state, alert: payload };
        case REMOVE_ALERT:
            return { ...state, alert: null };

        // ======= ALERT
        case LANG_FR:
            return { ...state, lang: LANG.FR };
        case LANG_EN:
            return { ...state, lang: LANG.EN };

        default:
            break;
    }
};
