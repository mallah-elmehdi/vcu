import {
    ACTION_FINISHED,
    ACTION_IN_PROGRESS,
    REMOVE_ALERT,
    SET_ALERT,
    RESET_GENERAL_STATES,
} from './actionsType';

// ========== STATES
export const resetGeneralStates = () => ({ type: RESET_GENERAL_STATES });

// ========== LOADER
export const actionInProgress = () => ({ type: ACTION_IN_PROGRESS });
export const actionFinished = () => ({ type: ACTION_FINISHED });

// ========== ALERT
export const setAlert = (payload) => ({ type: SET_ALERT, payload });
export const removeAlert = () => ({ type: REMOVE_ALERT });

