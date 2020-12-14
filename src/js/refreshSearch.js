import refs from './refs';

function refreshSearch(e) {
  const currentInput = e.target;

  refreshSearchCountries();
  refreshSearchCountry();
  currentInput.value = '';
  refs.countriesRef.classList.add('is-hidden');
  refs.countryContainerRef.classList.add('is-hidden');
}

function refreshSearchCountries() {
  refs.countriesRef.innerHTML = '';
}

function refreshSearchCountry() {
  refs.countryContainerRef.innerHTML = '';
}

export default { refreshSearch, refreshSearchCountries, refreshSearchCountry };
