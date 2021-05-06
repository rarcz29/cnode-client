import axios from 'axiosConfig';
import API_URLS from 'constants/apiUrls';
import { Dispatch } from 'react';
import { GithubActionTypes, GithubDispatchTypes } from './githubActionTypes';

export const loadGithub = () => async (
    dispatch: Dispatch<GithubDispatchTypes>
) => {
    try {
        dispatch({
            type: GithubActionTypes.LOADING,
        });

        const resp = await axios.get(API_URLS.LOAD_GITHUB);

        dispatch({
            type: GithubActionTypes.LOAD_SUCCESS,
            payload: resp.data,
        });
    } catch (e) {
        dispatch({
            type: GithubActionTypes.LOAD_FAIL,
        });
    }
};

export const removeGithub = () => (dispatch: Dispatch<GithubDispatchTypes>) => {
    dispatch({
        type: GithubActionTypes.REMOVE,
    });
};
