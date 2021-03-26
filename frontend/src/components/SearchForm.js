import React from 'react';

function SearchForm({ changeInput, fetchData }) {
  return (
    <form id="search-form-component" className='form-inline my-3'>
      <input
        className='form-control-lg mr-2 input-search'
        type='search'
        placeholder='Search'
        aria-label='Search'
        onChange={changeInput}
      />
      <button className='btn btn-lg btn-success my-2 my-0' type='submit' onClick={fetchData}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;