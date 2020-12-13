import './styles.css';
import fetchCountries from './js/fetchCountries';
import checkFoundItems from './js/render';
import refs from './js/refs';
import refreshSearch from './js/refreshSearch';

let debounce = require('lodash.debounce');

refs.inputRef.addEventListener('input', debounce(findCountry, 500));
refs.inputRef.addEventListener('click', refreshSearch);
refs.countriesRef.addEventListener('click', onFindCountryClick);

function findCountry(e) {
  const currentInput = e.target.value;
  if (!currentInput) {
    return;
  }
  fetchCountries(currentInput)
    .then(checkFoundItems)
    .catch(err => {
      return err;
    });
}

function onFindCountryClick(e) {
  if (e.target.nodeName !== 'P') {
    return;
  }
  const currentInput = e.target.textContent;
  refs.inputRef.value = currentInput;

  //   console.dir(e.target);
  //   console.log(inputRef.value);

  fetchCountries(currentInput).then(checkFoundItems);
}
