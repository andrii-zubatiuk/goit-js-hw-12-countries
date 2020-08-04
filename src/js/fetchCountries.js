const URL = 'https://restcountries.eu/rest/v2/name/';

function fetchCountries(searchQuery) {
  return fetch(URL + searchQuery).then(res => res.json());
}

export default fetchCountries;
