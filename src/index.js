import './styles.css';
import api from './js/fetchCountries';
import checkFoundItems from './js/render';
import refs from './js/refs';
import refreshSearch from './js/refreshSearch';
import errorsNotifications from './js/notifications';

let debounce = require('lodash.debounce');

refs.inputRef.addEventListener('input', debounce(findCountry, 500));
refs.inputRef.addEventListener('click', refreshSearch);
refs.countriesRef.addEventListener('click', onFindCountryClick);

function findCountry(e) {
  const currentInput = e.target.value;
  if (!currentInput) {
    return;
  }
  api.fetchCountries(currentInput).then(checkFoundItems).catch(onFetchError);
}

function onFindCountryClick(e) {
  if (e.target.nodeName !== 'P') {
    return;
  }
  const currentInput = e.target.textContent;
  refs.inputRef.value = currentInput;

  //   console.dir(e.target);
  //   console.log(inputRef.value);

  api.fetchCountries(currentInput).then(checkFoundItems);
}

function onFetchError() {
  errorsNotifications(
    'Nothing was found for your request. Enter the correct country name',
  );
}
