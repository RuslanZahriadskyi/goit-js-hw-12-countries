import './styles.css';
import fetchCountries from './js/fetchCountries';
import render from './js/render';
import refs from './js/refs';
import refreshFunctions from './js/refreshSearch';
import debounce from 'lodash.debounce';

refs.inputRef.addEventListener('input', debounce(findCountry, 500));
refs.inputRef.addEventListener('click', refreshFunctions.refreshSearch);
refs.countriesRef.addEventListener('click', onFindCountryClick);

function findCountry(e) {
  const currentInput = e.target;

  if (!currentInput) {
    return;
  }

  if (currentInput.value == '') {
    return (
      refreshFunctions.refreshSearchCountries(),
      refreshFunctions.refreshSearchCountry()
    );
  }
  fetchCountries(currentInput.value).then(render.checkFoundItems);
}

function onFindCountryClick(e) {
  if (e.target.nodeName !== 'P') {
    return;
  }
  const currentInput = e.target.textContent;
  refs.inputRef.value = currentInput.value;

  fetchCountries(currentInput.value).then(render.renderCountry);
}
