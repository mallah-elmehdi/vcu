import {
    ACTION_FINISHED,
    ACTION_IN_PROGRESS,
    REMOVE_ALERT,
    RESET_GENERAL_STATES,
    SET_ALERT,
} from './actionsType';

export const initialData = {
    // ============ general states
    loader: false,
    alert: null,
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

        default:
            break;
    }
};
