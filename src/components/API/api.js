import axios from 'axios';
let responseData = null;

export const createPlayerApi = async payload => {
    await axios.post(`${process.env.VUE_APP_BASE_URL}/player`,
        {
            name: payload,
            apikey: process.env.VUE_APP_API_KEY
        })
        .then(response => responseData = response)
        .catch(err => {
            responseData = err.response;
        });
    return responseData;
};
export const createBoardApi = async () => {
    await axios.post(`${process.env.VUE_APP_BASE_URL}/create_board`,
        {
            apikey: process.env.VUE_APP_API_KEY
        })
        .then(response => responseData = response)
        .catch(err => {
            responseData = err.response;
        });
    return responseData;
};
export const listOfBoardsApi = async () => {
    await axios.post(`${process.env.VUE_APP_BASE_URL}/boards`,
        {
            apikey: process.env.VUE_APP_API_KEY
        })
        .then(response => responseData = response)
        .catch(err => {
            responseData = err.response;
        });
    return responseData;
};
