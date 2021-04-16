import LOCAL_STORAGE from 'constants/localStorage';

export const getDataFromLocalStorage = () => {
    const data = localStorage.getItem(LOCAL_STORAGE.USER_DATA_NAME);

    if (data) {
        return JSON.parse(data);
    }

    return null;
};
