import countriesTpl from '../templates/countries.hbs';
import countryTpl from '../templates/country.hbs';
import errorNotifications from './notifications';
import refs from './refs';

export default function checkFoundItems(countries) {
  if (countries.length === undefined) {
    return error;
  }
  // console.log(countries.length);
  if (countries.length > 10) {
    errorNotifications(
      'Too many matches found. Please enter a more specific query!',
    );
    return;
  }

  if (countries.length === 1) {
    //   console.log(renderCountry(countries[0]));
    renderCountry(countries[0]);
    return;
  }
  // console.log(renderFindCountries(countries))
  renderFindCountries(countries);
}

function renderFindCountries(countries) {
  //   console.log(countriesTpl(countries));
  refs.countriesRef.innerHTML = countriesTpl(countries);
  refs.countriesRef.classList.remove('is-hidden');
}

function renderCountry(country) {
  // console.log(countryTpl(country));
  refs.countryContainerRef.innerHTML = countryTpl(country);
  refs.countryContainerRef.classList.remove('is-hidden');
  refs.countriesRef.classList.add('is-hidden');
  refs.countriesRef.innerHTML = '';
}
