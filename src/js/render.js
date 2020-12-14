import countriesTpl from '../templates/countries.hbs';
import countryTpl from '../templates/country.hbs';
import errorNotifications from './notifications';
import refreshFunctions from './refreshSearch';
import refs from './refs';

function checkFoundItems(countries) {
  if (countries.length > 10) {
    errorNotifications(
      'Too many matches found. Please enter a more specific query!',
    );
    return;
  }

  if (countries.length === 1) {
    renderCountry(countries[0]);
    return;
  }

  if (countries.length <= 10 || countries.length > 1) {
    renderFindCountries(countries);
  }
}

function renderFindCountries(countries) {
  refreshFunctions.refreshSearchCountry();
  refs.countriesRef.innerHTML = countriesTpl(countries);
  refs.countriesRef.classList.remove('is-hidden');
}

function renderCountry(country) {
  refreshFunctions.refreshSearchCountries();
  refs.countryContainerRef.innerHTML = countryTpl(country);
  refs.countryContainerRef.classList.remove('is-hidden');
  refs.countriesRef.classList.add('is-hidden');
}

export default { checkFoundItems, renderFindCountries, renderCountry };
