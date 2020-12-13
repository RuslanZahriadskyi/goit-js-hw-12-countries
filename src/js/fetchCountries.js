import errorsNotifications from './notifications';

function fetchCountries(searchQuery) {
  const url = 'https://restcountries.eu/rest/v2/name/';

  return fetch(`${url}${searchQuery}`)
    .then(res => {
      // console.log(res.json()
      //   console.log(res.ok);
      if (res.ok) return res.json();
    })
    .catch(err => {
      console.log('error', err);
      //   errorsNotifications('Enter a valid country name');
    });
}

export default fetchCountries;
