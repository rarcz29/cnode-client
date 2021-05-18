import axios from 'axiosConfig';
import API_URLS from 'constants/apiUrls';
import { Dispatch } from 'react';
import { GithubActionTypes, GithubDispatchTypes } from './githubActionTypes';

export const loadGithub =
  (token?: string) => async (dispatch: Dispatch<GithubDispatchTypes>) => {
    try {
      dispatch({
        type: GithubActionTypes.LOADING,
      });

      const resp = await axios.get(API_URLS.LOAD_GITHUB, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });

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

export const newRepoGithub =
  (
    username: string,
    repoName: string,
    technologies: string[],
    description?: string
  ) =>
  async (dispatch: Dispatch<GithubDispatchTypes>) => {
    try {
      dispatch({
        type: GithubActionTypes.LOADING,
      });

      const resp = await axios.post(API_URLS.GITHUB_NEW_REPO, {
        username,
        repoName,
        description,
        technologies,
      });

      dispatch({
        type: GithubActionTypes.NEW_REPO_SUCCESS,
        payload: {
          login: username,
          repo: resp.data,
        },
      });
    } catch (e) {
      dispatch({
        type: GithubActionTypes.NEW_REPO_FAIL,
      });
    }
  };

export const connectAccountGithub =
  (code: string) => async (dispatch: Dispatch<GithubDispatchTypes>) => {
    try {
      dispatch({
        type: GithubActionTypes.LOADING,
      });

      const resp = await axios.post('github/account', { code });

      dispatch({
        type: GithubActionTypes.CONNECT_ACCOUNT_SUCCESS,
        payload: resp.data,
      });
    } catch (e) {
      dispatch({
        type: GithubActionTypes.CONNECT_ACCOUNT_FAIL,
      });
    }
  };

export const removeGithub = () => (dispatch: Dispatch<GithubDispatchTypes>) => {
  dispatch({
    type: GithubActionTypes.REMOVE,
  });
};
