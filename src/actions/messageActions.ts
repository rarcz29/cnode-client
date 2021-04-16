import { MessageActionTypes } from './actionTypes';

export const setMessage = (message: string) => ({
    type: MessageActionTypes.SET_MESSAGE,
    payload: message,
});

export const clearMessage = () => ({
    type: MessageActionTypes.CLEAR_MESSAGE,
});
