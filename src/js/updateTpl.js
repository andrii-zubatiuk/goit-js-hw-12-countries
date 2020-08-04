import countryCardTpl from '../template/country-card.hbs';
import listOfCountries from '../template/listOfCountries.hbs';

const listRef = document.querySelector('.js-countries-list');
const cardRef = document.querySelector('.js-country-card');

export function updateList(countries) {
  const list = listOfCountries(countries);

  listRef.insertAdjacentHTML('beforeend', list);
}

export function updateCountryCard(country) {
  const card = countryCardTpl(country);

  cardRef.insertAdjacentHTML('beforeend', card);
}

export function clearData() {
  listRef.textContent = '';
  cardRef.textContent = '';
}
