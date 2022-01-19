import axios from 'axios';
let responseData = null;

export const createPlayerApi = async ({ name }) => {
    await axios.post(`/playerr`, { name })
        .then(response => responseData = response)
        .catch(err => {
            responseData = err.response;
        });
    return responseData;
};
