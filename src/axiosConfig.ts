import { logout } from 'actions/authActions';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import store from 'store';

const getToken = () => {};

const instance = axios.create({
  baseURL: 'https://localhost:5001/api',
  timeout: 10000,

  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    const auth = token ? `Bearer ${token}` : '';
    config.headers.common['Authorization'] = auth;
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      const boundActions = bindActionCreators({ logout }, store.dispatch);
      boundActions.logout();
    }
    return error;
  }
);

// instance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//         const originalRequest = error.config;
//         if (
//             (error.response.status === 401 || error.response.status === 403) &&
//             !originalRequest._retry
//         ) {
//             originalRequest._retry = true;
//             const boundActions = bindActionCreators(
//                 { refresh },
//                 store.dispatch
//             );
//             // TODO: it's not working
//             await boundActions.refresh();
//             instance.defaults.headers.common['Authorization'] =
//                 'Bearer ' + store.getState().auth.token;
//             return axios(originalRequest);
//         }
//         return Promise.reject(error);
//     }
// );

export default instance;
