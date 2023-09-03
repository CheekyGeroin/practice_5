import { fetchCatBreeds, fetchCatById } from './cat-api';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  info: document.querySelector('.cat-info'),
};

const firstFetch = () => {
  const data = fetchCatBreeds();
  console.log(data);
};

firstFetch();
