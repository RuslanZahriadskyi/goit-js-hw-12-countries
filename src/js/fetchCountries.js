import errorsNotifications from './notifications';

function fetchCountries(searchQuery) {
  const url = 'https://restcountries.eu/rest/v2/name/';

  return fetch(`${url}${searchQuery}`)
    .then(res => {
      //   console.log(res.json());

      if (res.status === 404) {
        return errorsNotifications(
          'Nothing was found for your query. Enter the correct country name',
        );
      }
      if (res.ok) {
        return res.json();
      }
    })
    .catch(error => {
      errorsNotifications('Something went wrong');
      return error;
    });
}

export default fetchCountries;
