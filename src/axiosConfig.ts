import { refresh } from 'actions/authActions';
import axios from 'axios';
import LOCAL_STORAGE from 'constants/localStorage';
import { bindActionCreators } from 'redux';
import store from './store';

const instance = axios.create({
    baseURL: 'https://localhost:5001/api',
    timeout: 10000,

    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${
            JSON.parse(
                localStorage.getItem(LOCAL_STORAGE.USER_DATA_NAME) ?? '{}'
            )?.token
        }`,
    },
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            (error.response.status === 401 || error.response.status === 403) &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            const boundActions = bindActionCreators(
                { refresh },
                store.dispatch
            );
            console.log(store.getState().auth.token); // TODO: remove
            await boundActions.refresh();
            console.log(store.getState().auth.token); // TODO: remove
            axios.defaults.headers.common['Authorization'] =
                'Bearer ' + store.getState().auth.token;
            return axios(originalRequest);
        }
        return Promise.reject(error);
    }
);

export default instance;
