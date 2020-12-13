import refs from './refs';

function refreshSearch() {
  refs.inputRef.value = '';
  refs.countriesRef.classList.add('is-hidden');
  refs.countryContainerRef.classList.add('is-hidden');
  refs.countryContainerRef.innerHTML = '';
}

export default refreshSearch;
