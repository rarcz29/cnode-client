import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bitbucketReducer from './bitbucketReducer';
import githubReducer from './githubReducer';
import gitlabReducer from './gitlabReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  github: githubReducer,
  bitbucket: bitbucketReducer,
  gitlab: gitlabReducer,
});

export default rootReducer;
