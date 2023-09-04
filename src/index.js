import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  info: document.querySelector('.cat-info'),
};

refs.loader.classList.add('hide');
refs.error.classList.add('hide');
const createMarkup = breedArr => {
  if (breedArr.length > 1) {
    return breedArr.map(({ id, name }) => {
      return `<option value=${id}>${name}</option>`;
    });
  }
};

const addMarkup = markup => {
  refs.select.insertAdjacentHTML('beforeend', markup);
};
fetchBreeds()
  .then(createMarkup)
  .then(addMarkup)
  .catch(error => {
    Notiflix.Notify.failure(refs.error.textContent);
  });
