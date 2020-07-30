import axios from 'axios';

const TOKEN_KEY = '1863b96e04c24d408b28106d51afc728';

export const get = (url) => {
  return axios.get(url, {
    headers: {
      'X-Auth-Token': TOKEN_KEY
    }
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error)
    });
};