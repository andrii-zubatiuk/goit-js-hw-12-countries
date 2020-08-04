import debounce from 'lodash.debounce';
import { error } from '@pnotify/core';
import fetchCountries from './fetchCountries';
import { updateList, updateCountryCard, clearData } from './updateTpl';

const inputRef = document.querySelector('.search-input');

inputRef.addEventListener('input', debounce(onInputValue, 500));

function onInputValue(event) {
  const inputValue = event.target.value;

  clearData();

  if (!inputValue) {
    return;
  }

  fetchCountries(inputValue).then(countries => {
    if (countries.length === 1) {
      updateCountryCard(countries[0]);

      return;
    }

    if (countries.length >= 2 && countries.length <= 10) {
      updateList(countries);

      return;
    }

    error('Too many matches found. Please enter a more specific query!');
  });
}
