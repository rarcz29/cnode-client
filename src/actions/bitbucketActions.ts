import axios from 'axiosConfig';
import API_URLS from 'constants/apiUrls';
import { Dispatch } from 'react';
import {
    BitbucketActionTypes,
    BitbucketDispatchTypes,
} from './bitbucketActionTypes';

export const loadBitbucket = () => async (
    dispatch: Dispatch<BitbucketDispatchTypes>
) => {
    try {
        dispatch({
            type: BitbucketActionTypes.LOADING,
        });

        const resp = await axios.get(API_URLS.LOAD_BITBUCKET);

        dispatch({
            type: BitbucketActionTypes.LOAD_SUCCESS,
            payload: resp.data,
        });
    } catch (e) {
        dispatch({
            type: BitbucketActionTypes.LOAD_FAIL,
        });
    }
};

export const removeBitbucket = () => (
    dispatch: Dispatch<BitbucketDispatchTypes>
) => {
    dispatch({
        type: BitbucketActionTypes.REMOVE,
    });
};
