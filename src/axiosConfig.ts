import axios from 'axios';
import LOCAL_STORAGE from 'constants/localStorage';

const instance = axios.create({
    baseURL: 'https://localhost:5001/api',
    timeout: 10000,

    headers: {
        'Content-Type': 'application/json',
        'Accept-Charset': 'application/json',
        Authorization: `Bearer ${
            JSON.parse(
                localStorage.getItem(LOCAL_STORAGE.USER_DATA_NAME) ?? '{}'
            )?.token
        }`,
    },
});

export default instance;
