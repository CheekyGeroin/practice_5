import axios from 'axios';
const KEY =
  'live_1xQ7G3lHO6kCrYUsXMIP4c1u8x2P4U3kassjlwcpGW5u6Hl3j5rz01HACjREbubp';

axios.defaults.headers.common['x-api-key'] = KEY;

export const fetchBreeds = async () => {
  return await axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(r => {
      if (r.status === 200) {
        return r.data;
      }
    })
    .catch(error => {
      console.log(error);
    });
};
export const fetchCatByBreed = catId => {
  axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`)
    .then(r => {
      if (r.status === 200) {
        console.log(r.data[0].breeds);
        return r.data[0].breeds;
      }
    })
    .catch(error => {
      console.log(error);
    });
};
