import { MessageActionTypes } from './actionTypes';

export const setMessageAction = (message: string) => ({
    type: MessageActionTypes.SET_MESSAGE,
    payload: message,
});

export const clearMessageAction = () => ({
    type: MessageActionTypes.CLEAR_MESSAGE,
});
