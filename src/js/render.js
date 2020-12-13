import countriesTpl from '../templates/countries.hbs';
import countryTpl from '../templates/country.hbs';
import errorNotifications from './notifications';
import refs from './refs';

function renderFindCountries(countries) {
  //   console.log(countriesTpl(countries));
  refs.countriesRef.innerHTML = countriesTpl(countries);
  refs.countriesRef.classList.remove('is-hidden');
}

function renderCountry(country) {
  //   console.log(countryTpl(country));
  refs.countryContainerRef.innerHTML = countryTpl(country);
  refs.countryContainerRef.classList.remove('is-hidden');
  refs.countriesRef.classList.add('is-hidden');
}

function checkFoundItems(countries) {
  if (countries.length > 10) {
    errorNotifications(
      'Too many matches found. Please enter more specific request!',
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

export default checkFoundItems;
