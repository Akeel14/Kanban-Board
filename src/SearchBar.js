import React from 'react';
import { SearchBar as SearchBarStyles } from './Styles';

function SearchBar() {
  return (
    <SearchBarStyles>
      <input type="text" placeholder="Search for a task" />
      <button>Search</button>
    </SearchBarStyles>
  );
}

export default SearchBar;