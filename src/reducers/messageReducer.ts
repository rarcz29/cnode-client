import { MessageActionTypes } from 'actions/actionTypes';

interface IDefaultState {}

const initialState: IDefaultState = {};

const messageReducer = (
    state: IDefaultState = initialState,
    action: any
): IDefaultState => {
    const { type, payload } = action;

    switch (type) {
        case MessageActionTypes.SET_MESSAGE:
            return { message: payload };

        case MessageActionTypes.CLEAR_MESSAGE:
            return { message: '' };

        default:
            return state;
    }
};

export default messageReducer;
