import axios from 'axiosConfig';
import API_URLS from 'constants/apiUrls';
import { Dispatch } from 'react';
import {
  BitbucketActionTypes,
  BitbucketDispatchTypes,
} from './bitbucketActionTypes';
import { GithubActionTypes, GithubDispatchTypes } from './githubActionTypes';
import { GitlabActionTypes, GitlabDispatchTypes } from './gitlabActionTypes';

export enum Platform {
  Github,
  Bitbucket,
  Gitlab,
}

const createActionTypes = (platform: Platform) => {
  switch (platform) {
    case Platform.Github:
      return GithubActionTypes;
    case Platform.Bitbucket:
      return BitbucketActionTypes;
    case Platform.Gitlab:
      return GitlabActionTypes;
  }
};

const selectPlatformUrl = (platform: Platform) => {
  switch (platform) {
    case Platform.Github:
      return API_URLS.PLATFORMS.github;
    case Platform.Bitbucket:
      return API_URLS.PLATFORMS.bitbucket;
    case Platform.Gitlab:
      return API_URLS.PLATFORMS.gitlab;
  }
};

export const loadPlatform =
  (platform: Platform, token?: string) =>
  async (
    dispatch: Dispatch<
      GithubDispatchTypes | BitbucketDispatchTypes | GitlabDispatchTypes
    >
  ) => {
    const actionTypes = createActionTypes(platform);
    const url = selectPlatformUrl(platform);

    try {
      dispatch({
        type: actionTypes.LOADING,
      });

      const resp = await axios.get(url.account, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });

      dispatch({
        type: actionTypes.LOAD_SUCCESS,
        payload: resp.data,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.LOAD_FAIL,
      });
    }
  };

export const newRepo =
  (
    platform: Platform,
    username: string,
    repoName: string,
    isPrivate: boolean,
    technologies: string[],
    description?: string
  ) =>
  async (
    dispatch: Dispatch<
      GithubDispatchTypes | BitbucketDispatchTypes | GitlabDispatchTypes
    >
  ) => {
    const actionTypes = createActionTypes(platform);
    const url = selectPlatformUrl(platform);

    try {
      dispatch({
        type: actionTypes.LOADING,
      });

      const resp = await axios.post(url.repo, {
        username,
        repoName,
        description,
        technologies,
        private: isPrivate,
      });

      dispatch({
        type: actionTypes.NEW_REPO_SUCCESS,
        payload: {
          login: username,
          repo: resp.data,
        },
      });
    } catch (e) {
      dispatch({
        type: actionTypes.NEW_REPO_FAIL,
      });
    }
  };

export const connectAccount =
  (platform: Platform, code: string) =>
  async (
    dispatch: Dispatch<
      GithubDispatchTypes | BitbucketDispatchTypes | GitlabDispatchTypes
    >
  ) => {
    const actionTypes = createActionTypes(platform);
    const url = selectPlatformUrl(platform);

    try {
      dispatch({
        type: actionTypes.LOADING,
      });

      const resp = await axios.post(url.account, { code });

      dispatch({
        type: actionTypes.CONNECT_ACCOUNT_SUCCESS,
        payload: resp.data,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.CONNECT_ACCOUNT_FAIL,
      });
    }
  };

export const removePlatform =
  (platform: Platform) =>
  (
    dispatch: Dispatch<
      GithubDispatchTypes | BitbucketDispatchTypes | GitlabDispatchTypes
    >
  ) => {
    const actionTypes = createActionTypes(platform);

    dispatch({
      type: actionTypes.REMOVE,
    });
  };
