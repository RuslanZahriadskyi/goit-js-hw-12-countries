import errorsNotifications from './notifications';

function fetchCountries(searchQuery) {
  const url = 'https://restcountries.eu/rest/v2/name/';

  return fetch(`${url}${searchQuery}`)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Error feching data');
    })
    .catch(error => {
      errorsNotifications(
        'Nothing was found for your request. Enter the correct country name',
      );
      return error;
    });
}

export default fetchCountries;
