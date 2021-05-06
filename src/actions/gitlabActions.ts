import axios from 'axiosConfig';
import API_URLS from 'constants/apiUrls';
import { Dispatch } from 'react';
import { GitlabActionTypes, GitlabDispatchTypes } from './gitlabActionTypes';

export const loadGitlab = () => async (
    dispatch: Dispatch<GitlabDispatchTypes>
) => {
    try {
        dispatch({
            type: GitlabActionTypes.LOADING,
        });

        const resp = await axios.get(API_URLS.LOAD_GITLAB);

        dispatch({
            type: GitlabActionTypes.LOAD_SUCCESS,
            payload: resp.data,
        });
    } catch (e) {
        dispatch({
            type: GitlabActionTypes.LOAD_FAIL,
        });
    }
};

export const removeGitlab = () => (dispatch: Dispatch<GitlabDispatchTypes>) => {
    dispatch({
        type: GitlabActionTypes.REMOVE,
    });
};
