import axios from 'axios';
const KEY =
  'live_1xQ7G3lHO6kCrYUsXMIP4c1u8x2P4U3kassjlwcpGW5u6Hl3j5rz01HACjREbubp';

axios.defaults.headers.common['x-api-key'] = KEY;

export const fetchCatBreeds = () => {
  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
    });
};
export const fetchCatById = catId => {
  axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`)
    .then(res => {
      return res;
    })
    .then(cat => {
      console.log(cat);
    })
    .catch(error => {
      console.log(error);
    });
};
