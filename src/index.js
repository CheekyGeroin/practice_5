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
  return;
};

const addMarkup = markup => {
  refs.select.insertAdjacentHTML('beforeend', markup);
};
const showError = () => {
  Notiflix.Notify.failure(refs.error.textContent);
};
fetchBreeds().then(createMarkup).then(addMarkup).catch(showError);

const createInfo = data => {
  if (data.length > 1) {
    return data.map(({ name, description, temperament, wikipedia_url }) => {
      return `<div class="info-img__container">
      <img class="info__img" href="${wikipedia_url}" alt="${name}"/>
      </div>
      <div class="info__container">
        <h1 class="cat__name">${name}</h1>
        <p class="cat__description">${description}</p>
        <p class="cat__temperament"><span class="cat__accent">Temperament:</span>${temperament}</p>
      </div>`;
    });
  }
};
const addInfoMarkup = markup => {
  refs.info.insertAdjacentHTML('beforeend', markup);
};

const onChangeSelect = () => {
  if (refs.select.value !== '') {
    const value = refs.select.value;
    fetchCatByBreed(value)
      .then(createInfo)
      .then(addInfoMarkup)
      .catch(showError);
  }
  return;
};

console.log(fetchCatByBreed('bamb'));
refs.select.addEventListener('change', onChangeSelect);
